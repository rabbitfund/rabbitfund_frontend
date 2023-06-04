<script setup>
const { getOwnerProject } = useApi();

const project = ref([]);
onMounted(async () => {
  await nextTick();

  getOwnerProject()
    .then((res) => {
      console.log(res.data.value.data);
      const projectData = res.data.value.data;
      project.value = projectData;
    })
    .catch((err) => {
      console.log(err);
    });
});
console.log(project);
</script>

<template>
  <h1>提案紀錄</h1>
  <div class="flex flex-col gap-4">
    <CardMemberProject
      v-for="i in project"
      :key="i._id + i"
      :can-modify="true"
      :title="i.project_title"
      :cover="i.project_cover"
      :project="i"
    />
  </div>
</template>
