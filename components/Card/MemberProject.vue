<script setup>
import mockImg from '~/assets/images/mock.png';

const props = defineProps({
  canModify: {
    type: [Boolean],
    default: true
  },
  project: {
    type: [Object]
  },
  navigateToPath: {
    type: [String]
  }
});

const { formatTimeLeft } = useSetProjectStatus(props.project);

const formattedAmount = (price) => {
  return price.toLocaleString();
};

const copy = (projectId) => {
  navigator.clipboard.writeText(`${window.location.origin}/project/${projectId}/info`);
};
</script>

<template>
  <div
    class="flex h-full w-full cursor-pointer flex-col gap-6 rounded-lg border border-grey-200 bg-white p-5 xl:flex-row xl:gap-10 xl:px-10 xl:py-6"
    @click="navigateTo(props.navigateToPath)"
  >
    <div class="h-full xl:basis-[78%]">
      <div class="flex h-full flex-col gap-6 xl:flex-row">
        <div class="xl:basis-[280px]">
          <img
            :src="
              props.project?.project_cover && props.project?.project_cover !== 'cover URL'
                ? props.project?.project_cover
                : mockImg
            "
            class="h-full rounded-lg object-cover"
            alt="project cover"
          />
        </div>
        <div class="flex h-full flex-col gap-6 xl:flex-1">
          <div class="mb-auto">
            <Badge
              :type="props.project?.project_category"
              :name="props.project?.project_category"
              class="mb-2"
            >
            </Badge>
            <h3 class="text-h4">{{ props.project?.project_title }}</h3>
          </div>
          <ul
            class="flex flex-wrap justify-between gap-6 whitespace-nowrap rounded-md bg-light-emphasis px-4 py-3 xl:flex-nowrap"
          >
            <!-- <li class="flex-1">
              <span class="mb-1 block text-grey-400">贊助人次</span>
              <span v-if="props.project?.order?.length" class="text-lg font-bold"
                >{{ props.project?.order?.length }} 人</span
              >
            </li> -->
            <li class="basis-1/2">
              <span class="mb-1 block text-grey-400">目標金額</span>
              <span class="text-lg font-bold">
                $ {{ formattedAmount(props.project?.project_target) }}
              </span>
            </li>
            <li class="basis-full">
              <span class="mb-1 block text-grey-400">提案倒數</span>
              <span class="text-lg font-bold">{{ formatTimeLeft }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6 hidden w-full xl:line-clamp-3" v-html="props.project?.project_content"></div>
    </div>

    <div
      class="flex flex-col items-center gap-6 border-t-2 border-grey-200 pt-6 xl:basis-[24%] xl:border-l-2 xl:border-t-0 xl:pb-5 xl:pl-10 xl:pt-[60px]"
    >
      <ul class="flex flex-col gap-1">
        <li class="flex items-center gap-1 xl:flex-col">
          <span class="text-grey-400">贊助人次</span>
          <span v-if="props.project?.order?.length" class="text-h3"
            >{{ props.project?.order?.length }} 人</span
          >
        </li>
        <li class="flex items-center gap-1 xl:flex-col">
          <span class="text-grey-400">目前募資金額</span>
          <span class="text-h3"> $ {{ formattedAmount(props.project?.project_progress) }} </span>
        </li>
      </ul>
      <div class="flex items-center gap-4">
        <!-- <button v-if="props.canModify" class="btn btn-primary-outline" @click.stop="">
          修改提案
        </button> -->
        <button
          class="flex items-center gap-1 text-grey-400 md:mt-auto"
          @click.stop="copy(props.project?._id)"
        >
          <img class="inline-block w-6" src="~/assets/images/icons/copy.svg" />
          <span>分享連結</span>
        </button>
      </div>
    </div>
  </div>
</template>
