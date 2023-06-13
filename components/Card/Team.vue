<script setup lang="ts">
import mockImg from '~/assets/images/rabbit.png';

const props = defineProps({
  proposerInfo: {
    type: [Object]
  }
});

const ownerProjectNum = () => {
  if (props.proposerInfo?.proposer_project && props.proposerInfo?.proposer_project.length) {
    // 在這裡處理 props.project 的內容
    return props.proposerInfo?.proposer_project.length;
  } else {
    // 處理當 props.project 為 undefined 或長度為 0 的情況
    return 1;
  }
};
</script>
<template>
  <div class="flex flex-col items-center rounded-lg bg-white px-8 py-10 ring-1 ring-grey-200">
    <div class="mb-8 bg-primary">
      <img
        :src="
          props.proposerInfo.proposer_cover != '/img/avatar-proposer.png'
            ? props.proposerInfo.proposer_cover
            : mockImg
        "
        class="h-20 w-20 object-cover object-top"
        :alt="props.proposerInfo.proposer_name"
      />
    </div>
    <h3 class="mb-2">{{ props.proposerInfo.proposer_name }}</h3>
    <span class="mb-8">{{ ownerProjectNum() }} 個專案 ｜ 團隊提案者</span>
    <div class="mb-8 flex w-full gap-4">
      <div class="flex flex-1 flex-col items-center gap-2">
        <span class="text-h6">提案者名稱</span>
        <span>{{ props.proposerInfo.proposer_name }}</span>
      </div>
      <div class="flex flex-1 flex-col items-center gap-2">
        <span class="text-h6">統一編號</span>
        <span>{{ props.proposerInfo.proposer_tax_id }}</span>
      </div>
    </div>
    <a
      v-if="props.proposerInfo.proposer_email"
      class="btn btn-primary-outline"
      :href="`mailto:${props.proposerInfo.proposer_email}`"
      >聯絡團隊</a
    >
  </div>
</template>
