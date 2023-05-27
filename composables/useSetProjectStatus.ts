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
    return { status: FoundStatus.Finished };
  };

  const projectStatus = getRemainingSeconds(project?.project_end_date);
  const timeLeft = ref(projectStatus?.seconds);

  onMounted(() => {
    let timer: NodeJS.Timeout | null = null;
    if (timeLeft.value && timeLeft.value > 0) {
      timer = setInterval(() => {
        timeLeft.value = <number>timeLeft.value - 1;
      }, 1000);
    }

    // 清除計時器
    onBeforeUnmount(() => {
      if (timer) {
        clearInterval(timer);
      }
    });
  });

  const formatTime = (seconds: number) => {
    const duration = moment.duration(seconds, 'seconds');
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const remainingSeconds = duration.seconds();
    if (days > 0) {
      return `${days} 天 ${hours} 小時 ${minutes} 分`;
    } else {
      return `${hours} 小時 ${minutes} 分 ${remainingSeconds} 秒`;
    }
  };

  const finishedStatus = computed(() => {
    if (projectStatus.status === FoundStatus.Finished) {
      if (project?.project_target !== undefined && project?.project_progress !== undefined) {
        return project.project_progress >= project.project_target;
      }
    }
    return false;
  });

  const formatTimeLeft = computed(() => {
    if (projectStatus.status !== FoundStatus.Finished && timeLeft.value !== undefined) {
      return formatTime(timeLeft.value);
    }
    return '';
  });

  return {
    projectStatus,
    finishedStatus,
    formatTimeLeft
  };
}
