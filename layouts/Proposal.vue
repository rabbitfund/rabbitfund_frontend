<script setup>
const route = useRoute();
const paths = reactive(['owner-info', 'outline', 'content', 'options']);
const step = paths.findIndex((item) => route.path.includes(item));
</script>

<template>
  <h2 class="py-7 text-center text-h3 xl:text-h2">新增提案</h2>

  <section class="border-b pb-6 lg:pb-12">
    <div class="container">
      <ProcessProposal :step="step + 1" />
    </div>
  </section>

  <section class="bg-light-emphasis lg:bg-transparent">
    <div class="container">
      <div class="mx-auto pb-12 pt-6 lg:w-8/12 lg:bg-light-emphasis lg:p-12 lg:pb-20">
        <slot />
      </div>
    </div>
  </section>
</template>
