<script setup lang="ts">
const props = defineProps({
  brand: {
    type: [String]
  },
  number: {
    type: [Number],
    default: 1
  },
  proposer: {
    type: [String]
  },
  unifiedNumber: {
    type: [String]
  },
  email: {
    type: [String]
  }
});
</script>

<template>
  <div class="flex flex-col items-center rounded-lg bg-white px-8 py-10 ring-1 ring-grey-200">
    <div class="mb-8 bg-primary">
      <img
        src="~/assets/images/rabbit.png"
        class="h-20 w-20 object-cover object-top"
        alt="rabbit"
      />
    </div>
    <h3 class="mb-2">{{ props.brand }}</h3>
    <span class="mb-8">{{ props.number == 0 ? 1 : props.number }} 個專案 ｜ 團隊提案者</span>
    <div class="mb-8 flex w-full gap-4">
      <div class="flex flex-1 flex-col items-center gap-2">
        <span class="text-h6">提案者名稱</span>
        <span>{{ props.proposer }}</span>
      </div>
      <div class="flex flex-1 flex-col items-center gap-2">
        <span class="text-h6">統一編號</span>
        <span>{{ props.unifiedNumber }}</span>
      </div>
    </div>
    <a v-if="props.email" class="btn btn-primary-outline" :href="`mailto:${props.email}`"
      >聯絡團隊</a
    >
  </div>
</template>
