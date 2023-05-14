<script setup>
const contents = reactive([{}]);
function createNewContent() {
  contents.push({});
}
</script>
<template>
  <section class="flex flex-col gap-8">
    <ProposalOptionsContent v-for="(content, index) in contents" :key="index" />
  </section>
  <button class="btn btn-primary mt-6 px-4 py-2" @click="createNewContent">新增回饋項目</button>
</template>
