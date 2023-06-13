<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

import mockImg from '~/assets/images/mock.png';
import arrowTop from '@/assets/images/icons/arrow-top.svg';
import arrowBottom from '@/assets/images/icons/arrow-bottom.svg';

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

const props = defineProps({
  // canModify: {
  //   type: [Boolean],
  //   default: true
  // },
  order: {
    type: [Object]
  }
});
console.log('CardMemberOrder', props);

const showDetails = ref(false);
function toggleSeeMore() {
  showDetails.value = !showDetails.value;
}

const formattedAmount = (price) => {
  // console.count('formattedAmount');
  // console.log('formattedAmount', price);
  // console.trace(price);
  return price.toLocaleString();
};
const formattedDate = (date) => {
  // console.log(date, typeof date, date.slice(0, 10));
  return date.slice(0, 10);
};

const copy = (projectId) => {
  navigator.clipboard.writeText(`${window.location.origin}/project/${projectId}/info`);
};
</script>
<template>
  <section
    class="flex flex-col justify-between gap-12 rounded-lg border p-5 lg:flex-row lg:px-8 lg:py-6"
  >
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 overflow-hidden rounded-t-lg xl:col-span-5">
        <img
          :src="
            props.order.project?.project_cover && props.order.project?.project_cover !== 'cover URL'
              ? props.order.project?.project_cover
              : mockImg
          "
          class="object-contain"
          alt="carrot"
        />
      </div>
      <div class="col-span-12 xl:col-span-7">
        <div class="grid grid-cols-12 items-end gap-6 px-5 py-3">
          <div class="col-span-10">
            <h4 class="mt-2 font-bold text-grey-600">{{ props.order.project?.project_title }}</h4>
            <h5 class="mt-2 font-bold text-grey-600">{{ props.order.option?.option_name }}</h5>
          </div>
          <div class="min-w-[100px]">
            <button
              class="flex justify-center text-grey-400"
              @click="copy(props.order.project?._id)"
            >
              <img class="mr-1 inline-block w-6" src="~/assets/images/icons/copy.svg" />分享連結
            </button>
          </div>
        </div>

        <div class="mt-6 flex justify-between gap-6 bg-light-emphasis px-5 py-3">
          <div>
            <p class="mb-1">訂單狀態</p>
            <Badge
              :type="props.order.order_status > 0 ? 'success' : 'danger'"
              :name="props.order.order_status > 0 ? '已完成' : '未完成'"
            />
          </div>
          <!-- <div>
            <p>商品運送狀態</p>
            <Badge
              :type="props.order.order_shipping_status > 0 ? 'success' : 'danger' "
              :name="props.order.order_shipping_status > 0 ? '已送達' : '未出貨'"
            />
          </div> -->
          <div>
            <p class="mb-1">付款狀態</p>
            <Badge
              :type="props.order.order_info.payment_status > 0 ? 'success' : 'danger'"
              :name="props.order.order_info.payment_status > 0 ? '已付款' : '未付款'"
            />
          </div>
          <div>
            <p>訂單日期</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ formattedDate(props.order.order_create_date) }}
            </p>
          </div>
          <div>
            <p>訂單金額</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ formattedAmount(props.order.order_total) }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-12">
        <p
          class="mb-1 flex cursor-pointer items-center justify-center p-2 text-grey-600"
          @click="toggleSeeMore()"
        >
          {{ !showDetails ? '看更多' : '收起' }}
          <img class="ml-2" :src="showDetails ? arrowTop : arrowBottom" alt="see more" />
        </p>

        <div
          :class="showDetails ? 'h-auto' : 'h-0'"
          class="w-full overflow-hidden border-t text-center transition duration-500 ease-in-out"
        >
          <div class="mb-7 rounded-lg bg-light-emphasis p-5">
            <ul class="flex flex-col flex-wrap gap-y-5 lg:-mx-2 lg:flex-row lg:gap-y-4">
              <!-- NOTE: 這邊所有 user 的資料暫時直接抓 userStore 的，未來資料庫有增加欄位，可以再調整成付款人與會員姓名資料不同 -->
              <li class="basis-1/3 lg:px-2">
                <span class="mb-1 text-grey-400">付款人姓名</span>
                <p>{{ userInfo?.user_name }}</p>
              </li>
              <li class="basis-1/3 lg:px-2">
                <span class="mb-1 text-grey-400">E-mail</span>
                <p>{{ userInfo?.user_email }}</p>
              </li>
              <li v-if="userInfo?.user_phone" class="basis-1/3 lg:px-2">
                <span class="mb-1 text-grey-400">付款人手機</span>
                <p>{{ userInfo?.user_phone }}</p>
              </li>
              <li class="basis-1/3 lg:px-2">
                <span class="mb-1 text-grey-400">備註</span>
                <p>{{ props.order?.order_note }}</p>
              </li>
            </ul>
          </div>
          <div class="mb-[46px] lg:mb-12">
            <h3 class="mb-3.5 flex items-center gap-2">
              <span>
                <img src="~/assets/images/icons/book.svg" class="w-7" alt="訂單" />
              </span>
              <span class="text-h4">訂單詳細資訊</span>
            </h3>
            <ul class="mx-6 mb-4 flex flex-col gap-y-4">
              <li class="text-left lg:px-2">
                <span class="mb-1 mr-4 text-grey-400">專案名稱</span>
                <span>{{ props.order?.project.project_title }}</span>
              </li>
              <li class="text-left lg:px-2">
                <span class="mb-1 mr-4 text-grey-400">方案名稱</span>
                <span>{{ props.order?.option.option_name }}</span>
              </li>
              <li class="text-left lg:px-2">
                <span class="mb-1 mr-4 text-grey-400">訂單編號</span>
                <span>{{ props.order?._id }}</span>
              </li>
              <li class="text-left lg:px-2">
                <span class="mb-1 mr-4 text-grey-400">實現日期</span>
                <span>預計於 2024 年四月送出</span>
              </li>
            </ul>
            <ul class="flex flex-col flex-wrap gap-y-4 sm:flex-row lg:-mx-2 lg:gap-y-5">
              <li class="basis-1/4 lg:px-2">
                <span class="mb-1 text-grey-400">付款總額</span>
                <p>{{ formattedAmount(props.order?.order_total) }}</p>
              </li>
              <li class="basis-1/4 lg:px-2">
                <span class="mb-1 text-grey-400">方案金額</span>
                <p>{{ formattedAmount(props.order?.option.option_price) }}</p>
              </li>
              <li class="basis-1/4 lg:px-2">
                <span class="mb-1 text-grey-400">方案份數</span>
                <p>{{ props.order?.order_option_quantity }}</p>
              </li>
              <li class="basis-1/4 lg:px-2">
                <span class="mb-1 text-grey-400">額外贊助</span>
                <p>{{ formattedAmount(props.order?.order_extra) }}</p>
              </li>
            </ul>
          </div>
          <div class="mb-[46px] lg:mb-12">
            <h3 class="mb-3.5 flex items-center gap-2">
              <span>
                <img src="~/assets/images/icons/credit-card.svg" class="w-7" alt="信用卡" />
              </span>
              <span class="text-h4">付款資訊</span>
            </h3>
            <ul class="flex flex-col flex-wrap gap-y-4 sm:flex-row lg:-mx-2 lg:gap-y-5">
              <li class="basis-1/2 lg:px-2">
                <span class="mb-1 text-grey-400">訂單建立日期</span>
                <p>{{ formattedDate(props.order?.order_create_date) }}</p>
              </li>
              <li class="basis-1/2 lg:px-2">
                <span class="mb-1 text-grey-400">訂單完成日期</span>
                <p>{{ formattedDate(props.order?.order_final_date) }}</p>
              </li>
              <li class="basis-1/3 lg:px-2">
                <span class="mb-1 text-grey-400">付款方式</span>
                <p>{{ props.order?.order_info.payment_method }}</p>
              </li>
              <li
                v-if="props.order?.order_info.payment_method == 'WEBATM'"
                class="basis-1/3 lg:px-2"
              >
                <span class="mb-1 text-grey-400">付款銀行</span>
                <p>
                  {{ props.order?.order_info.newebpay_payBankCode == 809 ? '華南銀行' : '其他' }}
                </p>
              </li>
              <li
                v-else-if="props.order?.order_info.payment_method == 'CREDIT'"
                class="basis-1/3 lg:px-2"
              >
                <span class="mb-1 text-grey-400">刷卡銀行</span>
                <p>中國信託</p>
                <!-- NOTE: 可以做 random 銀行名稱 -->
              </li>
              <li class="basis-1/3 lg:px-2">
                <span class="mb-1 text-grey-400">付款時間</span>
                <p>{{ formattedDate(props.order?.order_info.newebpay_payTime) }}</p>
                <p>{{ props.order?.order_info.newebpay_payTime.slice(10) }}</p>
              </li>
            </ul>
          </div>
          <div class="mb-[46px] lg:mb-12">
            <h3 class="mb-3.5 flex items-center gap-2">
              <span>
                <img src="~/assets/images/icons/detail.svg" class="w-7" alt="發票資訊" />
              </span>
              <span class="text-h4">發票資訊</span>
            </h3>
            <ul class="flex flex-col flex-wrap gap-y-4 sm:flex-row lg:-mx-2 lg:gap-y-5">
              <li class="basis-1/2 lg:px-2">
                <span class="mb-1 text-grey-400">發票號碼</span>
                <p>{{ props.order?.order_info.invoice_number }}</p>
              </li>
              <li class="basis-1/2 lg:px-2">
                <span class="mb-1 text-grey-400">發票日期</span>
                <p>{{ formattedDate(props.order?.order_info.invoice_date) }}</p>
              </li>
              <li class="basis-1/2 lg:px-2">
                <span class="mb-1 text-grey-400">載具類型</span>
                <p>{{ props.order?.order_info.invoice_type }}</p>
              </li>
              <li
                v-if="props.order?.order_info.invoice_type == '電子載具'"
                class="basis-1/2 lg:px-2"
              >
                <span class="mb-1 text-grey-400">載具條碼</span>
                <p>{{ props.order?.order_info.invoice_carrier }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
