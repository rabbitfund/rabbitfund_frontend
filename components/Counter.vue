<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increment, decrement } = counterStore;
</script>

<template>
  <section>
    Pinia Counter: {{ count }}
    <button
      class="mr-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      @click="increment"
    >
      Increment
    </button>
    <button
      class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      @click="decrement"
    >
      Decrement
    </button>
  </section>
</template>
