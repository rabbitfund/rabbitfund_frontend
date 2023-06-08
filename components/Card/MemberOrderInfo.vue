<script setup>
// import mockImg from '~/assets/images/mock.png';
import arrowTop from '@/assets/images/icons/arrow-top.svg';
import arrowBottom from '@/assets/images/icons/arrow-bottom.svg';

const props = defineProps({
  order: {
    type: [Object]
  }
});
console.log('CardMemberOrderInfo', props.order);

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

const copy = (projectId) => {
  navigator.clipboard.writeText(`${window.location.origin}/project/${projectId}/info`);
};
</script>

<template>
  <section>
    <div
      class="mb-5 flex flex-col items-center rounded-lg border border-grey-200 sm:text-lg md:text-base"
    >
      <header class="flex w-full flex-col justify-center gap-2 bg-light-emphasis p-2">
        <p class="text-center font-bold text-grey-500">{{ props.order.project?.project_title }}</p>
        <p class="text-center text-grey-600">{{ props.order.option?.option_name }}</p>
      </header>

      <div class="my-5 flex w-full justify-center divide-y text-center">
        <div class="flex flex-col gap-2 border-r border-grey-200 px-5">
          <p class="text-grey-400">訂單狀態</p>
          <button v-if="props.order.order_status == 2" class="btn-primary rounded-full px-5 py-2">
            已完成
          </button>
          <button v-else class="btn-primary rounded-full px-5 py-2">未完成</button>
        </div>
        <div class="flex flex-col gap-2 px-5">
          <p class="text-grey-400">付款狀態</p>
          <button
            v-if="props.order.order_info.payment_status == 2"
            class="btn-primary rounded-full px-5 py-2"
          >
            已付款
          </button>
          <button v-else class="btn-primary rounded-full px-5 py-2">未付款</button>
        </div>
      </div>

      <p class="mb-1 flex items-center justify-center p-2 text-grey-600" @click="toggleSeeMore()">
        {{ !showDetails ? '詳細' : '收起' }}
        <img class="ml-2" :src="showDetails ? arrowTop : arrowBottom" alt="see more" />
      </p>

      <div
        :class="showDetails ? 'h-auto' : 'h-0'"
        class="w-full overflow-hidden border-t text-center transition duration-500 ease-in-out"
      >
        <div class="mt-6 flex justify-between gap-6 bg-light-emphasis px-5 py-3">
          <div>
            <p>訂單日期</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ props.order.order_create_date.slice(0, 10) }}
            </p>
          </div>
          <div>
            <p>訂單金額</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ formattedAmount(props.order.order_total) }}
            </p>
          </div>
          <div>
            <p>付款方式</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ props.order.order_info.payment_method }}
            </p>
          </div>
        </div>
        <div class="mt-6 flex justify-between gap-6 bg-light-emphasis px-5 py-3">
          <div>
            <p>發票號碼</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ props.order?.order_info.invoice_number }}
            </p>
          </div>
          <div>
            <p>載具類型</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ props.order?.order_info.invoice_type }}
            </p>
          </div>
          <div v-if="props.order?.order_info.invoice_carrier">
            <p>載具條碼</p>
            <p class="text-[20px] font-bold xl:text-2xl">
              {{ props.order?.order_info.invoice_carrier }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
