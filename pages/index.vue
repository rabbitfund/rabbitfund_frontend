<script setup>
import { Navigation, Pagination } from 'swiper';
const modules = [Navigation, Pagination];

const { getProjects } = useApi();
const hotProjects = ref([]);
const recentProjects = ref([]);
const longProjects = ref([]);

onMounted(async () => {
  await nextTick();
  getProjects(1, 'hot')
    .then((res) => {
      const projectList = res.data.value.data;
      hotProjects.value = projectList.splice(0, 3);
    })
    .catch((err) => {
      console.log(err);
    });
  getProjects(1, 'recent')
    .then((res) => {
      const projectList = res.data.value.data;
      recentProjects.value = projectList.splice(0, 3);
    })
    .catch((err) => {
      console.log(err);
    });
  getProjects(1, 'long')
    .then((res) => {
      const projectList = res.data.value.data;
      longProjects.value = projectList.splice(0, 3);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <section class="py-6 lg:py-8">
    <div class="flex justify-center gap-4">
      <Badge type="校園" name="校園" />
      <Badge type="公益" name="公益" />
      <Badge type="市集" name="市集" />
    </div>
  </section>

  <section class="px-3 pb-12 lg:px-0 lg:pb-20">
    <Swiper
      :modules="modules"
      :grab-cursor="true"
      :slides-per-view="1"
      :centered-slides="true"
      :loop="true"
      :navigation="true"
      :pagination="{
        clickable: true
      }"
      :breakpoints="{
        '960': {
          slidesPerView: 1.25,
          spaceBetween: 24
        },
        '1320': {
          slidesPerView: 1.56,
          spaceBetween: 40
        }
      }"
    >
      <SwiperSlide v-for="project in recentProjects" :key="project._id">
        <img
          :src="project.project_cover"
          class="mx-auto h-full rounded-lg object-cover lg:rounded-2xl"
        />
      </SwiperSlide>
    </Swiper>
  </section>

  <section class="bg-light-emphasis py-16 xl:py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/rabbit-ears.png" alt="rabbit ears" class="mb-2" />
        <h2 class="mb-8 text-h3 lg:mb-12 lg:text-h2">精選專案</h2>
        <ul class="mb-8 flex w-full flex-col gap-x-6 gap-y-8 lg:mb-12 lg:flex-row">
          <li class="hover:shadow lg:w-1/3" v-for="project in hotProjects">
            <NuxtLink :to="`/project/${project._id}/info`">
              <Card :project="project"></Card>
            </NuxtLink>
          </li>
        </ul>
        <button class="btn btn-primary-outline">查看更多</button>
      </div>
    </div>
  </section>

  <section class="bg-light py-16 xl:py-40">
    <div class="container">
      <h2 class="mb-4 text-center text-h3 lg:mb-6 lg:text-h2">給予贊助者的信任承諾</h2>
      <p class="mb-10 text-center leading-[1.8] text-grey-500 lg:mb-20">
        所有專案皆經由平台把關，致力給贊助會員們最安心的保障！
      </p>
      <ul class="flex flex-col justify-around gap-12 text-h4 text-primary-dark md:flex-row">
        <li class="text-center">
          <img
            src="~/assets/images/certification.png"
            alt="platform certification"
            class="mx-auto mb-4 w-[120px] lg:mb-7 xl:w-[200px]"
          />
          <span class="text-h4 text-primary-dark lg:text-h3">平台認證</span>
        </li>
        <li class="text-center">
          <img
            src="~/assets/images/credibility.png"
            alt="credibility assessment"
            class="mx-auto mb-4 w-[120px] lg:mb-7 xl:w-[200px]"
          />
          <span class="text-h4 text-primary-dark lg:text-h3">公信力檢測</span>
        </li>
        <li class="text-center">
          <img
            src="~/assets/images/timeline.png"
            alt="project timeline marking"
            class="mx-auto mb-4 w-[120px] lg:mb-7 xl:w-[200px]"
          />
          <span class="text-h4 text-primary-dark lg:text-h3">專案時程標示</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="bg-light-emphasis py-16 xl:py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/sparkle.png" alt="sparkle" class="mb-2" />
        <h2 class="mb-8 text-h3 lg:mb-12 lg:text-h2">募資進行中</h2>
        <ul class="mb-8 flex w-full flex-col gap-x-6 gap-y-8 lg:mb-12 lg:flex-row">
          <li class="hover:shadow lg:w-1/3" v-for="project in recentProjects">
            <NuxtLink :to="`/project/${project._id}/info`">
              <Card :project="project"></Card>
            </NuxtLink>
          </li>
        </ul>
        <button class="btn btn-primary-outline">查看更多</button>
      </div>
    </div>
  </section>

  <section class="bg-light py-16 xl:py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/heart1.png" alt="heart" class="mb-2" />
        <h2 class="mb-8 text-h3 lg:mb-12 lg:text-h2">長期贊助</h2>
        <ul class="mb-8 flex w-full flex-col gap-x-6 gap-y-8 lg:mb-12 lg:flex-row">
          <li class="hover:shadow lg:w-1/3" v-for="project in longProjects">
            <NuxtLink :to="`/project/${project._id}/info`">
              <Card :project="project"></Card>
            </NuxtLink>
          </li>
        </ul>
        <button class="btn btn-primary-outline">查看更多</button>
      </div>
    </div>
  </section>

  <section class="bg-light-emphasis">
    <div
      class="flex flex-col justify-center gap-8 pb-[79.21px] pt-[48.79px] lg:flex-row lg:gap-6 lg:px-3 xl:py-[84px]"
    >
      <div
        class="flex flex-col items-center bg-[url('/assets/images/proposal-bg.png')] bg-cover bg-center bg-no-repeat pb-[58.94px] pt-[70.14px] sm:bg-contain lg:flex-row lg:justify-center lg:self-start lg:px-10 lg:pb-20 lg:pt-40 xl:pb-[86px] xl:pl-[88px] xl:pr-[80px] xl:pt-[200px]"
      >
        <img
          src="~/assets/images/rabbit.png"
          alt="rabbit"
          class="mb-6 h-[128px] w-20 md:h-auto lg:mb-0 lg:mr-12 xl:w-[131.7px]"
        />
        <div class="text-center lg:text-left">
          <p class="mb-6 text-xl font-bold text-warning xl:text-2xl">
            <span class="block">傳達你的願景，</span>
            <span>讓你的好點子不再只是點子！</span>
          </p>
          <button class="btn btn-primary">我要提案</button>
        </div>
      </div>
      <div
        class="lg:pb-22 flex flex-col items-center bg-[url('/assets/images/sponsor-bg.png')] bg-cover bg-center bg-no-repeat pb-[71px] pt-[98px] sm:bg-contain lg:mt-20 lg:flex-row lg:justify-center lg:self-end lg:px-10 lg:pb-20 lg:pt-40 xl:pb-[140px] xl:pl-[82px] xl:pr-[98px] xl:pt-[229px]"
      >
        <img
          src="~/assets/images/carrot.png"
          alt="carrot"
          class="mb-3 w-[140px] lg:mb-0 lg:mr-6 xl:mr-[50.76px] xl:w-[169.24px]"
        />
        <div class="text-center lg:text-left">
          <p class="mb-6 text-xl font-bold text-primary xl:text-2xl">
            <span class="block">每一份贊助，</span>
            <span>都將成就更多的可能！</span>
          </p>
          <button class="btn btn-primary">我要贊助</button>
        </div>
      </div>
    </div>
  </section>
</template>
