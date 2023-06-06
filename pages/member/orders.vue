<script setup>
// definePageMeta({
//   middleware: ['auth']
// });

const { getMyOrder } = useApi();

const order = ref([]);
const page = ref(1);

function getMyOrderData(page) {
  getMyOrder(page)
    .then((res) => {
      console.log('getMyOrderData', res.data.value.data);
      const orderData = res.data.value.data;
      order.value = orderData;
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

// TODO: 換頁取資料
watch([page], () => {
  console.log(page);
  getMyOrderData(page);
});
</script>
<template>
  <div v-if="order.length !== 0" class="flex flex-col gap-4">
    <CardMemberOrder v-for="i in order" :key="i._id + i" :order="i" />
    <LayoutPagination
      :total-page="2"
      :current-page="page"
      :handle-page-change="
        (i) => {
          page = i;
        }
      "
    />
  </div>
  <div v-else>
    <h3>目前沒有贊助紀錄</h3>
  </div>
</template>
