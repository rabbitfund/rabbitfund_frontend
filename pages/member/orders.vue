<script setup>
definePageMeta({
  middleware: ['auth']
});

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
onMounted(async () => {
  await nextTick();
  getMyOrderData(page);
});

watch([page], () => {
  // console.log(page);
  getMyOrderData(page);
});
</script>
<template>
  <div v-if="order.length !== 0" class="flex flex-col gap-4">
    <CardMemberOrder v-for="i in order" :key="i._id + i" :order="i" />
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
  <div v-else>
    <CardBlockCarrot :title="'目前沒有贊助紀錄'" :btn="'來去贊助'" :link="'/projects'" />
  </div>
</template>
