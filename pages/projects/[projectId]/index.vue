<template>
  <h1>{{ projectId }} 專案內容</h1>
</template>

<script setup>
const route = useRoute();
const { projectId } = route.params;

</script>