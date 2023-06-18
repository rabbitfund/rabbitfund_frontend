<script setup lang="ts">
const props = defineProps({
  step: {
    type: [Number],
    default: 0
  }
});
</script>

<template>
  <div class="-mx-3 flex justify-center">
    <ul class="flex w-full flex-wrap justify-center lg:w-8/12 lg:flex-nowrap lg:gap-2">
      <li class="w-1/2 px-3 lg:w-1/4">
        <span class="mb-1 text-grey-400">01</span>
        <span class="mb-1 block font-bold lg:text-lg">專案大綱</span>
        <div class="h-1 bg-primary"></div>
      </li>
      <li class="w-1/2 px-3 lg:w-1/4">
        <span class="mb-1 text-grey-400">02</span>
        <span class="mb-1 block font-bold lg:text-lg">專案內容</span>
        <div class="h-1" :class="props.step >= 2 ? 'bg-primary' : 'bg-primary-light'"></div>
      </li>
      <li class="w-1/2 px-3 lg:w-1/4">
        <span class="mb-1 text-grey-400">03</span>
        <span class="mb-1 block font-bold lg:text-lg">回饋設定</span>
        <div class="h-1" :class="props.step >= 3 ? 'bg-primary' : 'bg-primary-light'"></div>
      </li>
      <li class="w-1/2 px-3 lg:w-1/4">
        <span class="mb-1 text-grey-400">04</span>
        <span class="mb-1 block font-bold lg:text-lg">提案資料</span>
        <div class="h-1" :class="props.step == 4 ? 'bg-primary' : 'bg-primary-light'"></div>
      </li>
    </ul>
  </div>
</template>
