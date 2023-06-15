<template>
  <h1 class="mb-5 text-h3 xl:text-h2">團隊成員</h1>
  <section>
    <div class="flex justify-center gap-x-4 border-b pb-12 lg:gap-x-20 lg:border-0 lg:pb-[64px]">
      <div
        v-for="c in content"
        :key="c.name"
        class="relative flex flex-col items-center justify-center border-2 border-primary-light py-5"
      >
        <img
          class="absolute top-0 translate-y-[-50%]"
          src="@/assets/images/icons/follow-project.svg"
          alt=""
          srcset=""
        />
        <p>{{ c.name }}</p>
        <span>{{ c.link }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const content = reactive([
  {
    name: 'Anne',
    link: 'showanne.github.io'
  },
  {
    name: 'Anne',
    link: 'showanne.github.io'
  }
]);
</script>
