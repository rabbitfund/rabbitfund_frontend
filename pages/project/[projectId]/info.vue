<script setup>
import moment from 'moment';
import { useProjectStore } from '~/stores/project';
import mockImg from '~/assets/images/mock.png';

const { getProject } = useApi();
const route = useRoute();
const { projectId } = route.params;
const category = ref('');
const content = ref('');
const startDate = ref('');
const endDate = ref('');
const progress = ref(0);
const target = ref(0);
const title = ref('');
const options = ref([]);
const proposer = ref('');
const taxId = ref('');
const email = ref('');
const timeLeft = ref('');
const cover = ref('');
const totalOrder = ref(0);

const projectStore = useProjectStore();
const { setProject } = projectStore;

const projectStatus = ref({});

onMounted(async () => {
  await nextTick();
  getProject(projectId)
    .then((res) => {
      const project = res.data.value.data;
      console.log('project:', project);
      // 專案狀態
      projectStatus.value = useSetProjectStatus(project);
      // title.value = project.project_title;
      // summary.value = project.project_summary;
      // info.value = project;
      title.value = project.project_title;
      category.value = project.project_category;
      content.value = project.project_content;
      target.value = project.project_target; // 逗號分隔之後再處理
      startDate.value = project.project_start_date && project.project_start_date.substring(0, 10); // 要不要用 moment.js?
      endDate.value = project.project_end_date && project.project_end_date.substring(0, 10);
      progress.value = project.project_progress;
      options.value = project.option;
      proposer.value = project.ownerInfo?.proposer_name;
      taxId.value = project.ownerInfo?.proposer_tax_id;
      email.value = project.ownerInfo?.proposer_email;
      timeLeft.value = getDaysLeft(project.project_end_date);
      cover.value =
        project.project_cover && project.project_cover !== 'cover URL'
          ? project.project_cover
          : mockImg;
      console.log('options.value', options.value);

      for (const item of project.option) {
        const id = item._id;
        totalOrder.value += generateRandomNumberById(id);
      }

      setProject(project);
    })
    .catch((err) => {
      console.log(err);
    });
});

const formattedTarget = computed(() => {
  return target.value.toLocaleString();
});

const formattedProgress = computed(() => {
  return progress.value.toLocaleString();
});

const getDaysLeft = (projectEndDate) => {
  const today = new Date();
  const endDate = new Date(projectEndDate);
  const days = Math.ceil((endDate - today) / (1000 * 3600 * 24));
  return `${days} 天`;
};

const copy = () => {
  navigator.clipboard.writeText(window.location.href);
};

// 生成 2~3 位數的隨機數
function generateRandomNumber() {
  const min = 10; // 最小值（2 位數的最小值）
  const max = 99; // 最大值（2 位數的最大值）

  // 檢查是否要生成 3 位數的隨機數
  const shouldGenerateThreeDigit = Math.random() < 0.5;

  // 根據需要生成 2 位數或 3 位數的隨機數
  if (shouldGenerateThreeDigit) {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100; // 生成 3 位數的隨機數
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min; // 生成 2 位數的隨機數
  }
}

function generateRandomNumberById(objectId) {
  const seed = objectId.substring(20); // last four
  let total = 1;
  for (const el of seed) {
    total *= el.charCodeAt(0);
  }
  const date = moment().format('MMDD');
  return Math.round(total / parseInt(date)) % 1000;
}
// const randomNumber = generateRandomNumber();
// console.log(randomNumber);
</script>

