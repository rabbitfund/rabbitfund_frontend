<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProjectStore } from '~/stores/project';

const projectStore = useProjectStore();
const { risks } = storeToRefs(projectStore);
</script>

<template>
  <h2 class="mb-7 text-center text-h3 lg:text-left xl:text-h2">資訊揭露與承諾</h2>
  <div v-html="risks"></div>
</template>
