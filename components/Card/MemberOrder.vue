<script setup>
import mockImg from '~/assets/images/mock.png';

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
        <h4 class="mt-2 font-bold text-grey-600">{{ props.order.project?.project_title }}</h4>
        <h5 class="mt-2 font-bold text-grey-600">{{ props.order.option?.option_name }}</h5>
        <div class="mt-6 flex justify-between gap-6 bg-light-emphasis px-5 py-3">
          <div>
            <p>訂單狀態</p>
            <p class="text-[20px] font-bold xl:text-2xl">{{ props.order.order_status }}</p>
          </div>
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
        </div>
      </div>
      <!-- 
      <div class="col-span-12 hidden lg:block">
        {{ props.order.order_info }}
      </div>
       -->
    </div>

    <div class="flex flex-col items-center justify-center lg:min-w-[140px]">
      <!-- <div class="mb-11 flex gap-1 lg:block">
        <p class="leading-10 lg:leading-normal">目前募資金額</p>
        <p class="text-2xl font-bold">{{ formattedAmount(props.order.project?.project_progress) }}</p>
      </div> -->
      <div class="flex gap-4 lg:block">
        <button class="btn btn-primary-outline lg:mb-7">詳細訂單資料</button>
        <button class="flex justify-center text-grey-400" @click="copy(props.order.project?._id)">
          <img class="mr-1 inline-block w-6" src="~/assets/images/icons/copy.svg" />分享連結
        </button>
      </div>
    </div>
  </section>
</template>
