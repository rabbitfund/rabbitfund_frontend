<script setup>
import moment from 'moment';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import icon1 from '@/assets/images/icons/follow-project.svg';
import icon2 from '@/assets/images/icons/success-project.svg';
import icon3 from '@/assets/images/icons/fail-project.svg';

const { getUserDetail, getMyOrder, getProject, getOwnerProject } = useApi();

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
              if (project.project_progress >= project.project_target) {
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
</script>
<template>
  <ClientOnly>
    <div class="mb-8 grid grid-cols-12 gap-6 lg:mb-16">
      <img
        class="col-span-12 mx-auto lg:col-span-3"
        src="@/assets/images/avatar.png"
        alt=""
        srcset=""
      />
      <div class="col-span-12 mr-auto font-bold lg:col-span-9">
        <h4 class="mb-6">
          {{ userInfo?.user_name }}
        </h4>
        <p v-if="userInfo?.user_intro" class="text-grey-500">
          {{ userInfo?.user_intro }}
        </p>
        <p v-else>
          還沒有設定自我介紹喔！ 前往
          <NuxtLink class="cursor-pointer underline hover:text-primary" to="/member/manage"
            >管理個人資料</NuxtLink
          >
          設定資料讓大家更認識你！
        </p>
      </div>
    </div>
    <div class="flex justify-center gap-x-4 border-b pb-12 lg:gap-x-20 lg:border-0 lg:pb-[64px]">
      <section v-for="(item, index) in content[currentRole]" :key="item" class="follow-status">
        <img :src="icons[index]" />
        <p>{{ item.title }}</p>
        <span>{{ item.data.length }}</span>
      </section>
    </div>
    <div v-if="isDataEmpty">
      <CardBlockRabbit :title="'去探索更多新發現！'" :btn="'瞧一瞧'" :link="'/projects'" />
    </div>
    <div v-else>
      <div class="border-y bg-white lg:-order-1 lg:basis-full">
        <nav
          class="container flex justify-around gap-4 overflow-x-auto whitespace-nowrap py-6 text-grey-600 lg:gap-10"
        >
          <Badge
            v-for="(item, index) in content[currentRole]"
            :key="item.title"
            :type="currentTab === index ? 'danger' : ''"
            :name="item.title"
            @click="currentTab = index"
          />
        </nav>

        <!-- <CardMemberProject /> -->
        <CardMemberProject
          v-for="i in content[currentRole][currentTab].data"
          :key="i._id + i"
          :project="i"
          :can-modify="false"
          :navigate-to-path="`/project/${i._id}/info`"
        />
      </div>
    </div>
  </ClientOnly>
</template>

<style scope>
.follow-status {
  @apply w-[104px] border-2 border-primary-light py-5 lg:w-[196px]   lg:pt-10;
  @apply relative flex flex-col items-center justify-center;

  p {
    @apply text-grey-400;
  }
  span {
    @apply text-xl font-bold lg:text-2xl;
  }
  img {
    @apply w-14 lg:w-[64px];
    @apply lg:absolute lg:top-0 lg:translate-y-[-50%];
  }
}

.default-tab {
  @apply rounded-full text-lg;
  @apply inline-block cursor-pointer px-4 py-2;
}

.active-tab {
  @apply rounded-full bg-primary-light text-lg font-bold text-primary;
  @apply inline-block cursor-pointer px-4  py-2;
}
</style>
