<script setup>
import mockImg from '~/assets/images/mock.png';

const props = defineProps({
  canModify: {
    type: [Boolean],
    default: true
  },
  id: {
    type: [String]
  },
  type: {
    type: [String]
  },
  timeLeft: {
    type: [String]
  },
  title: {
    type: [String]
  },
  proposer: {
    type: [String]
  },
  cover: {
    type: [String]
  }
});
</script>
<template>
  <section
    class="flex flex-col justify-between gap-12 rounded-lg border p-5 lg:flex-row lg:px-8 lg:py-6"
  >
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 overflow-hidden rounded-t-lg xl:col-span-5">
        <img :src="props?.cover || mockImg" class="object-contain" alt="carrot" />
      </div>
      <div class="col-span-12 xl:col-span-7">
        <span class="block w-[72px]"><Badge :type="props.type"></Badge></span>

        <h4 class="mt-2 font-bold text-grey-600">{{props.title}}</h4>
        <div class="mt-6 flex justify-between gap-6 bg-light-emphasis px-5 py-3">
          <div>
            <p>贊助人次</p>
            <p class="text-[20px] font-bold xl:text-2xl">19</p>
          </div>
          <div>
            <p>提案倒數</p>
            <p class="text-[20px] font-bold xl:text-2xl">11:22:33</p>
          </div>
          <div>
            <p>目標金額</p>
            <p class="text-[20px] font-bold xl:text-2xl">$ 500,000</p>
          </div>
        </div>
      </div>
      <div class="col-span-12 hidden lg:block">
        我們都知道，教育是改變命運的關鍵，但是在偏鄉地區，孩子們卻往往缺乏教育資源。透過您的捐款，我們將幫助這些孩子獲得更好的學習機會，讓他們擁有更美好的未來。
        請您一起加入我們的行列，支持這個值得關注的公益專案，您的每一筆捐款都將為偏鄉孩子...
      </div>
    </div>

    <div class="flex flex-col items-center justify-center lg:min-w-[140px]">
      <div class="mb-11 flex gap-1 lg:block">
        <p class="leading-10 lg:leading-normal">目前募資金額</p>
        <p class="text-2xl font-bold">$5,000</p>
      </div>
      <div class="flex gap-4 lg:block">
        <button v-if="props.canModify" class="btn btn-primary-outline lg:mb-7">修改提案</button>
        <div class="flex justify-center text-grey-400">
          <img class="mr-1 inline-block w-6" src="~/assets/images/icons/copy.svg" />分享連結
        </div>
      </div>
    </div>
  </section>
</template>
