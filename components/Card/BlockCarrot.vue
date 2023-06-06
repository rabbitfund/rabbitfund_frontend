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
  }
});
console.log('BlockCarrot', props);
</script>
<template>
  <div
    class="lg:pb-22 flex flex-col items-center bg-[url('/assets/images/sponsor-bg.png')] bg-cover bg-center bg-no-repeat pb-[71px] pt-[98px] sm:bg-contain lg:mt-20 lg:flex-row lg:justify-center lg:self-end lg:px-10 lg:pb-20 lg:pt-40 xl:pb-[140px] xl:pl-[82px] xl:pr-[98px] xl:pt-[229px]"
  >
    <img
      src="~/assets/images/carrot.png"
      alt="carrot"
      class="mb-3 w-[140px] lg:mb-0 lg:mr-6 xl:mr-[50.76px] xl:w-[169.24px]"
    />
    <div class="text-center lg:text-left">
      <p class="mb-6 text-xl font-bold text-primary xl:text-2xl">
        <span class="block">{{ props.title }}</span>
        <span>{{ props.text }}</span>
      </p>
      <NuxtLink :to="props.link" class="btn btn-primary">{{ props.btn }}</NuxtLink>
    </div>
  </div>
</template>
