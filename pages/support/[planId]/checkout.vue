<template>
  <h1>方案 {{ planId }} 結帳資料頁</h1>
</template>

<script setup>
const route = useRoute();
const { planId } = route.params;
</script>