<script setup>
const route = useRoute();
const router = useRouter();

const { orderId } = route.params;
// console.log(orderId);

const order = ref('');

order.value = {
  // MerchantOrderNo: route.query.MerchantOrderNo,
  ItemDesc: route.query.ItemDesc,
  Amt: route.query.Amt,
  PaymentType: route.query.PaymentType,
  PayTime: route.query.PayTime
};

// console.log(order.value);

// const targetURL = `/sponsor/${orderId}/transaction-result`;
// router.replace(targetURL); // 移除 query string，將網址調整為沒有參數的版本
</script>

<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <CheckoutProcess step="4" />
    </div>
  </section>
  <section class="bg-light-emphasis lg:bg-transparent">
    <div class="container gap-6 lg:flex">
      <div class="mb-12 bg-light-emphasis pt-12 lg:mb-20 lg:w-1/2 lg:p-12 lg:pb-20">
        <div class="mb-6 flex items-center gap-2">
          <span><img src="~/assets/images/icons/bars.svg" alt="信用卡" class="w-8" /></span>
          <h2 class="text-h5">訂單資料</h2>
        </div>
        <p class="mb-3 lg:text-lg">
          贊助商品：
          <span class="text-h4 font-bold">{{ order.ItemDesc }}</span>
        </p>
        <p class="mb-3 lg:text-lg">訂單金額：NT$ {{ order.Amt }}</p>
        <p class="mb-3 lg:text-lg">交易狀態：<span class="text-success">付款成功</span></p>
        <p class="mb-3 lg:text-lg">訂單編號：{{ orderId }}</p>
        <p class="mb-3 lg:text-lg">付款方式：{{ order.PaymentType }}</p>
        <p class="mb-3 lg:text-lg">付款時間：{{ order.PayTime }}</p>
      </div>
      <div class="mb-16 border-grey-200 lg:w-1/2 lg:pt-12">
        <CardBlockCarrot
          :title="'感謝您的贊助'"
          :text="'.'"
          :btn="'查看贊助紀錄'"
          :link="'/member/orders'"
        />

        <!-- <div class="mb-6 rounded-lg bg-success-emphasis px-8 py-10 ring-1 ring-grey-200">
          <img src="~/assets/images/rabbit.png" alt="rabbit" />
        </div> -->
      </div>
    </div>
  </section>
</template>
