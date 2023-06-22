<script setup>
// import { useAuthStore } from '@/stores/auth';

// const authStore = useAuthStore();
</script>

<template>
  <section class="flex h-full min-h-screen flex-col">
    <LayoutNavbar />
    <slot />
    <LayoutFooter />
  </section>
</template>
