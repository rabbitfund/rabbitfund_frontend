<script setup>
const ProposalOutline = resolveComponent('ProposalOutline');
const ProposalContent = resolveComponent('ProposalContent');
const ProposalOptions = resolveComponent('ProposalOptions');
const ProposalOwnerInfo = resolveComponent('ProposalOwnerInfo');

const tabComponents = ref({
  Outline: ProposalOutline,
  Content: ProposalContent,
  Options: ProposalOptions,
  OwnerInfo: ProposalOwnerInfo
});

const currentTab = ref('Outline');

useSeoMeta({
  title: '提案列表 - 倍而兔募資平台',
  ogTitle: '提案列表 - 倍而兔募資平台',
  description: '這裡是我們的提案列表，您可以在這裡發起各種募資提案。',
  ogDescription: '這裡是我們的提案列表，您可以在這裡發起各種募資提案。'
});
</script>
<template>
  <section class="container py-6 md:py-16">
    <h2 class="mx-auto mb-3 text-center md:mb-8">新增提案</h2>
    <aside
      class="mb-3 flex gap-4 overflow-auto overflow-y-hidden whitespace-nowrap px-3 py-1 text-grey-400 md:mb-8 md:justify-center"
    >
      <button
        class="aside-default"
        :class="{ 'active-aside': currentTab === 'Outline' }"
        @click="currentTab = 'Outline'"
      >
        專案大綱
      </button>
      <button
        class="aside-default"
        :class="{ 'active-aside': currentTab === 'Content' }"
        @click="currentTab = 'Content'"
      >
        專案內容
      </button>
      <button
        class="aside-default"
        :class="{ 'active-aside': currentTab === 'Options' }"
        @click="currentTab = 'Options'"
      >
        回饋設定
      </button>
      <button
        class="aside-default"
        :class="{ 'active-aside': currentTab === 'OwnerInfo' }"
        @click="currentTab = 'OwnerInfo'"
      >
        提案資料
      </button>
    </aside>

    <section class="mb-3 rounded-lg bg-light-emphasis p-12 md:mb-8">
      <component :is="tabComponents[currentTab]" />
    </section>

    <section class="flex justify-center">
      <button class="btn btn-primary-outline">確認提案</button>
    </section>
  </section>
</template>

<style scoped>
.aside-default {
  @apply rounded-lg px-4 py-2 text-lg hover:bg-light hover:font-bold hover:text-grey-600;
}
.active-aside {
  @apply bg-light text-lg font-bold text-grey-600;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>
