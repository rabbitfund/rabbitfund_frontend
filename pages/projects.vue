<script setup>
const page = ref(1);
const tag = ref('');
const k = ref('');

const route = useRoute();

watchEffect(() => {
  tag.value = route.query.tag ? route.query.tag : '';
  k.value = route.query.k ? route.query.k : '';

  // 當 tag 或 k 變化時，將 page 設置為 1
  page.value = 1;
});

const { data: projects } = await useAsyncData(
  'projectList' + page.value + '_' + tag.value,
  () =>
    $fetch(`/projects`, {
      params: {
        page: page.value,
        tag: tag.value,
        k: k.value
      }
    }),
  {
    watch: [page, tag, k],
    transform: (_projects) => _projects.data,
    server: false
  }
);
</script>
<template>
  <div class="container mx-auto my-6 flex justify-between lg:my-12">
    <h2 class="">專案列表</h2>
    <select v-model="tag" class="w-[120px]" value="">
      <option value="">全部</option>
      <option value="recent">近期</option>
      <option value="hot">熱門</option>
      <option value="long">長期募資</option>
    </select>
  </div>

  <section
    v-if="projects?.length && projects.length > 0"
    class="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
  >
    <div
      v-for="project in projects"
      :key="project._id"
      class="cursor-pointer hover:bg-light"
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
