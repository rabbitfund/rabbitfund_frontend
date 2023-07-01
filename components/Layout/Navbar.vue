<script setup>
import { storeToRefs } from 'pinia';
import avatar from '@/assets/images/avatar.png';
import { useAuthStore } from '@/stores/auth';
import { useUserStore } from '@/stores/user';
const route = useRoute();
const k = ref('');
k.value = route.query.k ? route.query.k : '';

const authStore = useAuthStore();
const userStore = useUserStore();
const isSigned = storeToRefs(authStore).token;
const { userInfo } = storeToRefs(userStore);

const isSearchInputVisible = ref(false);
const searchInput = ref(null);
const searchInputMobile = ref(null);
function toggleSearchInput() {
  const nextValue = !isSearchInputVisible.value;
  isSearchInputVisible.value = nextValue;

  if (nextValue) {
    // 使用 $nextTick 確保在顯示輸入框後才將焦點設置在上面
    nextTick(() => {
      searchInput.value.focus();
      searchInputMobile.value.focus();
    });
  }
}

function handleSearch(value) {
  let params = `?k=${value}`;
  if (!value) {
    params = '';
  }
  navigateTo(`/projects${params}`);
}

const { getUserDetail } = useApi();
watch(
  () => isSigned.value,
  async () => {
    if (isSigned.value) {
      const { data } = await getUserDetail();
      userStore.handleGetUserData(data);
    }
  }
);

const isHamburgerMenuVisible = ref(false);
function toggleHamburgerMenu() {
  isHamburgerMenuVisible.value = !isHamburgerMenuVisible.value;
}
watch(
  () => route.fullPath,
  () => {
    isHamburgerMenuVisible.value = false;
  }
);

function signIn() {
  navigateTo('/users/signin');
}
function signUp() {
  navigateTo('/users/signup');
}
</script>
<template>
  <nav class="relative bg-light">
    <div class="container flex items-center justify-between py-4">
      <NuxtLink to="/">
        <img class="h-[58px]" src="@/assets/images/logo.png" alt="logo" />
      </NuxtLink>

      <ClientOnly>
        <!-- 平板以上 -->
        <div class="hidden items-center gap-10 md:flex">
          <div class="relative flex h-full items-center gap-4 font-bold text-primary">
            <NuxtLink to="/projects" class="link p-2"> 探索 </NuxtLink>
            <NuxtLink to="/proposal" class="link p-2"> 提案 </NuxtLink>

            <button
              class="flex items-center gap-1 p-2 hover:text-primary-dark"
              @click="toggleSearchInput"
            >
              <img class="w-6" src="@/assets/images/icons/search.svg" alt="search icon" />
              搜尋
            </button>
            <input
              v-if="isSearchInputVisible"
              ref="searchInput"
              v-model="k"
              type="text"
              class="absolute right-0 top-0 p-2"
              placeholder="搜尋"
              @blur="toggleSearchInput"
              @keyup.enter="handleSearch($event.target.value)"
            />
          </div>
          <div v-if="!isSigned" class="flex gap-6">
            <button class="btn btn-primary" @click="signIn">登入</button>
            <button class="btn btn-primary-outline" @click="signUp">註冊</button>
          </div>
          <button v-else class="group relative flex cursor-pointer items-center">
            <img
              class="mr-2 h-12 w-12 rounded-full object-cover"
              :src="userInfo?.user_cover || avatar"
              alt="avatar"
            />
            <span class="font-bold text-primary">{{ userInfo?.user_name || '倍兔兔' }}</span>

            <div
              class="absolute right-0 top-full z-10 hidden cursor-default group-hover:block group-focus:block"
            >
              <div class="rounded-xl bg-white px-10 py-8 shadow">
                <ul class="mb-8 flex min-w-[124px] flex-col gap-7">
                  <li class="inline-block">
                    <NuxtLink
                      to="/member"
                      class="flex items-center gap-2 border-b-2 border-transparent pb-[2px] hover:border-primary"
                    >
                      <img class="w-5" src="@/assets/images/icons/user.svg" alt="會員中心" />
                      <span>會員中心</span></NuxtLink
                    >
                  </li>
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
                      to="/member/orders"
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
                      <img class="w-5" src="@/assets/images/icons/setting.svg" alt="管理個人資料" />
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
        <div class="flex self-stretch font-bold text-primary md:hidden">
          <button ref="hamburgerMenu" @click="toggleHamburgerMenu">
            <img class="h-10" src="@/assets/images/icons/bars.svg" alt="bars" />
          </button>

          <div
            class="transition-height absolute left-0 top-full z-10 h-0 w-full overflow-hidden duration-1000 ease-in-out"
            :class="{ 'h-auto': isHamburgerMenuVisible }"
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
                  <div class="w-100 relative">
                    <input
                      ref="searchInputMobile"
                      v-model="k"
                      type="text"
                      class="w-full px-4 py-2 transition-all duration-1000 ease-out"
                      :class="{ hidden: !isSearchInputVisible, 'w-0': !isSearchInputVisible }"
                      placeholder="搜尋"
                      @blur="toggleSearchInput"
                      @keyup.enter="handleSearch($event.target.value)"
                    />
                    <button
                      :class="{ hidden: isSearchInputVisible }"
                      class="block w-full rounded-lg py-3 hover:bg-light-emphasis"
                      @click="toggleSearchInput"
                    >
                      <img
                        class="mr-1 inline-block h-8"
                        src="@/assets/images/icons/search.svg"
                        alt="search icon"
                      />
                      <span>搜尋</span>
                    </button>
                  </div>
                </li>

                <li v-if="!isSigned" class="flex justify-center gap-6">
                  <button class="btn btn-primary" @click="signIn">登入</button>
                  <button class="btn btn-primary-outline" @click="signUp">註冊</button>
                </li>

                <template v-else>
                  <div class="my-5 border-t border-primary"></div>
                  <li class="mb-3 mt-6">
                    <NuxtLink to="/member" class="flex items-center justify-center">
                      <img
                        class="mr-2 h-12 rounded-full"
                        :src="userInfo?.user_cover || avatar"
                        alt="avatar"
                      />
                      <span class="text-base font-bold text-primary">{{
                        userInfo?.user_name || '倍兔兔'
                      }}</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/member"
                      class="flex items-center justify-center gap-2 rounded-lg py-3 hover:bg-light-emphasis"
                    >
                      <img class="w-5" src="@/assets/images/icons/user-fill.svg" alt="會員中心" />
                      <span class="text-lg">會員中心</span></NuxtLink
                    >
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
                      to="/member/orders"
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
                        src="@/assets/images/icons/setting-fill.svg"
                        alt="管理個人資料"
                      />
                      <span class="text-lg">管理個人資料</span></NuxtLink
                    >
                  </li>
                  <li class="mt-3">
                    <button class="btn btn-primary-outline" @click="authStore.handleSignOut()">
                      登出
                    </button>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </nav>
</template>
