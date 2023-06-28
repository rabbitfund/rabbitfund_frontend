<script setup>
import { Navigation, Pagination } from 'swiper';
import { useGlobalStateStore } from '@/stores/globalState';

// 等待swiper載入完成後，移除loading
const globalState = useGlobalStateStore();
const { addLoadingRequest, removeLoadingRequest } = globalState;
// client再執行loading
if (process.client) {
  addLoadingRequest({});
}

function onSwiperReady() {
  removeLoadingRequest();
}

const modules = [Navigation, Pagination, SwiperAutoplay];

const { getProjects } = useApi();
const banners = ref([]);
const hotProjects = ref([]);
const recentProjects = ref([]);
const longProjects = ref([]);

try {
  const { data: bannerData } = await getProjects(1, 'banner');
  banners.value = bannerData.value.data.projects;
} catch (err) {
  console.log(err);
}

try {
  const { data: hotData } = await getProjects(1, 'hot');

  hotProjects.value = [...hotData.value.data.projects].splice(0, 3);
} catch (err) {
  console.log(err);
}

try {
  const { data: recentData } = await getProjects(1, 'recent');
  recentProjects.value = [...recentData.value.data.projects].splice(0, 3);
} catch (err) {
  console.log(err);
}

try {
  const { data: longData } = await getProjects(1, 'long');
  longProjects.value = [...longData.value.data.projects].splice(0, 3);
} catch (err) {
  console.log(err);
}
</script>

<template>
  <section class="py-6 lg:py-8">
    <div class="flex justify-center gap-4">
      <NuxtLink :to="'/projects?type=校園'">
        <Badge type="校園" name="校園" />
      </NuxtLink>
      <NuxtLink :to="'/projects?type=公益'">
        <Badge type="公益" name="公益" />
      </NuxtLink>
      <NuxtLink :to="'/projects?type=市集'">
        <Badge type="市集" name="市集" />
      </NuxtLink>
    </div>
  </section>

  <section class="px-3 pb-12 md:px-0 lg:pb-20">
    <Swiper
      @afterInit="onSwiperReady"
      :modules="modules"
      :grab-cursor="true"
      :slides-per-view="1"
      :centered-slides="true"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{
        clickable: true
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :breakpoints="{
        720: {
          slidesPerView: 1.3,
          spaceBetween: 12
        },
        960: {
          slidesPerView: 1.4,
          spaceBetween: 24
        },
        1320: {
          slidesPerView: 1.56,
          spaceBetween: 40
        }
      }"
    >
      <SwiperSlide v-for="project in banners" :key="project._id">
        <NuxtLink :to="`/project/${project._id}/info`">
          <img
            :src="project.project_cover"
            class="h-full w-full rounded-lg object-cover lg:rounded-2xl"
          />
        </NuxtLink>
      </SwiperSlide>
      <button class="swiper-button-prev"></button>
      <button class="swiper-button-next"></button>
      <div class="swiper-pagination"></div>
    </Swiper>
  </section>

  <section class="bg-light-emphasis py-16 xl:py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/rabbit-ears.png" alt="rabbit ears" class="mb-2" />
        <h2 class="mb-8 text-h3 lg:mb-12 lg:text-h2">精選專案</h2>
        <ul class="mb-8 flex w-full flex-col gap-x-6 gap-y-8 lg:mb-12 lg:flex-row">
          <li v-for="project in hotProjects" :key="project._id" class="lg:w-1/3">
            <NuxtLink :to="`/project/${project._id}/info`">
              <Card :project="project"></Card>
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink :to="'/projects?tag=hot'">
          <button class="btn btn-primary-outline">查看更多</button>
        </NuxtLink>
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
          <li v-for="project in recentProjects" :key="project._id" class="lg:w-1/3">
            <NuxtLink :to="`/project/${project._id}/info`">
              <Card :project="project"></Card>
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink :to="'/projects?tag=recent'">
          <button class="btn btn-primary-outline">查看更多</button>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="bg-light py-16 xl:py-30">
    <div class="container">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/heart1.png" alt="heart" class="mb-2" />
        <h2 class="mb-8 text-h3 lg:mb-12 lg:text-h2">長期贊助</h2>
        <ul class="mb-8 flex w-full flex-col gap-x-6 gap-y-8 lg:mb-12 lg:flex-row">
          <li v-for="project in longProjects" :key="project._id" class="lg:w-1/3">
            <NuxtLink :to="`/project/${project._id}/info`">
              <Card :project="project"></Card>
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink :to="'/projects?tag=long'">
          <button class="btn btn-primary-outline">查看更多</button>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="bg-light-emphasis">
    <div
      class="flex flex-col justify-center gap-8 pb-[79.21px] pt-[48.79px] lg:flex-row lg:gap-6 lg:px-3 xl:py-[84px]"
    >
      <CardBlockRabbit
        :title="'傳達你的願景，'"
        :text="'讓你的好點子不再只是點子！'"
        :btn="'我要提案'"
        :link="'/proposal'"
      />
      <CardBlockCarrot
        class="lg:mt-20"
        :title="'每一份贊助，'"
        :text="'都將成就更多的可能！'"
        :btn="'我要贊助'"
        :link="'/projects'"
      />
    </div>
  </section>
</template>
