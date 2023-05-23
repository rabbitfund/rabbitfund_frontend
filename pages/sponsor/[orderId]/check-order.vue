<script setup>
const route = useRoute();
const { orderId } = route.params;
</script>

<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <CheckoutProcess step="確認訂單資料" />
    </div>
  </section>
  <section class="bg-light-emphasis lg:bg-transparent">
    <div class="container gap-6 lg:flex">
      <div class="mb-12 bg-light-emphasis pt-12 lg:mb-20 lg:w-2/3 lg:p-12 lg:pb-20">
        <div class="mb-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/user-fill.svg" alt="使用者" /></span>
            <h2>確認訂單資料</h2>
          </div>
          <div class="mb-6">
            <label for="name">訂單編號</label>
            <input id="name" type="text" name="MerchantOrderNo" disabled />
            <!-- :value="order.order_id" -->
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-1/2">
              <label for="name">真實姓名</label>
              <input id="name" type="text" name="name" disabled />
              <!--  :value="order.user_name" -->
            </div>
            <div class="mb-6 md:w-1/2">
              <label for="email">電子信箱</label>
              <input id="email" type="email" name="Email" disabled />
              <!-- :value="order.user_email" -->
            </div>
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-4/5">
              <label for="itemDesc">訂單商品</label>
              <input id="itemDesc" type="text" name="itemDesc" disabled />
              <!-- :value="order.itemDesc"  -->
            </div>
            <div class="mb-6 md:w-1/5">
              <label for="amt">訂單金額</label>
              <input id="amt" type="text" name="Amt" disabled />
              <!-- :value="order.amt"  -->
            </div>
          </div>
          <div class="mb-6">
            <input type="hidden" name="MerchantID" disabled />
            <!-- value="MS148719690" -->
          </div>
          <div class="mb-6">
            <input type="hidden" name="Version" disabled />
            <!-- value="1.5" -->
          </div>
          <div class="mb-6">
            <input type="hidden" name="TimeStamp" disabled />
            <!-- :value="order.timeStamp"-->
          </div>
          <div class="mb-6">
            <input type="hidden" name="TradeInfo" disabled />
            <!-- :value="order.newebpay_aes_encrypt"-->
          </div>
          <div class="mb-6">
            <input type="hidden" name="TradeSha" disabled />
            <!-- :value="order.newebpay_sha_encrypt"-->
          </div>
          <p class="text-grey-500">
            當您確認參與本專案贊助方案時，您已確實暸解此專案資訊揭露與承諾之內容。若您發現有與實際情況不符之處，請透過【檢舉與回報】功能通報平台，我們會盡速確認。
          </p>
        </div>
      </div>
      <div class="mb-16 border-grey-200 lg:w-1/3 lg:pt-12">
        <div class="mb-6 rounded-lg bg-white px-8 py-10 ring-1 ring-grey-200">
          <div class="border-b pb-6">
            <div class="mb-6 flex items-center gap-2">
              <span><img src="~/assets/images/icons/bars.svg" alt="信用卡" class="w-8" /></span>
              <h2 class="text-h5">訂單明細</h2>
            </div>
            <h2 class="mb-4 text-h4">愛奇兒家庭社區共融中心集資計畫</h2>
            <span class="mb-3 block lg:text-lg">單次捐款｜理念支持</span>
          </div>
          <ul class="border-b pb-6 pt-8">
            <li class="mb-4 flex justify-between"><span>小計</span><span>$ 300</span></li>
            <li class="mb-4 flex justify-between"><span>額外贊助</span><span>$ 300</span></li>
            <li class="flex justify-between"><span>運費</span><span>$ 0</span></li>
          </ul>
          <div class="pt-6">
            <div class="mb-8 flex justify-between">
              <span class="text-lg font-bold">總計</span
              ><span class="text-lg font-bold">$ 600</span>
            </div>
            <NuxtLink
              :to="`/sponsor/${orderId}/transaction-result`"
              class="btn btn-primary block w-full"
              >立即付款</NuxtLink
            >
          </div>
        </div>
        <p class="font-sansTC font-medium leading-relaxed tracking-wider text-grey-500">
          點擊「立即付款」即表示您已閱讀並同意<NuxtLink
            to="/terms"
            class="cursor-pointer text-blue-600 visited:text-purple-600"
            target="_blank"
            >使用者條款</NuxtLink
          >與<NuxtLink
            to="/privacy"
            class="cursor-pointer text-blue-600 visited:text-purple-600"
            target="blank"
            >隱私權政策</NuxtLink
          >。
        </p>
      </div>
    </div>
  </section>
</template>
