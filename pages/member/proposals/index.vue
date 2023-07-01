<script setup>
const { getOwnerProject } = useApi();

const project = ref([]);

getOwnerProject()
  .then((res) => {
    console.log('getOwnerProject', res.data.value.data);
    const projectData = res.data.value.data;
    project.value = projectData;
  })
  .catch((err) => {
    console.log(err);
  });
// console.log(project);
</script>

<template>
  <div class="container">
    <h2 class="my-6 flex items-center gap-2 lg:mt-0 lg:mb-12">
      <span class="w-8"><img src="~/assets/images/icons/detail.svg" alt="note" /></span>
      <span>提案紀錄</span>
    </h2>
  </div>

  <div v-if="project.length > 0" class="bg-light-emphasis lg:bg-transparent">
    <ul class="container flex flex-col gap-6 py-12 md:flex-row md:flex-wrap lg:py-0 xl:flex-col">
      <li v-for="i in project" :key="i._id + i" class="md:w-[calc(50%-12px)] xl:w-full">
        <CardMemberProject
          :project="i"
          :can-modify="true"
          :navigate-to-path="`/member/proposals/${i._id}`"
        />
      </li>
    </ul>
  </div>
  <div v-else class="py-12 lg:py-0">
    <CardBlockRabbit :title="'目前沒有提案紀錄'" :btn="'來去提案'" :link="'/proposal'" />
  </div>
</template>
