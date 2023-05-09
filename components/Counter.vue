<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increment, decrement } = counterStore;
</script>

<template>
  <section class="flex items-center justify-center gap-4 py-6">
    Pinia Counter: {{ count }}
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary-outline" @click="decrement">Decrement</button>
  </section>
</template>
