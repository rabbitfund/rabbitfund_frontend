<script setup>
const page = ref(1);
const type = ref('');
const k = ref('');

const route = useRoute();

watchEffect(() => {
  type.value = route.query.type ? route.query.type : '';
  k.value = route.query.k ? route.query.k : '';

  // 當 type 或 k 變化時，將 page 設置為 1
  page.value = 1;
});

const { data: result } = await useAsyncData(
  'projectList' + page.value + '_' + type.value,
  () =>
    $fetch(`/projects`, {
      params: {
        page: page.value,
        type: type.value,
        k: k.value
      }
    }),
  {
    watch: [page, type, k],
    transform: (_projects) => _projects.data,
    server: false
  }
);
</script>
<template>
  <div class="container mx-auto my-6 flex justify-between lg:my-12">
    <h2 class="">專案列表</h2>
    <select v-model="type" class="w-[120px]" value="">
      <option value="">全部</option>
      <option value="校園">校園</option>
      <option value="公益">公益</option>
      <option value="市集">市集</option>
    </select>
  </div>

  <section
    v-if="result?.projects.length && result.projects.length > 0"
    class="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
  >
    <div
      v-for="project in result.projects"
      :key="project._id"
      class="cursor-pointer"
      @click="navigateTo(`/project/${project._id}/info`)"
    >
      <Card :project="project" />
    </div>
  </section>
  <LayoutPagination
    :totalPage="2"
    :currentPage="page"
    :handle-page-change="
      (i) => {
        page = i;
      }
    "
  />
</template>
