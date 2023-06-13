<script setup>
// const currentTab = ref(0);
const currentUser = ref('proposer');
// TODO: get user role 

const content = reactive({
  proposer: [
    // {
    //   title: '追蹤紀錄',
    //   data: []
    // },
    {
      title: '贊助專案',
      data: [1]
    },
    {
      title: '發起提案',
      data: [1, 4]
    }
  ],

  supporter: [
    {
      title: '收藏',
      data: [1, 3, 4, 1, 3, 4]
    },
    {
      title: '已達標',
      data: [1]
    },
    {
      title: '未成案',
      data: [1, 1, 1, 2]
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
        <h4 class="mb-6">
          希望無限公司
          <!-- <span
            class="cursor-pointer bg-primary/20 text-[12px]"
            @click="
              currentUser === 'proposer' ? (currentUser = 'supporter') : (currentUser = 'proposer')
            "
            >切換角色</span
          > -->
        </h4>
        <h6 class="text-grey-500">
          「希望無限公司」是一家致力於推動環保和公益的社會企業，成立於 2020
          年，由一群熱心的年輕人創辦。我們的使命是透過各種創新和有趣的活動和募資專案，來提高大眾對於永續發展和社會責任的意識和參與，並支持那些為了改善環境和社會問題而努力的個人和組織。<br /><br />
          我們的活動和募資專案涵蓋了多個領域，例如：清潔能源、氣候變遷、生態保育、減塑行動、飢餓救濟、教育平等、人權保障等等。我們透過網路平台和實體活動，來吸引和連結各方的資源和力量，並提供一個公開透明和互動友善的平台，讓捐款者、受助者和執行者能夠有效地溝通和合作。<br /><br />
          我們相信，每一個人都可以成為改變世界的力量，只要有一顆願意付出和分享的心。我們歡迎您加入我們的行列，無論是作為捐款者、受助者、執行者或志工，您都可以在這裡找到一個適合您的角色和機會。讓我們一起為了一個更美好的未來而努力吧！
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
      <!-- <section class="follow-status">
        <img src="@/assets/images/icons/fail-project.svg" alt="" srcset="" />
        <p>{{ content[currentUser][2].title }}</p>
        <span>{{ content[currentUser][2].data.length }}</span>
      </section> -->
    </div>
    <div>
      <CardBlockRabbit
        :title="'去探索更多新發現！'"
        :btn="'瞧一瞧'"
        :link="'/projects'"
      />
      <!-- 
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
     -->
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
