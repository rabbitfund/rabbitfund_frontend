<script setup>
const { getOwnerProject } = useApi();

const project = ref([]);
onMounted(async () => {
  await nextTick();

  getOwnerProject()
    .then((res) => {
      console.log('getOwnerProject', res.data.value.data);
      const projectData = res.data.value.data;
      project.value = projectData;
    })
    .catch((err) => {
      console.log(err);
    });
});
// console.log(project);
</script>

<template>
  <!-- <h1>提案紀錄</h1> -->
  <div v-if="project.length > 0" class="flex flex-col gap-4">
    <CardMemberProject
      v-for="i in project"
      :key="i._id + i"
      :can-modify="true"
      :project="i"
      :navigate-to-path="`/member/proposals/${i._id}`"
    />
  </div>
  <div v-else>
    <CardBlockRabbit :title="'目前沒有提案紀錄'" :btn="'來去提案'" :link="'/proposal'" />
  </div>
</template>
