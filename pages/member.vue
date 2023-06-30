<script setup>
const route = useRoute();
definePageMeta({
  middleware: ['auth']
});
</script>

<template>
  <div class="grid grid-cols-12 lg:container lg:gap-6 lg:py-16">
    <aside
      class="col-span-12 mb-4 border-y border-grey-200 lg:col-span-3 lg:rounded-xl lg:border-0 lg:bg-light-emphasis lg:mb-0"
    >
      <ul
        class="flex flex-row overflow-auto whitespace-nowrap px-3 py-6 text-grey-400 lg:flex-col lg:gap-4 lg:px-4"
      >
        <li>
          <NuxtLink
            to="/member"
            class="aside-default"
            :class="{ 'active-aside': route.path === '/member' }"
            >會員中心
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/member/proposals"
            class="aside-default"
            :class="{ 'active-aside': route.path.includes('/member/proposals') }"
            >提案紀錄
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/member/orders"
            class="aside-default"
            :class="{ 'active-aside': route.path.includes('/member/orders') }"
            >贊助紀錄
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/member/notifications"
            class="aside-default"
            :class="{ 'active-aside': route.path.includes('/member/notifications') }"
            >通知中心
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/member/manage"
            class="aside-default"
            :class="{ 'active-aside': route.path.includes('/member/manage') }"
            >管理個人資料
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink
            to="/member/change-password"
            class="aside-default"
            :class="{ 'active-aside': route.path.includes('/member/change-password') }"
            >密碼變更
          </NuxtLink>
        </li> -->
      </ul>
    </aside>
    <div class="col-span-12 lg:col-span-9">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.aside-default {
  @apply inline-block rounded-lg px-4 py-2 text-lg hover:bg-light hover:font-bold hover:text-grey-600 lg:w-full;
}
.active-aside {
  @apply bg-light font-bold text-grey-600;
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
