<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  btn: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '/'
  },
  close: {
    type: Function,
    default: ()=>{}
  }
});
// console.log('BlockRabbit', props);
</script>
<template>
  <div
    class="flex flex-col items-center bg-[url('/assets/images/proposal-bg.png')] bg-cover bg-center bg-no-repeat pb-[58.94px] pt-[70.14px] sm:bg-contain lg:flex-row lg:justify-center lg:self-start lg:px-10 lg:pb-20 lg:pt-40 xl:pb-[86px] xl:pl-[88px] xl:pr-[80px] xl:pt-[200px]"
  >
    <img
      src="~/assets/images/rabbit.png"
      alt="rabbit"
      class="mb-6 h-[128px] w-20 md:h-auto lg:mb-0 lg:mr-12 xl:w-[131.7px]"
    />
    <div class="text-center lg:text-left">
      <p class="mb-6 text-xl font-bold text-warning xl:text-2xl">
        <span class="block">{{ props.title }}</span>
        <span>{{ props.text }}</span>
      </p>
      <NuxtLink :to="props.link" class="btn btn-primary" @click="props.close">{{ props.btn }}</NuxtLink>
    </div>
  </div>
</template>
