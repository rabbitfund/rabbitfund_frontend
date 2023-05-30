<script setup>
definePageMeta({
  middleware: ['auth']
});
const orderData = ref([]);

const handleGetMyOrders = async () => {
  // 監聽變數重新發送請求
  const { data } = await useAsyncData(
    'myOrders',
    () =>
      $fetch(`/me/orders`, {
        params: {
          page: page.value
        }
      }),
    {
      watch: [page]
    }
  );
  if (data.ok) {
    orderData.value = data.data;
  }
};

const page = ref(1);

handleGetMyOrders();
</script>
<template>
  <div v-if="orderData.length !== 0" class="flex flex-col gap-4">
    <CardMemberProject
      v-for="i in orderData"
      :key="orderData._id + i"
      :can-modify="false"
      :title="orderData.project_title"
      :cover="orderData.project_cover"
      :project="orderData"
    />
    <LayoutPagination
      :totalPage="2"
      :currentPage="page"
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
