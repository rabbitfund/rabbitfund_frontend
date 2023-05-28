<script setup lang="ts">
import mockImg from '~/assets/images/mock.png';
import projectSuccessImg from '~/assets/images/project-success.svg';
import projectFailImg from '~/assets/images/project-fail.svg';

const props = defineProps({
  project: {
    type: [Object]
  }
});
enum FoundStatus {
  Ongoing = '進行中',
  Finished = '已結束'
}

const { projectStatus, formatTimeLeft } = useSetProjectStatus(props.project);

const formattedAmount = computed(() => {
  return props.project?.project_progress?.toLocaleString();
});
</script>

<template>
  <div
    class="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white"
    @click="navigateTo(`/project/${props.project?._id}/info`)"
  >
    <div class="relative overflow-hidden rounded-t-lg">
      <img
        :src="
          props.project?.project_cover && props.project?.project_cover !== 'cover URL'
            ? props.project?.project_cover
            : mockImg
        "
        class="object-cover"
        alt="carrot"
      />
      <div
        v-if="projectStatus.status === FoundStatus.Finished"
        class="absolute inset-0 flex items-center justify-center bg-grey-500/40 p-5 lg:p-[25px]"
      >
        <img
          :src="projectStatus?.finishedStatus ? projectSuccessImg : projectFailImg"
          class="h-full"
          alt="project status"
        />
      </div>
    </div>
    <div class="flex flex-auto flex-col p-4 pb-6">
      <div class="mb-4 flex items-center justify-between">
        <Badge
          :type="props.project?.project_category"
          :name="props.project?.project_category"
        ></Badge>
        <span v-if="formatTimeLeft !== ''" class="text-grey-500"
          >剩餘時間: {{ formatTimeLeft }}</span
        >
      </div>
      <h3 class="mb-2 line-clamp-2 text-h4 font-bold">
        {{ props.project?.project_title }}
      </h3>
      <span class="mb-6 mt-auto block text-lg">{{
        props.project?.ownerInfo && props.project.ownerInfo?.proposer_name
          ? props.project.ownerInfo.proposer_name
          : 'not found'
      }}</span>
      <ProgressBar
        class="mb-2"
        :type="props.project?.project_category"
        :minAmount="0"
        :maxAmount="props.project?.project_target || 0"
        :currentAmount="props.project?.project_progress || 0"
      />
      <span class="text-lg font-bold">$ {{ formattedAmount }}</span>
    </div>
  </div>
</template>
