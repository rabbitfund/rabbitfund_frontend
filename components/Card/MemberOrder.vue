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

const { showSuccessMessage } = useSwalShowMessage();

const copy = (projectId) => {
  navigator.clipboard.writeText(`${window.location.origin}/project/${projectId}/info`);
  
  showSuccessMessage('已複製連結', `${window.location.origin}/project/${projectId}/info`);
};
</script>

<template>
  <div class="flex flex-col gap-6 rounded-lg border bg-white p-5 xl:px-10 xl:py-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-5">
        <img
          :src="
            props.order.project?.project_cover && props.order.project?.project_cover !== 'cover URL'
              ? props.order.project?.project_cover
              : mockImg
          "
          class="h-full rounded-lg object-cover"
          alt="carrot"
        />
      </div>
      <div class="col-span-12 flex flex-col gap-6 xl:col-span-7">
        <div class="flex items-baseline justify-between">
          <div>
            <h2 class="mt-2 text-h4">{{ props.order.project?.project_title }}</h2>
            <h3 class="mt-2 text-base text-primary">{{ props.order.option?.option_name }}</h3>
          </div>
          <button
            class="flex items-center gap-1 text-grey-400"
            @click="copy(props.order.project?._id)"
          >
            <img class="inline-block w-6" src="~/assets/images/icons/copy.svg" />
            <span>分享連結</span>
          </button>
        </div>
        <ul class="flex flex-wrap justify-between gap-6 rounded-md bg-light-emphasis px-4 py-3">
          <li class="basis-[calc(50%-12px)] whitespace-nowrap md:basis-0">
            <span class="mb-1 block text-grey-400">訂單狀態</span>
            <Badge
              :type="props.order.order_status > 0 ? 'success' : 'primary'"
              :name="props.order.order_status > 0 ? '已完成' : '未完成'"
            />
          </li>
          <!-- <li class="basis-[calc(50%-12px)] md:basis-0 whitespace-nowrap">
            <span class="mb-1 block text-grey-400">商品運送狀態</span>
            <Badge
              :type="props.order.order_shipping_status > 0 ? 'success' : 'primary'"
              :name="props.order.order_shipping_status > 0 ? '已送達' : '未出貨'"
            />
          </li> -->
          <li class="basis-[calc(50%-12px)] whitespace-nowrap md:basis-0">
            <span class="mb-1 block text-grey-400">付款狀態</span>
            <Badge
              :type="props.order.order_info.payment_status > 0 ? 'success' : 'primary'"
              :name="props.order.order_info.payment_status > 0 ? '已付款' : '未付款'"
            />
          </li>
          <li class="basis-[calc(50%-12px)] whitespace-nowrap md:basis-0">
            <span class="mb-1 block text-grey-400">訂單日期</span>
            <span class="text-lg font-bold">
              {{ formattedDate(props.order.order_create_date) }}
            </span>
          </li>
          <li class="basis-[calc(50%-12px)] whitespace-nowrap md:basis-0">
            <span class="mb-1 block text-grey-400">訂單金額</span>
            <span class="text-lg font-bold">
              {{ formattedAmount(props.order.order_total) }}
            </span>
          </li>
        </ul>
      </div>
      <div class="col-span-12">
        <div class="mb-1">
          <button
            type="button"
            class="flex w-full cursor-pointer items-center justify-center p-2 text-grey-400"
            @click="toggleSeeMore()"
          >
            <span>{{ !showDetails ? '看更多' : '收起' }}</span>
            <img class="ml-2" :src="showDetails ? arrowTop : arrowBottom" alt="see more" />
          </button>
        </div>

        <div
          :class="showDetails ? 'h-auto' : 'h-0'"
          class="flex flex-col flex-wrap gap-x-6 gap-y-12 overflow-hidden transition duration-500 ease-in-out md:flex-row"
        >
          <section class="rounded-md bg-light-emphasis px-4 py-3 md:basis-full">
            <ul class="flex flex-col flex-wrap gap-x-6 gap-y-4 sm:flex-row whitespace-nowrap">
              <!-- NOTE: 這邊所有 user 的資料暫時直接抓 userStore 的，未來資料庫有增加欄位，可以再調整成付款人與會員姓名資料不同 -->
              <li class="sm:basis-[calc(50%-12px)] xl:basis-0">
                <span class="mb-1 text-grey-400">付款人姓名</span>
                <p>{{ userInfo?.user_name }}</p>
              </li>
              <li v-if="userInfo?.user_phone" class="sm:basis-[calc(50%-12px)] xl:basis-0">
                <span class="mb-1 text-grey-400">付款人手機</span>
                <p>{{ userInfo?.user_phone }}</p>
              </li>
              <li class="sm:basis-full md:basis-[calc(50%-12px)] xl:basis-0">
                <span class="mb-1 text-grey-400">E-mail</span>
                <p>{{ userInfo?.user_email }}</p>
              </li>
              <li class="sm:basis-full md:basis-[calc(50%-12px)] xl:basis-0">
                <span class="mb-1 text-grey-400">備註</span>
                <p>{{ props.order?.order_note }} </p>
              </li>
            </ul>
          </section>

          <section class="md:basis-full">
            <h3 class="mb-6 flex items-center gap-2">
              <span>
                <img src="~/assets/images/icons/book.svg" class="w-8" alt="book" />
              </span>
              <span class="text-h4">訂單詳細資訊</span>
            </h3>
            <div class="flex flex-col gap-x-6 gap-y-4 md:flex-row">
              <ul class="flex basis-1/2 flex-col gap-y-4">
                <li>
                  <span class="mb-1 mr-4 text-grey-400">專案名稱</span>
                  <span>{{ props.order?.project.project_title }}</span>
                </li>
                <li>
                  <span class="mb-1 mr-4 text-grey-400">方案名稱</span>
                  <span>{{ props.order?.option.option_name }}</span>
                </li>
                <li>
                  <span class="mb-1 mr-4 text-grey-400">訂單編號</span>
                  <span>{{ props.order?._id }}</span>
                </li>
                <li>
                  <span class="mb-1 mr-4 text-grey-400">實現日期</span>
                  <span>預計於 2024 年四月送出</span>
                </li>
              </ul>
              <ul class="flex basis-1/2 flex-col gap-y-4">
                <li>
                  <span class="mb-1 mr-4 text-grey-400">付款總額</span>
                  <span>NT$ {{ formattedAmount(props.order?.order_total) }}</span>
                </li>
                <li>
                  <span class="mb-1 mr-4 text-grey-400">方案金額</span>
                  <span>NT$ {{ formattedAmount(props.order?.option.option_price) }}</span>
                </li>
                <li>
                  <span class="mb-1 mr-4 text-grey-400">方案份數</span>
                  <span>{{ props.order?.order_option_quantity }} 份</span>
                </li>
                <li>
                  <span class="mb-1 mr-4 text-grey-400">額外贊助</span>
                  <span>NT$ {{ formattedAmount(props.order?.order_extra) }}</span>
                </li>
              </ul>
            </div>
          </section>

          <section class="md:basis-[calc(50%-12px)]">
            <h3 class="mb-6 flex items-center gap-2">
              <span>
                <img src="~/assets/images/icons/credit-card.svg" class="w-8" alt="信用卡" />
              </span>
              <span class="text-h4">付款資訊</span>
            </h3>
            <ul class="flex flex-col gap-y-4">
              <li>
                <span class="mb-1 mr-4 text-grey-400">訂單建立日期</span>
                <span>{{ formattedDate(props.order?.order_create_date) }}</span>
              </li>
              <li>
                <span class="mb-1 mr-4 text-grey-400">訂單完成日期</span>
                <span v-if="props.order?.order_final_date">
                  {{ formattedDate(props.order?.order_final_date) }}
                </span>
              </li>
              <li>
                <span class="mb-1 mr-4 text-grey-400">付款方式</span>
                <span>{{ props.order?.order_info.payment_method }}</span>
              </li>
              <li v-if="props.order?.order_info.payment_method == 'WEBATM'">
                <span class="mb-1 mr-4 text-grey-400">付款銀行</span>
                <span>
                  {{ props.order?.order_info.newebpay_payBankCode == 809 ? '華南銀行' : '其他' }}
                </span>
              </li>
              <li v-else-if="props.order?.order_info.payment_method == 'CREDIT'">
                <span class="mb-1 mr-4 text-grey-400">刷卡銀行</span>
                <span>中國信託</span>
                <!-- NOTE: 可以做 random 銀行名稱 -->
              </li>
              <li v-if="props.order?.order_info.newebpay_payTime">
                <span class="mb-1 mr-4 text-grey-400">付款時間</span>
                <span class="mr-2">{{
                  formattedDate(props.order?.order_info.newebpay_payTime)
                }}</span>
                <span>{{ props.order?.order_info.newebpay_payTime.slice(10) }}</span>
              </li>
            </ul>
          </section>

          <section class="md:basis-[calc(50%-12px)]">
            <h3 class="mb-6 flex items-center gap-2">
              <span>
                <img src="~/assets/images/icons/detail.svg" class="w-8" alt="note" />
              </span>
              <span class="text-h4">發票資訊</span>
            </h3>
            <ul class="flex flex-col gap-y-4">
              <li>
                <span class="mb-1 mr-4 text-grey-400">發票號碼</span>
                <span>{{ props.order?.order_info.invoice_number }}</span>
              </li>
              <li>
                <span class="mb-1 mr-4 text-grey-400">發票日期</span>
                <span v-if="props.order?.order_info.invoice_date">
                  {{ formattedDate(props.order?.order_info.invoice_date) }}
                </span>
              </li>
              <li>
                <span class="mb-1 mr-4 text-grey-400">載具類型</span>
                <span>{{ props.order?.order_info.invoice_type }}</span>
              </li>
              <li v-if="props.order?.order_info.invoice_type == '電子載具'">
                <span class="mb-1 mr-4 text-grey-400">載具條碼</span>
                <span>{{ props.order?.order_info.invoice_carrier }}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
