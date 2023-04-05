<script setup>
definePageMeta({
  middleware: ['auth'],
  layout: false
});
</script>

<template>
  <NuxtLayout name="custom-layout">
    <NuxtWelcome />
    <template #footer>
      <p>我是客製化Footer</p>
    </template>
  </NuxtLayout>
</template>