<template>
  <main>
    <section class="bg-light-emphasis">
      <div class="container flex flex-col items-center px-[55.55px] py-8 md:py-16">
        <span class="mb-4 font-bold text-warning xl:mb-8 xl:text-lg"
          >集資專案 ｜ {{ category }}</span
        >
        <h2 class="mb-4 text-h4 xl:text-h1">{{ title }}</h2>
        <p class="text-grey-500 xl:text-lg">提案者 {{ proposer }}</p>
      </div>
    </section>

    <section class="container mb-16 pt-4 lg:pt-16">
      <div class="lg:-mx-3 lg:flex lg:gap-4">
        <div class="mb-6 lg:mb-0 lg:flex-1 lg:px-3">
          <div class="mb-4 overflow-hidden rounded-lg relative">
            <img
              :src="cover"
              class="w-full object-cover xl:h-[370px]"
              alt="project image"
            />

            <div
              v-if="projectStatus?.status === '已結束'"
              class="absolute inset-0 flex items-center justify-center bg-grey-500/40 p-5 lg:p-[25px]"
            >
              <img
                :src="projectStatus?.finishedStatus ? projectSuccessImg : projectFailImg"
                class="h-full"
                alt="project status"
              />
            </div>
          </div>
          <p>專案時間 {{ startDate }} 12:00 ~ {{ endDate }} 23:59</p>
        </div>
        <div class="lg:w-5/12 lg:px-3">
          <span class="mb-3 block text-h2 font-bold lg:mb-1.5">$ {{ formattedProgress }} </span>
          <div class="gap-3 sm:mb-9 sm:flex">
            <ProgressBar
              class="mb-3 flex-auto sm:mb-0"
              :type="category"
              :min-amount="0"
              :max-amount="target"
              :current-amount="progress"
            />
            <Badge type="公益" name="已達標" class="mb-6 w-fit sm:mb-0"></Badge>
          </div>
          <div class="mb-6 rounded-lg bg-light-emphasis px-8 py-6 lg:mb-9">
            <ul class="-mx-2 flex flex-wrap">
              <li class="mb-4 flex w-1/2 flex-col gap-1 px-2">
                <span class="text-grey-400">目標金額</span
                ><span class="text-lg font-bold">$ {{ formattedTarget }}</span>
              </li>
              <li class="mb-4 flex w-1/2 flex-col gap-1 px-2">
                <span class="text-grey-400">預計募集總金額</span
                ><span class="text-lg font-bold">$ {{ formattedProgress }} </span>
              </li>
              <li class="flex w-1/2 flex-col gap-1 px-2">
                <span class="text-grey-400">剩餘時間</span
                ><span class="text-lg font-bold">{{ timeLeft }}</span>
              </li>
              <li class="flex w-1/2 flex-col gap-1 px-2">
                <span class="text-grey-400">贊助人次</span
                ><span class="text-lg font-bold">{{ totalOrder }}人</span>
              </li>
            </ul>
          </div>
          <div
            class="flex flex-wrap items-center justify-center whitespace-nowrap sm:flex-nowrap sm:justify-start sm:gap-4"
          >
            <div class="mb-5 flex w-full gap-4 sm:mb-0 sm:w-auto">
              <NuxtLink
                :to="`/project/${projectId}/selection`"
                class="btn btn-primary w-1/2 xl:text-md"
                :class="{ 'active-nav': route.path === `/project/${projectId}/selection` }"
              >
                贊助專案
              </NuxtLink>
              <button class="btn btn-primary-outline w-1/2 xl:text-md">追蹤專案</button>
            </div>
            <button class="flex gap-1 text-grey-400" @click="copy">
              <img src="~/assets/images/icons/copy.svg" alt="copy" />
              分享連結
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col bg-light-emphasis lg:flex-row-reverse lg:flex-wrap lg:gap-x-10 lg:gap-y-16 lg:pb-[142px]"
    >
      <div class="border-y bg-white lg:-order-1 lg:basis-full">
        <nav
          class="container flex gap-4 overflow-x-auto whitespace-nowrap py-6 text-grey-600 lg:gap-10"
        >
          <NuxtLink
            :to="`/project/${projectId}/info`"
            class="nav-default"
            :class="{ 'active-nav': route.path === `/project/${projectId}/info` }"
          >
            專案介紹
          </NuxtLink>
          <NuxtLink
            :to="`/project/${projectId}/info/plans`"
            class="nav-default"
            :class="{ 'active-nav': route.path === `/project/${projectId}/info/plans` }"
          >
            回饋方案
          </NuxtLink>
          <NuxtLink
            :to="`/project/${projectId}/info/disclosures`"
            class="nav-default"
            :class="{ 'active-nav': route.path === `/project/${projectId}/info/disclosures` }"
          >
            資訊揭露與承諾
          </NuxtLink>
          <NuxtLink
            :to="`/project/${projectId}/info/faq`"
            class="nav-default"
            :class="{ 'active-nav': route.path === `/project/${projectId}/info/faq` }"
          >
            常見問題
          </NuxtLink>
          <NuxtLink
            :to="`/project/${projectId}/info/news`"
            class="nav-default"
            :class="{ 'active-nav': route.path === `/project/${projectId}/info/news` }"
          >
            最新消息
          </NuxtLink>
        </nav>
      </div>
      <div
        class="bg-white pb-14 pt-7 lg:ml-[calc(((theme('width.screen')-(theme('width.screen')-100%))-theme('screens.lg'))/2)] lg:flex-1 lg:bg-light-emphasis lg:py-0 xl:ml-[calc(((theme('width.screen')-(theme('width.screen')-100%))-theme('screens.xl'))/2)]"
      >
        <div class="container">
          <NuxtPage />
        </div>
      </div>
      <div
        class="container -order-1 flex flex-col gap-4 py-16 lg:mr-[calc(((theme('width.screen')-(theme('width.screen')-100%))-theme('screens.lg'))/2)] lg:w-[calc(theme('screens.lg')*1/3)] lg:py-0 xl:mr-[calc(((theme('width.screen')-(theme('width.screen')-100%))-theme('screens.xl'))/2)] xl:w-[calc(theme('screens.xl')*1/3)]"
      >
        <CardTeam
          :brand="proposer"
          :number="3"
          :proposer="proposer"
          :unified-number="taxId"
          :email="email"
        />
        <!-- <CardPlan plan="單次捐款 ｜ 理念支持" :price="300" :times="100" content="列名感謝" />
        <CardPlan plan="單次捐款 ｜ 理念支持" :price="2400" :times="46" content="列名感謝" /> -->
        <CardPlan
          v-for="option in options"
          :plan-id="option._id"
          :plan="option.option_name"
          :price="option.option_price"
          :times="generateRandomNumberById(option._id)"
          :content="option.option_content"
          :endDate="endDate"
          :projectFinishedStatus="projectStatus?.status === '已結束' ? projectStatus?.finishedStatus : null"
          />
      </div>
    </section>
  </main>
</template>

<style scoped>
.nav-default {
  @apply rounded-full px-4 py-2 text-lg hover:bg-primary-light hover:font-bold;
}
.active-nav {
  @apply bg-primary-light font-bold text-primary;
}
</style>
