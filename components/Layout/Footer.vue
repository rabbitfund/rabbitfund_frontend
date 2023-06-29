<template>
  <footer class="mt-auto bg-primary text-white lg:text-lg">
    <nav class="container flex flex-col justify-between py-10 md:flex-row md:items-center">
      <div
        class="mb-6 flex flex-row items-center justify-between md:mb-0 md:flex-col md:gap-2 lg:gap-4"
      >
        <NuxtImg
          class="inline-block h-[58px] self-start"
          src="images/logo-white.svg"
          alt="logo"
          loading="lazy"
        />
        <div class="flex gap-4">
          <NuxtLink class="link"
            ><NuxtImg src="images/icons/youtube.svg" alt="youtube" loading="lazy"
          /></NuxtLink>
          <NuxtLink class="link"
            ><NuxtImg src="images/icons/instagram.svg" alt="instagram" loading="lazy"
          /></NuxtLink>
          <NuxtLink class="link"
            ><NuxtImg src="images/icons/facebook.svg" alt="facebook" loading="lazy"
          /></NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-center gap-4">
        <div class="flex gap-x-6 md:gap-x-12">
          <NuxtLink to="/projects" class="link">探索</NuxtLink>
          <NuxtLink to="/info/about" class="link">關於我們</NuxtLink>
          <NuxtLink to="/info/regulations" class="link">贊助保障方案</NuxtLink>
          <NuxtLink to="/info/terms" class="link">使用者條款</NuxtLink>
        </div>
        <div class="flex gap-x-6 md:gap-x-12">
          <NuxtLink to="/proposal" class="link">提案</NuxtLink>
          <NuxtLink to="/info/faq-sponsor" class="link">常見問題</NuxtLink>
          <NuxtLink to="/info/proposal" class="link">提案服務說明</NuxtLink>
          <NuxtLink to="/info/privacy" class="link">隱私權政策</NuxtLink>
        </div>
      </div>
    </nav>

    <p class="bg-primary-dark py-6 text-center text-sm lg:text-lg">Copyright ©2023 北二有限公司</p>
  </footer>
</template>
