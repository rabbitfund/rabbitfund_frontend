<script setup>
const route = useRoute();
console.log(route.path);

computed(() => {
  console.log(route.path);
});
</script>

<template>
  <section class="container flex flex-col gap-8 md:flex-row md:py-16">
    <aside
      class="custom-scrollbar gap-4 overflow-auto whitespace-nowrap border-b px-3 py-6 text-grey-400 md:flex md:w-[306px] md:flex-col md:rounded-xl md:bg-light-emphasis md:px-4"
    >
      <NuxtLink
        to="/member"
        class="aside-default"
        :class="{ 'active-aside': route.path === '/member' }"
        >會員中心</NuxtLink
      >
      <NuxtLink
        to="/member/proposals"
        class="aside-default"
        :class="{ 'active-aside': route.path === '/member/proposals' }"
        >提案紀錄</NuxtLink
      >
      <NuxtLink
        to="/member/sponsorships"
        class="aside-default"
        :class="{ 'active-aside': route.path === '/member/sponsorships' }"
        >贊助紀錄</NuxtLink
      >
      <NuxtLink
        to="/member/notifications"
        class="aside-default"
        :class="{ 'active-aside': route.path === '/member/notifications' }"
        >通知中心</NuxtLink
      >
      <NuxtLink
        to="/member/manage"
        class="aside-default"
        :class="{ 'active-aside': route.path === '/member/manage' }"
        >管理個人資料</NuxtLink
      >
      <NuxtLink
        to="/member/change-password"
        class="aside-default"
        :class="{ 'active-aside': route.path === '/member/change-password' }"
        >密碼變更</NuxtLink
      >
    </aside>
    <div>
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

.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
