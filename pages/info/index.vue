<template>
  <h1 class="mb-5 text-h3 xl:text-h2">團隊成員</h1>
  <section>
    <div class="container grid grid-cols-1 gap-x-10 gap-y-20 p-16 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="c in content"
        :key="c.name"
        class="relative flex flex-col items-center justify-center border-2 border-primary-light p-5"
      >
        <NuxtLink :to="c.link" target="_blank">
          <!-- src="@/assets/images/icons/follow-project.svg" -->
          <img
            class="absolute top-0 w-[64px] translate-y-[-50%] rounded-md"
            :src="c.image == '' ? mockImg : c.image"
            alt=""
            srcset=""
          />
          <br />
          <p class="mb-2 text-h4">{{ c.name }}</p>
          <p v-html="c.intro"></p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import mockImg from '~/assets/images/icons/follow-project.svg';

const content = reactive([
  {
    name: 'Anne',
    image: 'https://showanne.github.io/src/img/A-icon.jpg',
    intro: '「勇於嘗試，積極學習，斜槓發展」<br>目前是前端工程師，正在往全端工程師的方向前進 ^^',
    link: 'https://showanne.github.io'
  },
  {
    name: 'Blue',
    image: '',
    intro: 'Blue 的介紹',
    link: 'https://Blue.github.io'
  },
  {
    name: 'Clara',
    image: '',
    intro: 'Clara 的介紹',
    link: 'https://Clara.github.io'
  },
  {
    name: 'Esther',
    image: '',
    intro: 'Esther 的介紹',
    link: 'https://Esther.github.io'
  },
  {
    name: 'John',
    image: '',
    intro: 'John 的介紹',
    link: 'https://John.github.io'
  },
  {
    name: 'JarDar',
    image: '',
    intro: 'JarDar 的介紹',
    link: 'https://JarDar.github.io'
  }
]);
</script>
