<script setup>
const route = useRoute();
</script>

<template>
  <section class="container grid grid-cols-12 gap-8 py-6 md:py-16">
    <aside
      class="col-span-12 flex flex-row gap-1 overflow-auto overflow-y-hidden whitespace-nowrap px-3 py-1 text-grey-400 lg:col-span-3 lg:flex-col lg:gap-4 lg:rounded-xl lg:bg-light-emphasis lg:px-4 lg:py-6"
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
        :class="{ 'active-aside': route.path.includes('/member/proposals') }"
        >提案紀錄</NuxtLink
      >
      <NuxtLink
        to="/member/orders"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/member/orders') }"
        >贊助紀錄</NuxtLink
      >
      <NuxtLink
        to="/member/notifications"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/member/notifications') }"
        >通知中心</NuxtLink
      >
      <NuxtLink
        to="/member/manage"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/member/manage') }"
        >管理個人資料</NuxtLink
      >
      <!-- 
      <NuxtLink
        to="/member/change-password"
        class="aside-default"
        :class="{ 'active-aside': route.path.includes('/member/change-password') }"
        >密碼變更</NuxtLink
      >
       -->
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
