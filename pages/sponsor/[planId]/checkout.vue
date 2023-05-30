<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <CheckoutProcess step="填寫訂單資料" />
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
              <input id="name" type="text" name="name" />
            </div>
            <div class="mb-6 md:w-1/2">
              <label for="cellphone">手機</label>
              <input id="cellphone" type="tel" name="cellphone" />
            </div>
          </div>
          <div class="mb-6">
            <label for="email">電子信箱</label>
            <input id="email" type="email" name="email" />
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-1/3">
              <label for="country">國家 / 地區</label>
              <input id="country" type="text" name="country" />
            </div>
            <div class="mb-6 md:w-1/3">
              <label for="city">城市 / 州 / 區</label>
              <input id="city" type="text" name="city" />
            </div>
            <div class="mb-6 md:w-1/3">
              <label for="district">鄉 / 鎮 / 市 / 區</label>
              <input id="district" type="text" name="district" />
            </div>
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-1/5">
              <label for="postcode">郵遞區號</label>
              <input id="postcode" type="number" name="postcode" />
            </div>
            <div class="mb-6 md:w-4/5">
              <label for="address">地址</label>
              <input id="address" type="text" name="address" />
            </div>
          </div>
          <p class="text-grey-500">
            當您確認參與本專案贊助方案時，您已確實暸解此專案資訊揭露與承諾之內容。若您發現有與實際情況不符之處，請透過【檢舉與回報】功能通報平台，我們會盡速確認。
          </p>
        </div>
        <!-- <div class="mb-12 border-t border-grey-200 pt-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/book.svg" alt="書" /></span>
            <h2>稅捐收據</h2>
          </div>
          <ul class="mb-6 flex flex-col gap-4">
            <li class="relative flex items-center">
              <input class="peer absolute left-5" type="radio" name="tax-receipt" id="no-receipt" />
              <label
                for="no-receipt"
                class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
              >
                <span class="mb-1.5 font-bold">不需要收據</span>
                <p class="text-grey-500">無抵稅需求，不需要寄送收據</p>
              </label>
            </li>
            <li class="relative flex items-center">
              <input
                class="peer absolute left-5"
                type="radio"
                name="tax-receipt"
                id="receipt-no-send"
              />
              <label
                for="receipt-no-send"
                class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
              >
                <span class="mb-1.5 font-bold">需要收據，但不需要寄送</span>
                <p class="text-grey-500">
                  由團隊協助在隔年五月上傳稅捐資料至國稅局，僅提供個人捐款服務
                </p>
              </label>
            </li>
            <li class="relative flex items-center">
              <input
                class="peer absolute left-5"
                type="radio"
                name="tax-receipt"
                id="paper-receipt"
              />
              <label
                for="paper-receipt"
                class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
              >
                <span class="mb-1.5 font-bold">單次寄送紙本收據</span>
                <p class="text-grey-500">每次捐款都寄送一次收據</p>
              </label>
            </li>
            <li class="relative flex items-center">
              <input
                class="peer absolute left-5"
                type="radio"
                name="tax-receipt"
                id="paper-annual"
              />
              <label
                for="paper-annual"
                class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
              >
                <span class="mb-1.5 font-bold">年度寄送紙本收據</span>
                <p class="text-grey-500">統整年度稅捐記錄，於隔年五月前統一寄送紙本收據</p>
              </label>
            </li>
            <li class="relative flex items-center">
              <input class="peer hidden" type="radio" name="tax-receipt" id="as-sponsor" />
              <label
                for="as-sponsor"
                class="flex w-full cursor-pointer flex-col rounded bg-white px-5 py-4 ring-1 ring-grey-200 peer-checked:ring-primary"
              >
                <p class="text-grey-500">與購買（贊助）人相同</p>
              </label>
            </li>
          </ul>

          <div class="mb-6">
            <label for="tax-receipt-header">稅捐收據抬頭</label>
            <input type="text" name="tax-receipt-header" id="tax-receipt-header" />
          </div>
          <div class="mb-6">
            <label for="tax-filing-receipt">報稅憑證</label>
            <input type="tel" name="tax-filing-receipt" id="tax-filing-receipt" />
          </div>
          <ol class="list-decimal ps-5 text-grey-500">
            <li class="mb-2">
              訂單成立後，您會收到由倍而兔平台所寄出的 Email 交易通知信，此信並非電子收據。
            </li>
            <li>
              收據將由專案團隊負責處理，該收據可折抵所得稅，以利您報稅使用，若有任何疑問，請聯繫專案團隊聯絡信箱。
            </li>
          </ol>
        </div> -->
        <div class="border-t border-grey-200 pt-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/credit-card.svg" alt="信用卡" /></span>
            <h2>付款方式</h2>
          </div>
          <ul class="mb-6 flex flex-col gap-4">
            <li class="relative flex items-center">
              <input
                id="credit-card"
                class="peer absolute left-5"
                type="radio"
                name="payment-method"
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
              <input id="atm" class="peer absolute left-5" type="radio" name="payment-method" />
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
            <li class="mb-4 flex justify-between">
              <span>小計</span><span>$ {{ projectPrice }}</span>
            </li>
            <li class="mb-4 flex justify-between">
              <span>額外贊助</span><span>$ {{ orderExtra }}</span>
            </li>
            <li class="flex justify-between"><span>運費</span><span>$ 0</span></li>
          </ul>
          <div class="pt-6">
            <div class="mb-8 flex justify-between">
              <span class="text-lg font-bold">總計</span
              ><span class="text-lg font-bold">$ {{ orderTotal }}</span>
            </div>
            <NuxtLink class="btn btn-primary block w-full" @click="navigateToCheckOrder()"
              >確認訂單</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useOrderStore } from '@/stores/order';

definePageMeta({
  middleware: ['auth']
});

const orderStore = useOrderStore();
const { postOrder } = useApi();
const router = useRouter();

// const route = useRoute();
// const { planId } = route.params;

const userId = orderStore.user_id;
const projectId = orderStore.project_id;
const projectPrice = orderStore.project_price;
const optionId = orderStore.option_id;
const orderOptionQuantity = orderStore.order_option_quantity;
const orderExtra = orderStore.order_extra;
const orderTotal = orderStore.order_total;
const orderNote = orderStore.order_note;

console.log(projectPrice);
const navigateToCheckOrder = async () => {
  try {
    const orderOtherData = {
      payment_method: 'WEBATM',
      invoice_type: '電子載具',
      invoice_carrier: ''
    };
    console.log('orderOtherData', orderOtherData);

    // console.log('orderData', orderData);

    const orderPayload = {
      user_id: userId,
      project_id: projectId,
      project_price: projectPrice,
      option_id: optionId,
      order_option_quantity: orderOptionQuantity,
      order_extra: orderExtra,
      order_total: orderTotal,
      order_note: orderNote,
      ...orderOtherData
    };

    console.log('orderPayload', orderPayload);
    orderStore.setOrder(orderPayload);

    // 建立訂單
    const { data } = await postOrder(orderPayload);
    console.log(data.value.data);
    console.log(data.value.data._id);

    const orderId = data.value.data._id;
    // 前往下一步驟：確認訂單資料
    const url = `/sponsor/${orderId}/check-order`;
    router.push(url);
  } catch (error) {
    console.error(error);
  }
};
</script>
