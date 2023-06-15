<script setup>
const route = useRoute();
</script>

<template>
  <section class="container grid grid-cols-12 gap-8 py-6 md:py-16">
    <aside
      class="col-span-12 flex flex-row gap-1 overflow-auto overflow-y-hidden whitespace-nowrap px-3 py-1 text-grey-400 lg:col-span-3 lg:flex-col lg:gap-4 lg:rounded-xl lg:bg-light-emphasis lg:px-4 lg:py-6"
    >
      <NuxtLink
        to="/info/about"
        class="aside-default"
        :class="{ 'active-aside': route.path === '/info/about' }"
        >關於我們</NuxtLink
      >
      <NuxtLink
        to="/info/regulations"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/info/regulations') }"
        >贊助保障規範</NuxtLink
      >
      <NuxtLink
        to="/info/proposal"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/info/proposal') }"
        >提案服務說明</NuxtLink
      >
      <NuxtLink
        to="/info/faq-sponsor"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/info/faq-sponsor') }"
        >贊助方常見問題</NuxtLink
      >
      <NuxtLink
        to="/info/faq-proposal"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/info/faq-proposal') }"
        >提案方常見問題</NuxtLink
      >
      <NuxtLink
        to="/info/terms"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/info/terms') }"
        >使用者條款</NuxtLink
      >
      <NuxtLink
        to="/info/privacy"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/info/privacy') }"
        >隱私權政策</NuxtLink
      >
    </aside>
    <div class="col-span-12 lg:col-span-9">
      <NuxtPage />
    </div>
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
