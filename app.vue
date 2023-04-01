<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const count = counterStore.count;
</script>

<template>
  <div>Pinia test: {{ count }}</div>
</template>
