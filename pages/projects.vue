<script setup>
const page = ref(1);
const tag = ref('long');
const projects = ref([]);

const handleGetProjects = async () => {
  // 監聽變數重新發送請求
  const { data } = await useAsyncData(
    'projectList',
    () =>
      $fetch(`/projects`, {
        params: {
          page: page.value,
          tag: tag.value
        }
      }),
    {
      watch: [page, tag]
    }
  );

  if (data.value?.ok) {
    projects.value = data.value.data;
    console.log(projects);
  }
};
onMounted(() => {
  handleGetProjects();
});
</script>
<template>
  <h2>專案列表</h2>
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
      <Card :project="project" :id="project._id" />
    </div>
    <LayoutPagination
      :totalPage="2"
      :currentPage="page"
      :handle-page-change="
        (i) => {
          page = i;
        }
      "
    />
  </section>
</template>
