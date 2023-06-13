<script setup lang="ts">
import mockImg from '~/assets/images/mock-plan.png';
import projectSuccessImg from '~/assets/images/project-success.svg';
import projectFailImg from '~/assets/images/project-fail.svg';

const props = defineProps({
  planId: {
    type: [String]
  },
  cover: {
    type: [String]
  },
  plan: {
    type: [String]
  },
  price: {
    type: [Number],
    default: 1
  },
  times: {
    type: [Number],
    default: 1
  },
  content: {
    type: [String]
  },
  endDate: {
    type: [String]
  },
  projectFinishedStatus: {
    type: [null, Boolean]
  }
});

const formattedPrice = computed(() => {
  return props.price?.toLocaleString();
});

const shipDate = computed(() => {
  const date = new Date(props.endDate);
  const newDate = new Date(date.setMonth(date.getMonth() + 2));
  return `${newDate.getFullYear()} 年 ${newDate.getMonth() + 1} 月`;
});

const coverUrl = computed(() => {
  return `https://fakeimg.pl/352x110/f3e3f5/9d1ead?text=${props.plan}&font=noto`;
});

const route = useRoute();
const { projectId } = route.params;
// const planId = ref('123');
</script>

<template>
  <div class="flex flex-col rounded-lg bg-white px-6 py-8 ring-1 ring-grey-200 md:px-8 md:py-10">
    <div class="relative mb-6 bg-primary-light md:mb-8">
      <img
        :src="props.cover == '' || props.cover == 'cover URL' ? coverUrl : props.cover"
        class="h-[112px] w-full object-contain md:h-[110px]"
        :alt="props.plan"
      />
      <div
        v-if="typeof projectFinishedStatus == 'boolean'"
        class="absolute inset-0 flex items-center justify-center bg-grey-500/40 p-4"
      >
        <img
          :src="projectFinishedStatus ? projectSuccessImg : projectFailImg"
          class="h-full"
          alt="project status"
        />
      </div>
    </div>
    <h3 class="mb-2 text-base font-normal md:mb-3 md:text-lg">{{ props.plan }}</h3>
    <span class="mb-4 text-h2">$ {{ formattedPrice }}</span>
    <span class="mb-4 text-grey-500">已被贊助 {{ props.times }} 次</span>
    <div class="mb-6 rounded-md bg-light-emphasis px-3 py-4 md:mb-4">
      <h4 class="mb-1 text-base font-normal text-grey-400">方案內容</h4>
      <p class="text-lg" v-html="props.content"></p>
      <!-- <ul class="pl-8 text-lg">
        <li class="list-disc">{{ props.content }}</li>
      </ul> -->
    </div>
    <NuxtLink :to="`/project/${projectId}/plan/${planId}`" class="btn btn-primary mb-8 md:mb-12">
      贊助
    </NuxtLink>
    <ul class="flex flex-col gap-2 text-grey-500">
      <li>
        <p>預計 {{ shipDate }}出貨。</p>
      </li>
      <li>
        <p>自訂金額可於「額外贊助」欄位中輸入。電腦版於頁面右方，手機版於頁面下方。</p>
      </li>
    </ul>
  </div>
</template>
