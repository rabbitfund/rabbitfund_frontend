<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <CardBlockRabbit :title="'發生了一點錯誤'" :btn="'回到首頁'" :link="'/'" />
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
});

onMounted(() => {
  console.error('[捕獲錯誤]', props.error.message);
});
</script>
