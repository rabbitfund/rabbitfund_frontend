<template>
  <h1>歡迎來到後台</h1>
  <p>{{ data?.[0] }}</p>
</template>
<script setup>
const { data } = await useAsyncData('test', () => $fetch('https://api.nuxtjs.dev/mountains'));
</script>
