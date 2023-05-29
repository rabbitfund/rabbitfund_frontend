<script setup>
const currentTab = ref(0);
const currentUser = ref('proposer');

const content = reactive({
  proposer: [
    {
      title: '募資中',
      data: [1,3,4]
    },
    {
      title: '已達標',
      data: [1]
    },
    {
      title: '未成案',
      data: [1,4]
    }
  ],

  supporter: [
    {
      title: '收藏',
      data: [1,3,4,1,3,4]
    },
    {
      title: '已達標',
      data: [1]
    },
    {
      title: '未成案',
      data: [1,1,1,2]
    }
  ]
});
</script>
<template>
  <section>
    <div class="mb-8 grid grid-cols-12 gap-6 lg:mb-16">
      <img
        class="col-span-12 mx-auto lg:col-span-3"
        src="@/assets/images/avatar.png"
        alt=""
        srcset=""
      />
      <div class="col-span-12 mx-auto font-bold lg:col-span-9">
        <h4 class="mb-6">兔兔股份有限公司
          <span class='text-[12px] cursor-pointer bg-primary/20' @click='currentUser === "proposer" ? currentUser = "supporter" : currentUser = "proposer"'>切換角色</span>
        </h4>
        <h6 class="text-grey-500">
          兔兔公司是是貝殼放大股份有限公司（Backer-Founder）於 2021 年正式啟用的回饋型群眾集資 /
          群眾募資平台，任何人都有機會在此提案號召群眾支持，累積實踐夢想所需的關鍵資金、社群認同與品牌影響力。任何人也都有可能在此贊助心中認同的集資計畫，從一己之力到集結眾力使想像成真，深刻體會到群眾集資的核心價值根於「信任」與「責任」。
        </h6>
      </div>
    </div>
    <div class="flex justify-center gap-x-4 border-b pb-12 lg:gap-x-20 lg:border-0 lg:pb-[64px]">
      <section class="follow-status">
        <img src="@/assets/images/icons/follow-project.svg" alt="" srcset="" />
        <p>{{ content[currentUser][0].title }}</p>
        <span>{{ content[currentUser][0].data.length }}</span>
      </section>
      <section class="follow-status">
        <img src="@/assets/images/icons/success-project.svg" alt="" srcset="" />
        <p>{{ content[currentUser][1]?.title }}</p>
        <span>{{ content[currentUser][1]?.data.length }}</span>
      </section>
      <section class="follow-status">
        <img src="@/assets/images/icons/fail-project.svg" alt="" srcset="" />
        <p>{{ content[currentUser][2].title }}</p>
        <span>{{ content[currentUser][2].data.length }}</span>
      </section>
    </div>
    <div>
      <ul class="flex justify-between py-8 md:justify-center md:gap-10">
        <li
          v-for="(item, index) in content[currentUser]"
          :key="item.title"
          :class="currentTab === index ? 'active-tab' : 'default-tab'"
          @click="currentTab = index"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-4" >
      <CardMemberProject 
        v-for="(item, index) in content[currentUser][currentTab].data"
          :key="index"
           />

      <p v-if='content[currentUser][currentTab].data == 0' class='text-center m-5'>
        Oops! 這裡什麼都沒有!
      </p>
    </div>
  </section>
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
