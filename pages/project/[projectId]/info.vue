<script setup>
const { getProject } = useApi();
const route = useRoute();
const { projectId } = route.params;
const category = ref("公益");
const content = ref("專案內容");
const startDate = ref("");
const endDate = ref("");
const target = ref(500000);
const title = ref("愛奇兒家庭社區共融中心集資計畫");
const options = ref([]);
const proposer = ref("");
const taxId = ref("");
const email = ref("");
const timeLeft = ref("");


onMounted(async () => {
  await nextTick();
  getProject(projectId)
    .then((res) => {
      const project = res.data.value.data;
      console.log(project)

      // title.value = project.project_title;
      // summary.value = project.project_summary;
      // info.value = project;
      title.value = project.project_title;
      category.value = project.project_category;
      content.value = project.project_content;
      target.value = project.project_target; // 逗號分隔之後再處理
      startDate.value = project.project_start_date.substring(0, 10); // 要不要用 moment.js?
      endDate.value = project.project_end_date.substring(0, 10);
      options.value = project.option;
      proposer.value = project.ownerInfo.proposer_name;
      taxId.value = project.ownerInfo.proposer_tax_id;
      email.value = project.ownerInfo.proposer_email;
      timeLeft.value = getDaysLeft(project.project_end_date);
      console.log(options.value)
    })
    .catch((err) => {
      console.log(err)
    })
})

const getDaysLeft = (projectEndDate) => {
  const today = new Date();
  const endDate = new Date(projectEndDate);
  const days = Math.ceil((endDate - today) / (1000 * 3600 * 24));
  return `${days} 天`;
}

const copy = () => {
  navigator.clipboard.writeText(window.location.href);
}
</script>

<template>
  <main>
    <section class="bg-light-emphasis">
      <div class="container flex flex-col items-center px-[55.55px] py-8 md:py-16">
        <span class="mb-4 font-bold text-warning xl:mb-8 xl:text-lg">集資專案 ｜ {{ category }}</span>
        <h2 class="mb-4 text-h4 xl:text-h1">{{ title }}</h2>
        <p class="text-grey-500 xl:text-lg">提案者 {{ proposer }}</p>
      </div>
    </section>

    <section class="container mb-16 pt-4 lg:pt-16">
      <div class="lg:flex lg:gap-10">
        <div class="mb-6 lg:mb-0 lg:flex-1">
          <div class="mb-4 overflow-hidden rounded-lg">
            <img
              src="~/assets/images/mock.png"
              class="w-full object-cover xl:h-[370px]"
              alt="假圖"
            />
          </div>
          <p>專案時間 {{ startDate }} 12:00 ~ {{ endDate }} 23:59</p>
        </div>
        <div class="lg:w-5/12">
          <span class="mb-3 block text-h2 font-bold lg:mb-1.5">$ 615,846</span>
          <div class="gap-3 sm:mb-9 sm:flex">
            <ProgressBar
              class="mb-3 flex-auto sm:mb-0"
              :type="category"
              :minAmount="0"
              :maxAmount="target"
              :currentAmount="615846"
            />
            <Badge type="公益" name="已達標" class="mb-6 w-fit sm:mb-0"></Badge>
          </div>
          <div class="mb-6 rounded-lg bg-light-emphasis px-8 py-6 lg:mb-9">
            <ul class="-mx-2 flex flex-wrap">
              <li class="mb-4 flex w-1/2 flex-col px-2">
                <span class="mb-1 text-grey-400">目標金額</span
                ><span class="text-lg font-bold">$ {{ target }}</span>
              </li>
              <li class="mb-4 flex w-1/2 flex-col px-2">
                <span class="mb-1 text-grey-400">預計募集總金額</span
                ><span class="text-lg font-bold">$ 615,846 </span>
              </li>
              <li class="flex w-1/2 flex-col px-2">
                <span class="mb-1 text-grey-400">剩餘時間</span
                ><span class="text-lg font-bold">{{ timeLeft }}</span>
              </li>
              <li class="flex w-1/2 flex-col px-2">
                <span class="mb-1 text-grey-400">贊助人次</span
                ><span class="text-lg font-bold">180人</span>
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
        class="bg-white pb-14 pt-7 lg:ml-[calc((theme('width.screen')-theme('screens.lg'))/2)] lg:flex-1 lg:bg-light-emphasis lg:py-0 xl:ml-[calc((theme('width.screen')-theme('screens.xl'))/2)]"
      >
        <NuxtPage class="container" />
      </div>
      <div
        class="container -order-1 flex flex-col gap-4 py-16 lg:mr-[calc((theme('width.screen')-theme('screens.lg'))/2)] lg:w-[calc(theme('screens.lg')*1/3)] lg:py-0 xl:mr-[calc((theme('width.screen')-theme('screens.xl'))/2)] xl:w-[calc(theme('screens.xl')*1/3)]"
      >
        <CardTeam
          :brand="proposer"
          :number="1"
          :proposer="proposer"
          :unifiedNumber="taxId"
          :email="email"
        />
        <!-- <CardPlan plan="單次捐款 ｜ 理念支持" :price="300" :times="100" content="列名感謝" />
        <CardPlan plan="單次捐款 ｜ 理念支持" :price="2400" :times="46" content="列名感謝" /> -->
        <CardPlan v-for="option in options" 
          :plan="option.option_name"
          :price="option.option_price"
          :times="46"
          :content="option.option_content" />
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
