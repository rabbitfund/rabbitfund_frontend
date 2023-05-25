<script setup>
const { getProjects } = useApi();
const { data: projects } = await getProjects(1, 'recent');

const getDaysLeft = (projectEndDate) => {
  const today = new Date();
  const endDate = new Date(projectEndDate);
  const days = Math.ceil((endDate - today) / (1000 * 3600 * 24));
  return `${days} 天`;
};
</script>

<template>
  <section class="py-8">
    <div class="flex justify-center gap-3">
      <Badge type="校園" name="校園" />
      <Badge type="公益" name="公益" />
      <Badge type="市集" name="市集" />
    </div>
  </section>

  <section class="bg-light-emphasis py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/rabbit-ears.png" alt="rabbit ears" class="mb-2 w-[54px]" />
        <h2 class="mb-8">精選專案</h2>
        <ul class="mb-12 flex flex-col gap-x-6 md:flex-row">
          <li class="md:w-1/3" v-for="project in projects">
            <NuxtLink :to="`/project/${project._id}/info`">
              <Card
                class="h-full"
                :type="project.project_category"
                :timeLeft="getDaysLeft(project.project_end_date)"
                :title="project.project_title"
                :proposer="project.ownerInfo ? project.ownerInfo.proposer_name : 'not found'"
                :minAmount="0"
                :maxAmount="project.project_target"
                :currentAmount="5000"
              ></Card>
            </NuxtLink>
          </li>
        </ul>
        <button class="btn btn-primary-outline">查看更多</button>
      </div>
    </div>
  </section>

  <div>
    <Counter></Counter>
  </div>
</template>
