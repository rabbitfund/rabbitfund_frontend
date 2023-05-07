<template>
  <section class="bg-primary text-white">
    <div class="container flex flex-col justify-between py-9 md:flex-row">
      <div class="flex flex-row items-center justify-between md:flex-col md:justify-start">
        <img class="mb-5 inline-block h-[58px]" src="@/assets/images/logo-white.svg" alt="logo" />
        <div class="flex gap-5">
          <NuxtLink><img src="@/assets/images/icons/youtube.svg" alt="youtube" /></NuxtLink>
          <NuxtLink><img src="@/assets/images/icons/instagram.svg" alt="instagram" /></NuxtLink>
          <NuxtLink><img src="@/assets/images/icons/facebook.svg" alt="facebook" /></NuxtLink>
        </div>
      </div>
      <div class="flex items-center">
        <div class="mx-auto py-3">
          <div class="flex gap-x-6 md:gap-x-12">
            <NuxtLink to="/about">探索</NuxtLink>
            <NuxtLink to="/about">關於我們</NuxtLink>
            <NuxtLink to="/about">贊助保障方案</NuxtLink>
            <NuxtLink to="/about">使用者條款</NuxtLink>
          </div>
          <div class="flex gap-x-6 md:gap-x-12">
            <NuxtLink to="/about">提案</NuxtLink>
            <NuxtLink to="/about">常見問題</NuxtLink>
            <NuxtLink to="/about">提案服務說明</NuxtLink>
            <NuxtLink to="/about">隱私權政策</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary-dark text-center">Copyright ©2023 北二有限公司</div>
  </section>
</template>
