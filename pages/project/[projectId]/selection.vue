<script setup>
import moment from 'moment';

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
const proposerInfo = ref('');
const timeLeft = ref('');
const cover = ref('');
const totalOrder = ref(0);
const projectStatus = ref(null);

getProject(projectId)
  .then((res) => {
    const project = res.data.value.data;
    console.log('project:', project);
    // 專案狀態
    projectStatus.value = useSetProjectStatus(project);
    title.value = project.project_title;
    category.value = project.project_category;
    content.value = project.project_content;
    target.value = project.project_target; // 逗號分隔之後再處理
    startDate.value = project.project_start_date && project.project_start_date.substring(0, 10); // 要不要用 moment.js?
    endDate.value = project.project_end_date && project.project_end_date.substring(0, 10);
    progress.value = project.project_progress;
    options.value = project.option;
    proposerInfo.value = project.ownerInfo;
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
  })
  .catch((err) => {
    console.log(err);
  });

const getDaysLeft = (projectEndDate) => {
  const today = new Date();
  const endDate = new Date(projectEndDate);
  const days = Math.ceil((endDate - today) / (1000 * 3600 * 24));
  return `${days} 天`;
};

function generateRandomNumberById(objectId) {
  const seed = objectId.substring(20); // last four
  let total = 1;
  for (const el of seed) {
    total *= el.charCodeAt(0);
  }
  const date = moment().format('MMDD');
  return Math.round(total / parseInt(date)) % 1000;
}
</script>

<template>
  <!-- <h1>方案選擇</h1> -->
  <section class="bg-light-emphasis">
    <div class="container flex flex-col items-center px-[55.55px] py-8 md:py-16">
      <span class="mb-4 font-bold text-warning xl:mb-8 xl:text-lg">集資專案 ｜ {{ category }}</span>
      <NuxtLink :to="`/project/${projectId}/info`">
        <h2 class="mb-4 text-h4 xl:text-h1">{{ title }}</h2>
      </NuxtLink>
      <p class="text-grey-500 xl:text-lg">提案者 {{ proposerInfo.proposer_name }}</p>
    </div>
  </section>
  <section class="bg-light-emphasis">
    <div class="container grid grid-cols-1 gap-5 pb-16 md:grid-cols-2 lg:grid-cols-3">
      <CardPlan
        v-for="option in options"
        :key="option._id"
        :plan-id="option._id"
        :cover="option.option_cover"
        :plan="option.option_name"
        :price="option.option_price"
        :times="generateRandomNumberById(option._id)"
        :content="option.option_content"
        :end-date="endDate"
        :project-finished-status="
          projectStatus?.status === '已結束' ? projectStatus?.finishedStatus : null
        "
      />
    </div>
  </section>
</template>
