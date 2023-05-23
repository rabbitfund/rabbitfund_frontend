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
onMounted(async () => {
  await nextTick();
  handleGetProjects();
});

const getDaysLeft = (projectEndDate) => {
  const today = new Date();
  const endDate = new Date(projectEndDate);
  const days = Math.ceil((endDate - today) / (1000 * 3600 * 24));
  return `${days} 天`;
};
</script>
<template>
  <h2 class="mb-4">專案列表</h2>
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
      <Card
        :type="project.project_category"
        :timeLeft="getDaysLeft(project.project_end_date)"
        :title="project.project_title"
        :proposer="project.ownerInfo ? project.ownerInfo.proposer_name : 'not found'"
        :minAmount="0"
        :maxAmount="project.project_target"
        :currentAmount="5000"
        :cover="project?.cover"
        :id="project._id"
      />
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
