<script setup>
import { storeToRefs } from 'pinia';
import avatar from '@/assets/images/avatar.png';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const isSigned = storeToRefs(authStore).token;

const user = ref({
  name: '倍兔兔',
  avatar: '' || avatar
});
function signIn() {
  navigateTo('/users/signin');
}
</script>
<template>
  <section class="relative bg-light">
    <div class="container flex items-center justify-between">
      <NuxtLink to="/" class="py-3">
        <img class="h-[58px]" src="@/assets/images/logo.png" alt="logo" />
      </NuxtLink>

      <ClientOnly>
        <!-- 平板以上 -->
        <div class="hidden items-center gap-10 md:flex">
          <div class="flex h-full items-center gap-4 font-bold text-primary">
            <NuxtLink to="/projects" class="p-2 hover:text-primary-dark"> 探索 </NuxtLink>
            <NuxtLink to="/proposal" class="p-2 hover:text-primary-dark"> 提案 </NuxtLink>
            <NuxtLink to="/projects" class="flex items-center gap-1 p-2 hover:text-primary-dark">
              <img class="w-6" src="@/assets/images/icons/search.svg" alt="search icon" />
              搜尋
            </NuxtLink>
          </div>
          <button v-if="!isSigned" class="btn btn-primary" @click="signIn">登入</button>
          <button v-else class="group relative flex cursor-pointer items-center">
            <img class="mr-2 h-12" :src="user.avatar" alt="avatar" />
            <span class="font-bold text-primary">{{ user.name }}</span>

            <div
              class="absolute right-0 top-full z-10 hidden cursor-default group-hover:block group-focus:block"
            >
              <div class="rounded-md bg-white px-10 py-8 shadow-md">
                <p class="mb-8 text-start font-bold text-primary">會員中心</p>
                <ul class="mb-8 flex min-w-[124px] flex-col gap-7">
                  <li class="inline-block">
                    <NuxtLink
                      to="/member/proposals"
                      class="flex items-center gap-2 border-b-2 border-transparent pb-[2px] hover:border-primary"
                    >
                      <img class="w-5" src="@/assets/images/icons/time.svg" alt="提案紀錄" />
                      <span>提案紀錄</span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/member/sponsorships"
                      class="flex items-center gap-2 border-b-2 border-transparent pb-[2px] hover:border-primary"
                    >
                      <img class="w-5" src="@/assets/images/icons/heart.svg" alt="贊助紀錄" />
                      <span>贊助紀錄</span></NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/member/notifications"
                      class="flex items-center gap-2 border-b-2 border-transparent pb-[2px] hover:border-primary"
                    >
                      <img class="w-5" src="@/assets/images/icons/bell.svg" alt="通知中心" />
                      <span>通知中心</span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/member/manage"
                      class="flex items-center gap-2 border-b-2 border-transparent pb-[2px] hover:border-primary"
                    >
                      <img class="w-5" src="@/assets/images/icons/user.svg" alt="管理個人資料" />
                      <span>管理個人資料</span></NuxtLink
                    >
                  </li>
                </ul>

                <button class="btn btn-primary-outline" @click="authStore.handleSignOut()">
                  登出
                </button>
              </div>
            </div>
          </button>
        </div>
        <!-- 手機板 -->
        <div class="group flex self-stretch font-bold text-primary md:hidden">
          <button>
            <img class="h-10" src="@/assets/images/icons/bars.svg" alt="bars" />
          </button>

          <div
            class="transition-height absolute left-0 top-full z-10 h-0 w-full overflow-hidden duration-1000 ease-in-out group-hover:h-auto group-focus:h-auto"
          >
            <div class="bg-light px-3">
              <ul class="flex flex-col gap-1 pb-7 text-center text-xl">
                <li>
                  <NuxtLink to="/projects" class="block rounded-lg py-3 hover:bg-light-emphasis"
                    >探索</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/proposal" class="block rounded-lg py-3 hover:bg-light-emphasis"
                    >提案</NuxtLink
                  >
                </li>
                <li class="mb-3">
                  <NuxtLink to="/projects" class="block rounded-lg py-3 hover:bg-light-emphasis">
                    <img
                      class="mr-1 inline-block h-8"
                      src="@/assets/images/icons/search.svg"
                      alt="search icon"
                    />
                    <span>搜尋</span>
                  </NuxtLink>
                </li>
                <li v-if="!isSigned">
                  <button
                    class="rounded-full bg-primary px-8 py-3 text-[18px] font-bold text-white"
                    @click="handleSignIn"
                  >
                    登入
                  </button>
                </li>

                <template v-else>
                  <div class="my-5 border-t border-primary"></div>
                  <li class="mb-3 mt-6">
                    <NuxtLink to="/member" class="flex items-center justify-center">
                      <img class="mr-2 h-12" :src="user.avatar" alt="avatar" />
                      <span class="text-base font-bold text-primary">{{ user.name }}</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/member/proposals"
                      class="flex items-center justify-center gap-2 rounded-lg py-3 hover:bg-light-emphasis"
                    >
                      <img class="w-5" src="@/assets/images/icons/time-fill.svg" alt="提案紀錄" />
                      <span class="text-lg">提案紀錄</span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/member/sponsorships"
                      class="flex items-center justify-center gap-2 rounded-lg py-3 hover:bg-light-emphasis"
                    >
                      <img class="w-5" src="@/assets/images/icons/heart-fill.svg" alt="贊助紀錄" />
                      <span class="text-lg">贊助紀錄</span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/member/notifications"
                      class="flex items-center justify-center gap-2 rounded-lg py-3 hover:bg-light-emphasis"
                    >
                      <img class="w-5" src="@/assets/images/icons/bell-fill.svg" alt="通知中心" />
                      <span class="text-lg">通知中心</span></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/member/manage"
                      class="flex items-center justify-center gap-2 rounded-lg py-3 hover:bg-light-emphasis"
                    >
                      <img
                        class="w-5"
                        src="@/assets/images/icons/user-fill.svg"
                        alt="管理個人資料"
                      />
                      <span class="text-lg">管理個人資料</span></NuxtLink
                    >
                  </li>
                  <li class="mt-3">
                    <button
                      class="rounded-full bg-primary px-8 py-3 text-[18px] font-bold text-white"
                      @click="handleSignOut"
                    >
                      登出
                    </button>
                  </li></template
                >
              </ul>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>
