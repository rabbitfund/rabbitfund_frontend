<script setup>
import moment from 'moment';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import icon1 from '@/assets/images/icons/follow-project.svg';
import icon2 from '@/assets/images/icons/success-project.svg';
import icon3 from '@/assets/images/icons/fail-project.svg';

const { getUserDetail, getMyOrder, getProject, getOwnerProject } = useApi();

const borderColors = ['border-primary-light', 'border-secondary-emphasis', 'border-grey-100'];
const icons = [icon1, icon2, icon3];
// TODO: get user role
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

// 進入會員中心重新拿一次資料
const { data } = await getUserDetail();
userStore.handleGetUserData(data);

const currentRole = computed(() =>
  userInfo.value?.user_roles?.includes?.(2) ? 'proposer' : 'supporter'
);

const isDataEmpty = computed(() =>
  content[currentRole.value].every((item) => item.data.length === 0)
);

const currentTab = ref(0);

const content = reactive({
  proposer: [
    {
      title: '所有提案',
      data: []
    },
    {
      title: '已達標',
      data: []
    },
    {
      title: '未成案',
      data: []
    }
  ],

  supporter: [
    {
      title: '已贊助',
      data: []
    },
    {
      title: '已達標',
      data: []
    },
    {
      title: '未成案',
      data: []
    }
  ]
});

dealWithData();
async function dealWithData() {
  try {
    if (currentRole.value === 'proposer') {
      const { data } = await getOwnerProject();
      const projectData = data.value.data;
      projectData.forEach((eachProject) => {
        content.proposer[0].data.push(eachProject);

        const end = moment(eachProject.project_end_date);
        const now = moment();

        if (end.isBefore(now)) {
          if (project.project_progress >= project.project_target) {
            content.proposer[1].data.push(eachProject);
          } else {
            content.proposer[2].data.push(eachProject);
          }
        }
      });
    }

    if (currentRole.value === 'supporter') {
      const { data } = await getMyOrder(1);
      const totalPage = data.value.data.totalPages;
      const orderData = [...data.value.data.data];
      for (let i = 2; i <= totalPage; i++) {
        const { data } = await getMyOrder(i);
        orderData.push(...data.value.data.data);
      }
      const processedIDs = new Set();
      const projectPromises = orderData
        .filter((item) => {
          if (!processedIDs.has(item.project._id)) {
            processedIDs.add(item.project._id);
            return true;
          }
          return false;
        })
        .map((item) => getProject(item.project._id));

      console.log('projectPromises', projectPromises);
      Promise.all(projectPromises)
        .then((res) => {
          res.forEach((eachRes) => {
            const eachProject = JSON.parse(JSON.stringify(eachRes.data.value.data));
            content.supporter[0].data.push(eachProject);

            const end = moment(eachProject.project_end_date);
            const now = moment();

            if (end.isBefore(now)) {
              if (eachProject.project_progress >= eachProject.project_target) {
                content.supporter[1].data.push(eachProject);
              } else {
                content.supporter[2].data.push(eachProject);
              }
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  } catch (e) {
    console.error(e);
  }
}

// const avatar = userInfo?.user_cover ? userInfo?.user_cover : '@/assets/images/avatar.png'

</script>
<template>
  <ClientOnly>
    <div class="container grid grid-cols-12 gap-x-6 sm:mb-10 lg:mb-20 lg:items-center">
      <img v-if="userInfo?.user_cover"
        class="col-span-12 mx-auto w-36 h-36 object-cover rounded-full border-4 border-primary lg:col-span-3"
        :src="userInfo?.user_cover"
        alt="user icon"
      />
      <img v-else
        class="col-span-12 mx-auto w-36 h-36 object-cover rounded-full border-4 border-primary lg:col-span-3"
        src="@/assets/images/avatar.png"
        alt="user icon"
      />
      <div class="col-span-12 mx-auto py-6 lg:col-span-9 lg:py-4">
        <h2 class="mb-6 text-center text-h4 lg:text-left">
          {{ userInfo?.user_name }}
        </h2>
        <p v-if="userInfo?.user_intro" class="text-grey-500">
          {{ userInfo?.user_intro }}
        </p>
        <p v-else class="text-grey-500">
          還沒有設定自我介紹喔！前往
          <NuxtLink class="link link-primary" to="/member/manage">管理個人資料</NuxtLink>
          設定資料讓大家更認識你！
        </p>
      </div>
    </div>

    <ul class="container mb-12 flex justify-center gap-x-4 md:gap-x-20 lg:mb-16">
      <li
        v-for="(item, index) in content[currentRole]"
        :key="item"
        class="flex flex-1 flex-col items-center rounded-lg border-2 px-4 py-5 sm:relative sm:pt-10 lg:border-4 lg:px-12 lg:pb-5 xl:flex-none xl:px-16"
        :class="borderColors[index]"
      >
        <img :src="icons[index]" class="mb-6 sm:absolute sm:top-0 sm:mb-0 sm:translate-y-[-50%]" />
        <span class="mb-1 block text-grey-400">{{ item.title }}</span>
        <span class="text-h4">{{ item.data.length }}</span>
      </li>
    </ul>

    <div v-if="isDataEmpty">
      <CardBlockRabbit :title="'去探索更多新發現！'" :btn="'瞧一瞧'" :link="'/projects'" />
    </div>

    <div v-else>
      <nav class="border-y border-grey-200 lg:border-none">
        <ul
          class="container flex justify-between whitespace-nowrap py-6 lg:justify-center lg:gap-6"
        >
          <li v-for="(item, index) in content[currentRole]" :key="item.title">
            <button
              class="rounded-full px-4 py-2 text-lg hover:bg-primary hover:font-bold hover:text-white"
              :class="{ 'bg-primary-light font-bold text-primary': currentTab === index }"
              @click="currentTab = index"
            >
              {{ item.title }}
            </button>
          </li>
        </ul>
      </nav>
      <div class="bg-light-emphasis lg:bg-transparent">
        <ul
          class="container flex flex-col gap-6 py-12 md:flex-row md:flex-wrap lg:py-0 xl:flex-col"
        >
          <li
            v-for="i in content[currentRole][currentTab].data"
            :key="i._id + i"
            class="md:w-[calc(50%-12px)] xl:w-full"
          >
            <CardMemberProject
              :project="i"
              :can-modify="false"
              :navigate-to-path="`/project/${i._id}/info`"
            />
          </li>
        </ul>
      </div>
    </div>
  </ClientOnly>
</template>
