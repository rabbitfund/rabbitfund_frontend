<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <CheckoutProcess step="交易結果" />
    </div>
  </section>
  <section class="bg-light-emphasis lg:bg-transparent">
    <div class="container gap-6 lg:flex">
      <div class="mb-12 bg-light-emphasis pt-12 lg:mb-20 lg:w-2/3 lg:p-12 lg:pb-20">
        <div class="mb-6 flex items-center gap-2">
          <span><img src="~/assets/images/icons/bars.svg" alt="信用卡" class="w-8" /></span>
          <h2 class="text-h5">訂單資料</h2>
        </div>
        <p class="mb-3 lg:text-lg">
          贊助專案：
          <span class="text-h4 font-bold">愛奇兒家庭社區共融中心集資計畫</span>
        </p>
        <p class="mb-3 lg:text-lg">訂單金額：NT$ 600</p>
        <p class="lg:text-lg">交易狀態：<span class="text-success">付款成功</span></p>
      </div>
      <div class="mb-16 border-grey-200 lg:w-1/3 lg:pt-12">
        <div class="mb-6 rounded-lg bg-success-emphasis px-8 py-10 ring-1 ring-grey-200">
          <img src="~/assets/images/rabbit.png" alt="rabbit" />
        </div>
      </div>
    </div>
  </section>
</template>
