import moment from 'moment';

enum FoundStatus {
  Ongoing = '進行中',
  Finished = '已結束'
}

export default function useCalcLeftTime(project: any) {
  const getRemainingSeconds = (endDate: string) => {
    const now = moment();
    if (!endDate) {
      return { status: FoundStatus.Ongoing };
    }
    const end = moment(endDate);
    const remainingSeconds = end.diff(now, 'seconds');
    if (remainingSeconds > 0) {
      return { status: FoundStatus.Ongoing, seconds: remainingSeconds };
    }
    return {
      status: FoundStatus.Finished,
      finishedStatus: project?.project_progress >= project?.project_target
    };
  };

  const projectStatus = getRemainingSeconds(project?.project_end_date);
  const timeLeft = ref(projectStatus?.seconds);
  const timerInstance: Ref<NodeJS.Timeout | null> = ref(null);

  onMounted(() => {
    countdownTimer();
  });

  onBeforeUnmount(() => {
    if (timerInstance.value) {
      clearTimeout(timerInstance.value);
    }
  });
  function countdownTimer() {
    if (timeLeft.value && timeLeft.value > 0) {
      timeLeft.value--;
      timerInstance.value = setTimeout(countdownTimer, 1000);
    }
  }

  const formatTime = (seconds: number) => {
    const duration = moment.duration(seconds, 'seconds');
    const days = Math.floor(duration.asDays());
    const hours = duration.hours().toString().padStart(2, '0');
    const minutes = duration.minutes().toString().padStart(2, '0');
    const remainingSeconds = duration.seconds().toString().padStart(2, '0');
    let result = '';

    if (days > 0) {
      result += `${days} 天 `;
    }

    result += `${hours}:${minutes}:${remainingSeconds} `;
    return result;
  };

  const formatTimeLeft = computed(() => {
    if (projectStatus.status !== FoundStatus.Finished && timeLeft.value !== undefined) {
      return formatTime(timeLeft.value);
    }
    return '';
  });

  return {
    projectStatus,
    formatTimeLeft
  };
}
