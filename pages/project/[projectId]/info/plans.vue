<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProjectStore } from '~/stores/project';

const projectStore = useProjectStore();
const { option } = storeToRefs(projectStore);
console.log(option);
</script>

<template>
  <h2 class="mb-7 text-center text-h3 lg:text-left xl:text-h2">回饋方案</h2>
  <div v-for="item in option">
    {{ item.option_name }}
    {{ item.option_price }}
    <!-- {{ item.option_content }} -->
    <div v-html="item.option_content"></div>
  </div>
</template>
