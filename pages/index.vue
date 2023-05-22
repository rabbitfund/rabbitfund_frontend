<script setup>
const { getProjects } = useApi();
const projects = ref([]);

onMounted(async () => {
  await nextTick();
  getProjects(1, "recent")
    .then((res) => {
      const projectList = res.data.value.data;
      projects.value = projectList; // 用 .splice(3) 會有問題
      console.log(projects.value);
    })
    .catch((err) => {
      console.log(err)
    })
})

const getDaysLeft = (projectEndDate) => {
  const today = new Date();
  const endDate = new Date(projectEndDate);
  const days = Math.ceil((endDate - today) / (1000 * 3600 * 24));
  return `${days} 天`;
}
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
          <!-- <li class="md:w-1/3">
            <Card
              class="h-full"
              type="公益"
              timeLeft="剩餘時間：2 天 3 小時 5分"
              title="《看見動物的真實處境》深度報導 x 為牠發聲"
              proposer="窩窩wouwou"
              :minAmount="0"
              :maxAmount="1171000"
              :currentAmount="971000"
            ></Card>
          </li>
          <li class="md:w-1/3">
            <Card
              class="h-full"
              type="校園"
              timeLeft="剩餘時間：2 天 3 小時 5分"
              title="初生小雞 教會孩子的生命功課｜沉浸式校園巡迴公益募資計畫"
              proposer="渴慕文創"
              :minAmount="0"
              :maxAmount="1600000"
              :currentAmount="1284500"
            ></Card>
          </li> -->
        </ul>
        <button class="btn btn-primary-outline">查看更多</button>
      </div>
    </div>
  </section>

  <div>
    <Counter></Counter>
  </div>
</template>
