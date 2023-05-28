<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProjectStore } from '~/stores/project';

const projectStore = useProjectStore();
const { content } = storeToRefs(projectStore);
</script>

<template>
  <h2 class="mb-7 text-center text-h3 lg:text-left xl:text-h2">專案介紹</h2>
  <!-- {{ content }} -->
  <div v-html="content"></div>
</template>
