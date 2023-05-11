<script setup>
const route = useRoute();
const state = ref('Outline');
</script>
<template>
  <section class="container">
    <h2>新增提案</h2>
    <aside
      class="flex flex-row gap-1 overflow-auto overflow-y-hidden whitespace-nowrap px-3 py-1 text-grey-400"
    >
      <button
        class="aside-default"
        :class="{ 'active-aside': state === 'Outline' }"
        @click="state = 'Outline'"
      >
        專案大綱{{ state }}
      </button>
      <button
        class="aside-default"
        :class="{ 'active-aside': state === 'Content' }"
        @click="state = 'Content'"
      >
        專案內容
      </button>
      <button
        class="aside-default"
        :class="{ 'active-aside': state === 'SponsorshipProgramme' }"
        @click="state = 'SponsorshipProgramme'"
      >
        回饋設定
      </button>
      <button
        class="aside-default"
        :class="{ 'active-aside': state === 'ProposerDetail' }"
        @click="state = 'ProposerDetail'"
      >
        提案資料
      </button>
    </aside>
    <NuxtPage />
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
