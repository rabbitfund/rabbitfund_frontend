<script setup>
import arrowTop from '@/assets/images/icons/arrow-top.svg';
import arrowBottom from '@/assets/images/icons/arrow-bottom.svg';

const route = useRoute();
const { projectId } = route.params;
const { getOwnerProjectDetail, getProjectsSupporters } = useApi();

const { data: detail, error } = await getOwnerProjectDetail(projectId);
const { formatTimeLeft } = useSetProjectStatus(detail.value);
const optionsPercent = ref(calcOptionPercent(detail.value.order));
console.log(detail.value);
console.log(optionsPercent.value);

const { data: supporters } = await getProjectsSupporters(projectId);

const modalSponsorDetail = ref(null);
const currentSupporterData = ref(null);

function calcOptionPercent(orders) {
  if (!orders?.length && orders.length <= 0) return;
  const result = {};
  orders.forEach((order) => {
    if (!result[order.option]) {
      result[order.option] = {
        times: 0,
        total: 0
      };
    }
    result[order.option].times += 1;
    result[order.option].total += Number(order.order_total);
  });
  return result;
}

function toggleSeeMore(index) {
  supporters.value[index].showDetails = !supporters.value[index]?.showDetails;
}

function seeMoreModal(data) {
  currentSupporterData.value = data;
  modalSponsorDetail.value.openModal();
}
const copy = (projectId) => {
  navigator.clipboard.writeText(`${window.location.origin}/project/${projectId}/info`);
};
</script>
<template>
  <p class="mb-8"><span class="text-grey-400">提案紀錄 > </span>{{ detail.project_title }}</p>
  <section v-if="error">
    <CardBlockRabbit :title="'發生了一點錯誤，請稍候再試。'" :btn="'回到首頁'" :link="'/'" />
  </section>
  <section>
    <div class="mb-8 grid grid-cols-12 gap-6">
      <img
        class="col-span-12 object-contain md:-mr-6 lg:col-span-3"
        :src="detail.project_cover || mockImg"
        :alt="detail.project_title"
      />
      <div class="col-span-12 lg:col-span-9">
        <Badge
          class="mb-2 inline-block"
          :type="detail.project_category"
          :name="detail.project_category"
        />
        <h3 class="mb-4 font-bold">{{ detail.project_title }}</h3>
        <p class="text-grey-500">{{ detail.project_summary }}</p>
      </div>
    </div>
    <div class="mb-8 grid grid-cols-9 gap-6 bg-light-emphasis p-8 lg:mb-16">
      <div class="col-span-9 lg:col-span-2">
        <p class="text-grey-500">贊助人次</p>
        <p class="text-2xl font-bold">{{ detail?.order?.length }}</p>
      </div>
      <div class="col-span-9 lg:col-span-4">
        <p class="text-grey-500">募資進度</p>
        <p class="text-2xl font-bold">
          {{ detail.project_progress }}
          <span class="text-lg font-normal text-grey-500">(目標 ${{ detail.project_target }})</span>
        </p>
        <ProgressBar
          class="mb-2"
          :type="detail.project_category"
          :min-amount="0"
          :max-amount="detail.project_target || 0"
          :current-amount="detail.project_progress || 0"
        />
      </div>
      <div class="col-span-9 lg:col-span-3">
        <p class="text-grey-500">提案倒數</p>
        <p class="text-2xl font-bold">{{ formatTimeLeft }}</p>
      </div>
    </div>
    <div class="mb-8 lg:mb-16">
      <div class="flex justify-between">
        <h4 class="mb-5 flex items-center">
          <img class="mr-3 inline" src="@/assets/images/icons/detail.svg" alt="icon" />
          詳細內容
        </h4>
        <button class="text-grey-400" @click="copy(detail._id)">
          <img class="mr-1 inline-block w-6" src="~/assets/images/icons/copy.svg" />分享連結
        </button>
      </div>
      <p class="mb-5 text-grey-500" v-html="detail.project_content"></p>
    </div>
    <div class="mb-8 md:mb-16">
      <h4 class="mb-5 flex items-center">
        <img class="mr-3 inline" src="@/assets/images/icons/money.svg" alt="icon" />
        募資進度
      </h4>

      <section class="overflow-x-auto">
        <div
          class="hidden gap-10 bg-light-emphasis px-2 py-[14px] text-grey-500 md:flex md:min-w-[960px]"
        >
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
          v-for="option in detail.option"
          :key="option._id"
          class="mb-5 flex flex-col items-center rounded-lg border border-grey-200 px-6 py-8 sm:text-lg md:mb-0 md:min-w-[960px] md:flex-row md:gap-10 md:border-0 md:px-2 md:py-[14px] md:text-base"
        >
          <div class="order-2 mb-2 md:order-1 md:mb-0 md:w-[220px]">
            <p>{{ option.option_name }}</p>
          </div>
          <div class="order-1 mb-6 w-full flex-1 md:order-2 md:mb-0">
            <img
              class="w-full object-contain md:max-h-[38px] md:w-auto"
              :src="option.option_cover"
              :alt="option.option_name"
            />
          </div>
          <div class="order-4 mb-6 md:order-3 md:mb-0 md:w-[120px]">
            <Badge
              :type="
                option.option_total > 0 && optionsPercent?.[option._id]?.times > option.option_total
                  ? 'primary'
                  : 'success'
              "
              :name="
                option.option_total > 0 && optionsPercent?.[option._id]?.times > option.option_total
                  ? '已額滿'
                  : '未額滿'
              "
            />
          </div>
          <div class="order-5 flex w-2/3 flex-col justify-center md:order-4 md:w-[220px]">
            <p class="mb-1">
              ${{ optionsPercent?.[option._id]?.total || 0 }}(${{ detail.project_target }})
            </p>
            <ProgressBar
              class="mb-2 w-full"
              :type="detail.project_category"
              :min-amount="0"
              :max-amount="detail.project_target"
              :current-amount="optionsPercent?.[option._id]?.total || 0"
              :show-percent="false"
            />
          </div>
          <div class="order-3 mb-4 md:order-5 md:mb-0 md:w-[60px]">
            <p>
              <span class="md:hidden">贊助人次: </span
              >{{ optionsPercent?.[option._id]?.times || 0 }}
            </p>
          </div>
        </div>
      </section>
      <!-- <LayoutPagination
        class="mt-5 hidden justify-center md:flex"
        :total-page="1"
        :current-page="1"
        :handle-page-change="() => {}"
      /> -->
    </div>

    <div class="mb-8 md:mb-16">
      <h4 class="mb-5 flex items-center">
        <img class="mr-3 inline h-8" src="@/assets/images/icons/user-fill.svg" alt="icon" />
        贊助名單
      </h4>

      <!-- 贊助名單大螢幕 -->
      <section class="hidden max-w-[900px] overflow-x-auto md:block">
        <div class="flex gap-10 bg-light-emphasis px-2 py-[14px] text-grey-500 md:min-w-[960px]">
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
        <div
          v-for="(supporter, index) in supporters"
          :key="supporter._id"
          class="flex items-center gap-10 px-2 py-[14px] text-grey-500 md:min-w-[960px]"
        >
          <div class="w-[140px]">
            <p>{{ supporter.user.user_name }}</p>
          </div>
          <div class="flex-1">
            <p>{{ supporter.option.option_name }}</p>
          </div>
          <div class="w-[140px]">
            <Badge
              :type="supporter.order_shipping_status === 3 ? 'success' : 'anger'"
              :name="supporter.order_shipping_status === 3 ? '已完成' : '未完成'"
            />
          </div>
          <div class="w-[140px]">
            <Badge :type="false ? 'success' : 'primary'" :name="false ? '已完成' : '未完成'" />
          </div>
          <div class="w-[108px]">
            <p class="cursor-pointer text-primary underline" @click="seeMoreModal(supporter)">
              詳細
            </p>
          </div>
          <div class="w-[68px]">
            <p class="cursor-pointer text-primary underline">備註</p>
          </div>
        </div>
      </section>

      <LayoutPagination
        class="mt-5 hidden justify-center md:flex"
        :total-page="1"
        :current-page="1"
        :handle-page-change="() => {}"
      />

      <!-- 贊助名單小螢幕 -->
      <section class="block md:hidden">
        <div
          v-for="(supporter, index) in supporters"
          :key="supporter._id"
          class="mb-5 flex flex-col items-center rounded-lg border border-grey-200 sm:text-lg md:text-base"
        >
          <header class="flex w-full flex-col justify-center gap-2 bg-light-emphasis p-2">
            <p class="text-center font-bold text-grey-500">{{ supporter.option.option_name }}</p>
            <p class="text-center text-grey-600">{{ supporter.user.user_name }}</p>
          </header>

          <div class="my-5 flex w-full justify-center divide-y text-center">
            <div class="flex flex-col gap-2 border-r border-grey-200 px-5">
              <p class="text-grey-400">付款狀態</p>
              <Badge
                :type="supporter.order_shipping_status === 3 ? 'success' : 'anger'"
                :name="supporter.order_shipping_status === 3 ? '已完成' : '未完成'"
              />
            </div>
            <div class="flex flex-col gap-2 px-5">
              <p class="text-grey-400">付款狀態</p>
              <Badge :type="false ? 'success' : 'primary'" :name="false ? '已完成' : '未完成'" />
            </div>
          </div>

          <p
            class="mb-1 flex cursor-pointer items-center justify-center p-2 text-grey-600"
            @click="toggleSeeMore(index)"
          >
            {{ !supporter?.showDetails ? '詳細' : '收起' }}
            <img
              class="ml-2"
              :src="supporter?.showDetails ? arrowTop : arrowBottom"
              alt="see more"
            />
          </p>

          <div
            :class="supporter?.showDetails ? 'h-auto' : 'h-0'"
            class="w-full overflow-hidden border-t text-center text-grey-200 transition duration-500 ease-in-out"
          >
            <p
              class="mb-5 mt-2 cursor-pointer text-primary underline"
              @click="seeMoreModal(supporter)"
            >
              付款詳細
            </p>
            <p class="mb-2 cursor-pointer text-primary underline">客服處理</p>
          </div>
        </div>
      </section>
    </div>
  </section>
  <ModalSponsorDetail
    ref="modalSponsorDetail"
    :title="detail.project_title"
    :detail="currentSupporterData"
  />
</template>
