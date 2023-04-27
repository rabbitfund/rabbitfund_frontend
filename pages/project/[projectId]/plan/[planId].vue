<template>
  <h1>{{ planId }} 方案說明</h1>
</template>

<script setup>
const route = useRoute();
const { planId } = route.params;
</script>