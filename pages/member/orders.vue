<script setup>
const { getMyOrder } = useApi();

const order = ref([]);
const totalPages = ref(1);
const page = ref(1);

function getMyOrderData(page) {
  console.log(page.value);
  getMyOrder(page.value)
    .then((res) => {
      console.log('getMyOrderData', res.data.value.data);
      const orderData = res.data.value.data.data;
      order.value = orderData;
      totalPages.value = res.data.value.data.totalPages;
      page.value = res.data.value.data.pageNum;
      // console.log(orderData);
    })
    .catch((err) => {
      console.log(err);
    });
}

getMyOrderData(page);

watch([page], () => {
  // console.log(page);
  getMyOrderData(page);
});
</script>
<template>
  <div class="container">
    <h2 class="my-6 flex items-center gap-2 lg:mb-12 lg:mt-0">
      <span class="w-8"><img src="~/assets/images/icons/detail.svg" alt="note" /></span>
      <span>贊助紀錄</span>
    </h2>
  </div>

  <div v-if="order.length !== 0" class="bg-light-emphasis lg:bg-transparent">
    <ul class="container flex flex-col gap-6 py-12 md:flex-row md:flex-wrap lg:py-0 xl:flex-col mb-8">
      <li v-for="i in order" :key="i._id + i">
        <CardMemberOrder :order="i" />
      </li>
    </ul>

    <div class="text-center">
      <LayoutPagination
        :total-page="totalPages"
        :current-page="page"
        :handle-page-change="
          (i) => {
            page = i;
          }
        "
      />
    </div>
  </div>
  <div v-else class="py-12 lg:py-0">
    <CardBlockCarrot :title="'目前沒有贊助紀錄'" :btn="'來去贊助'" :link="'/projects'" />
  </div>
</template>
