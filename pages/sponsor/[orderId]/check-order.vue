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
            <h2>購買（贊助）人</h2>
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-1/2">
              <label for="name">真實姓名</label>
              <input type="text" name="name" id="name" disabled />
            </div>
            <div class="mb-6 md:w-1/2">
              <label for="cellphone">手機</label>
              <input type="tel" name="cellphone" id="cellphone" disabled />
            </div>
          </div>
          <div class="mb-6">
            <label for="email">電子信箱</label>
            <input type="email" name="email" id="email" disabled />
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-1/3">
              <label for="country">國家 / 地區</label>
              <input type="text" name="country" id="country" disabled />
            </div>
            <div class="mb-6 md:w-1/3">
              <label for="city">城市 / 州 / 區</label>
              <input type="text" name="city" id="city" disabled />
            </div>
            <div class="mb-6 md:w-1/3">
              <label for="district">鄉 / 鎮 / 市 / 區</label>
              <input type="text" name="district" id="district" disabled />
            </div>
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-1/5">
              <label for="postcode">郵遞區號</label>
              <input type="number" name="postcode" id="postcode" disabled />
            </div>
            <div class="mb-6 md:w-4/5">
              <label for="address">地址</label>
              <input type="text" name="address" id="address" disabled />
            </div>
          </div>
          <p class="text-grey-500">
            當您確認參與本專案贊助方案時，您已確實暸解此專案資訊揭露與承諾之內容。若您發現有與實際情況不符之處，請透過【檢舉與回報】功能通報平台，我們會盡速確認。
          </p>
        </div>
        <div class="border-t border-grey-200 pt-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/credit-card.svg" alt="信用卡" /></span>
            <h2>付款方式</h2>
          </div>
          <ul class="mb-6 flex flex-col gap-4">
            <li class="relative flex items-center">
              <input
                class="peer absolute left-5"
                type="radio"
                name="payment-method"
                id="credit-card"
                disabled
              />
              <label
                for="credit-card"
                class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
              >
                <span class="mb-1.5 font-bold">信用卡付款</span>
                <p class="text-grey-500">接受國外卡單次交易，不提供銀聯卡交易</p>
              </label>
            </li>
            <li class="relative flex items-center">
              <input
                class="peer absolute left-5"
                type="radio"
                name="payment-method"
                id="atm"
                disabled
              />
              <label
                for="atm"
                class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
              >
                <span class="mb-1.5 font-bold">線上 ATM 轉帳（最高限制 5 萬元）</span>
                <p class="text-grey-500">需於指定時間內完成付款，超過時限則會取消交易</p>
              </label>
            </li>
          </ul>
          <ol class="list-decimal ps-5 text-grey-500">
            <li class="mb-2">本募資平台目前開放的支付方式為信用卡付款及線上 ATM。</li>
            <li class="mb-2">
              您將會直接導入藍新金流支付平台，請勿返回其他頁面，以免造成交易失敗。
            </li>
            <li class="mb-2">支付需於指定時間內完成付款，超過時限則會取消交易。</li>
            <li class="mb-2">
              信用卡授權成功後，本系統不會存留該刷卡人信用卡相關資料，只會保留刷卡成功之授權碼。
            </li>
          </ol>
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
