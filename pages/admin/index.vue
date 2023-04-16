<script setup>
definePageMeta({
  middleware: ['auth']
});

// const {data} = await useFetch('https://api.nuxtjs.dev/mountains');
const { data } = await useAsyncData('test', () => $fetch('https://api.nuxtjs.dev/mountains'));
</script>

<template>
  <h1>歡迎來到後台</h1>
  <p>{{ data?.[0] }}</p>
</template>
