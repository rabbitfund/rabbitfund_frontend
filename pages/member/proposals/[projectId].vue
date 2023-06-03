<template>
  <p class="mb-8"><span class="text-grey-400">提案紀錄 > </span>{{ mockData.project_title }}</p>
  <div class="mb-8 grid grid-cols-12 gap-6">
    <img
      class="col-span-12 object-contain md:-mr-6 lg:col-span-3"
      src="@/assets/images/mock.png"
      :alt="mockData.project_title"
    />
    <div class="col-span-12 lg:col-span-9">
      <Badge
        class="mb-2 inline-block"
        :type="mockData.project_category"
        :name="mockData.project_category"
      />
      <h3 class="mb-4 font-bold">{{ mockData.project_title }}</h3>
      <p class="text-grey-500">{{ mockData.project_summary }}</p>
    </div>
  </div>
  <div class="mb-8 grid grid-cols-9 gap-6 bg-light-emphasis p-8 lg:mb-16">
    <div class="col-span-9 lg:col-span-2">
      <p class="text-grey-500">贊助人次</p>
      <p class="text-2xl font-bold">1 人</p>
    </div>
    <div class="col-span-9 lg:col-span-4">
      <p class="text-grey-500">募資進度</p>
      <p class="text-2xl font-bold">
        {{ mockData.project_progress }}
        <span class="text-lg font-normal text-grey-500">(目標 ${{ mockData.project_target }})</span>
      </p>
      <ProgressBar
        class="mb-2"
        :type="mockData.project_category"
        :minAmount="0"
        :maxAmount="mockData.project_target || 0"
        :currentAmount="mockData.project_progress || 0"
      />
    </div>
    <div class="col-span-9 lg:col-span-3">
      <p class="text-grey-500">提案倒數</p>
      <p class="text-2xl font-bold">1 人</p>
    </div>
  </div>
  <div class="mb-8 lg:mb-16">
    <h4 class="mb-5 flex items-center">
      <img class="mr-3 inline" src="@/assets/images/icons/detail.svg" alt="icon" />
      詳細內容
    </h4>
    <p class="mb-5 text-grey-500">{{ mockData.project_content }}</p>

    <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
      <button class="btn btn-primary-outline max-w-[155px]">修改提案</button>
      <div class="flex items-center justify-center text-grey-400">
        <img class="mr-1 inline-block w-6" src="~/assets/images/icons/copy.svg" />分享連結
      </div>
    </div>
  </div>
  <div class="mb-8 lg:mb-16">
    <h4 class="mb-5 flex items-center">
      <img class="mr-3 inline" src="@/assets/images/icons/money.svg" alt="icon" />
      募資進度
    </h4>

    <section>
      <div class="hidden gap-10 bg-light-emphasis px-2 py-[14px] text-grey-500 xl:flex">
        <div class="w-[220px]">
          <p>方案名稱</p>
        </div>
        <div class="flex-1">
          <p>方案圖片</p>
        </div>
        <div class="w-[120px]">
          <p class="text-grey-500">進度</p>
        </div>
        <div class="w-[220px]">
          <p>集資金額 (目標金額)</p>
        </div>
        <div class="w-[60px]">
          <p>人次</p>
        </div>
      </div>

      <div
        v-for="option in mockData.options"
        class="mb-5 flex flex-col items-center rounded-lg border border-grey-200 px-6 py-8 sm:text-lg xl:flex-row xl:gap-10 xl:px-2 xl:py-[14px] xl:text-base"
      >
        <div class="order-2 mb-2 xl:order-1 xl:mb-0 xl:w-[220px]">
          <p>單次捐款｜理念支持</p>
        </div>
        <div class="order-1 mb-6 w-full flex-1 xl:order-2 xl:mb-0">
          <img
            class="w-full object-contain xl:max-h-[38px] xl:w-auto"
            src="@/assets/images/mock-plan.png"
            alt="options"
          />
        </div>
        <div class="order-4 mb-6 xl:order-3 xl:mb-0 xl:w-[120px]">
          <button v-if="true" class="btn-primary rounded-full px-5 py-2">未額滿</button>
          <button v-else class="btn-primary rounded-full px-5 py-2">已額滿</button>
        </div>
        <div class="order-5 flex w-2/3 flex-col justify-center xl:order-4 xl:w-[220px]">
          <p class="mb-1">${{ mockData.project_progress }}(${{ mockData.project_target }})</p>
          <ProgressBar
            class="mb-2 w-full"
            :type="mockData.project_category"
            :minAmount="0"
            :maxAmount="mockData.project_target || 0"
            :currentAmount="mockData.project_progress || 0"
            :showPercent="false"
          />
        </div>
        <div class="order-3 mb-4 xl:order-5 xl:mb-0 xl:w-[60px]">
          <p><span class="xl:hidden">贊助人次: </span>3000</p>
        </div>
      </div>
    </section>
  </div>

  <div class="mb-8 lg:mb-16">
    <h4 class="mb-5 flex items-center">
      <img class="mr-3 inline h-8" src="@/assets/images/icons/user-fill.svg" alt="icon" />
      贊助名單
    </h4>

    <!-- 贊助名單大螢幕 -->
    <section class="hidden xl:block">
      <div class="flex gap-10 bg-light-emphasis px-2 py-[14px] text-grey-500">
        <div class="w-[140px]">
          <p>贊助人</p>
        </div>
        <div class="flex-1">
          <p>方案名稱</p>
        </div>
        <div class="w-[140px]">
          <p class="text-grey-500">付款狀態</p>
        </div>
        <div class="w-[140px]">
          <p>出貨狀態</p>
        </div>
        <div class="w-[108px]">
          <p>付款詳細資料</p>
        </div>
        <div class="w-[68px]">
          <p>客服處理</p>
        </div>
      </div>
      <div class="flex items-center gap-10 px-2 py-[14px] text-grey-500">
        <div class="w-[140px]">
          <p>備兔兔</p>
        </div>
        <div class="flex-1">
          <p>單次捐款｜理念支持</p>
        </div>
        <div class="w-[140px]">
          <button v-if="true" class="btn-primary rounded-full px-5 py-2">未額滿</button>
          <button v-else class="btn-primary rounded-full px-5 py-2">已額滿</button>
        </div>
        <div class="w-[140px]">
          <button v-if="true" class="btn-primary rounded-full px-5 py-2">未額滿</button>
          <button v-else class="btn-primary rounded-full px-5 py-2">已額滿</button>
        </div>
        <div class="w-[108px]">
          <p class="cursor-pointer text-primary underline">詳細</p>
        </div>
        <div class="w-[68px]">
          <p class="cursor-pointer text-primary underline">備註</p>
        </div>
      </div>
    </section>

    <!-- 贊助名單小螢幕 -->
    <section class="block xl:hidden">
      <div
        v-for="(item, index) in mockData.options"
        class="mb-5 flex flex-col items-center rounded-lg border border-grey-200 sm:text-lg xl:text-base"
      >
        <header class="flex w-full flex-col justify-center gap-2 bg-light-emphasis p-2">
          <p class="text-center font-bold text-grey-500">定期捐款｜理念支持</p>
          <p class="text-center text-grey-600">備兔兔</p>
        </header>

        <div class="my-5 flex w-full justify-center divide-y text-center">
          <div class="flex flex-col gap-2 border-r border-grey-200 px-5">
            <p class="text-grey-400">付款狀態</p>
            <button v-if="true" class="btn-primary rounded-full px-5 py-2">已額滿</button>
            <button v-else class="btn-primary rounded-full px-5 py-2">已額滿</button>
          </div>
          <div class="flex flex-col gap-2 px-5">
            <p class="text-grey-400">付款狀態</p>
            <button v-if="true" class="btn-primary rounded-full px-5 py-2">已額滿</button>
            <button v-else class="btn-primary rounded-full px-5 py-2">已額滿</button>
          </div>
        </div>

        <p class="mb-1 p-2" @click="toggleSeeMore(index)">
          {{ !item.showDetails ? '詳細' : '收起' }}
        </p>

        <div
          :class="item.showDetails ? 'h-auto' : 'h-0'"
          class="w-full overflow-hidden border-t text-center text-grey-200 transition duration-500 ease-in-out"
        >
          <p @click="seeMoreModal()" class="mb-5 mt-2 cursor-pointer text-primary underline">
            付款詳細
          </p>
          <p class="mb-2 cursor-pointer text-primary underline">客服處理</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// const route = useRoute();
// const { projectId } = route.params;

function toggleSeeMore(index) {
  mockData.options[index].showDetails = !mockData.options[index].showDetails;
}
const mockData = reactive({
  project_title: '關愛偏鄉孩子集資計畫',
  project_category: '校園',
  project_summary: '簡單一句話介紹這個專案',
  project_content: `我們都知道，教育是改變命運的關鍵，但是在偏鄉地區，孩子們卻往往缺乏教育資源。透過您的捐款，我們將幫助這些孩子獲得更好的學習機會，讓他們擁有更美好的未來。
請您一起加入我們的行列，支持這個值得關注的公益專案，您的每一筆捐款都將為偏鄉孩子帶來新的希望與改變。`,
  project_target: 500000,
  project_progress: 20000,
  options: [{ showDetail: false }, { showDetail: false }]
});

const { $swal } = useNuxtApp();

function seeMoreModal() {
  $swal.fire({
    icon: 'error'
  });
}
</script>
