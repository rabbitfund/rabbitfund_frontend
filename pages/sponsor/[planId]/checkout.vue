<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <ProcessCheckout :step="2" />
    </div>
  </section>

  <Form :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
    <section class="bg-light-emphasis lg:bg-transparent">
      <div class="container gap-6 lg:flex">
        <div class="mb-12 bg-light-emphasis pt-12 lg:mb-0 lg:w-2/3 lg:p-12 lg:pb-20">
          <div class="mb-12">
            <h2 class="mb-6 flex items-center gap-2">
              <span><img src="~/assets/images/icons/user-fill.svg" alt="使用者" /></span>
              <span>購買（贊助）人</span>
            </h2>
            <!-- NOTE: 這邊所有 user 的資料暫時直接抓 userStore 的，未來可以優化成這邊有修改等於修改會員資料 -->
            <div class="md:flex md:gap-6 lg:flex-col lg:gap-0 xl:flex-row xl:gap-6">
              <FormInput
                class="w-full md:w-1/2 lg:w-full xl:w-1/2"
                :label="['真實姓名']"
                type="text"
                id="name"
                name="真實姓名"
                :value="userInfo.user_name"
                placeholder="請輸入姓名"
                :disabled="true"
              />
              <!-- <FormInput
              :label="['手機']"
              type="tel"
              id="cellphone"
              name="手機"
              :value="userInfo.user_phone"
              placeholder="09XX-XXX-XXX"
              :disabled="true"
              /> -->
              <FormInput
                class="w-full md:w-1/2 lg:w-full xl:w-1/2"
                :label="['電子信箱']"
                type="email"
                id="email"
                name="電子信箱"
                :value="userInfo.user_email"
                placeholder="example@rabbitfund.com"
                :disabled="true"
              />
            </div>
            <!-- <div class="md:flex md:gap-6">
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
            </div> -->
            <p class="text-grey-500">
              當您確認參與本專案贊助方案時，您已確實暸解此專案資訊揭露與承諾之內容。若您發現有與實際情況不符之處，請透過【檢舉與回報】功能通報平台，我們會盡速確認。
            </p>
          </div>
          <div class="mb-12 border-t border-grey-200 pt-12">
            <h2 class="mb-6 flex items-center gap-2">
              <span><img src="~/assets/images/icons/book.svg" alt="書" /></span>
              <span>發票類型</span>
            </h2>
            <ul class="mb-6 flex flex-col gap-4">
              <li class="relative flex items-center">
                <input
                  id="invoiceType-1"
                  v-model="invoiceType"
                  class="peer absolute left-5"
                  type="radio"
                  name="invoiceType"
                  value="紙本發票"
                />
                <label
                  for="invoiceType-1"
                  class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
                >
                  <span class="mb-1.5 font-bold">紙本發票</span>
                  <p class="text-grey-500">一般購買證明</p>
                </label>
              </li>
              <li class="relative flex items-center">
                <input
                  id="invoiceType-2"
                  v-model="invoiceType"
                  class="peer absolute left-5"
                  type="radio"
                  name="invoiceType"
                  value="電子載具"
                />
                <label
                  for="invoiceType-2"
                  class="mb-0 flex w-full cursor-pointer flex-col rounded bg-white py-4 pl-[68px] pr-5 font-normal text-current ring-1 ring-grey-200 peer-checked:ring-primary"
                >
                  <span class="mb-1.5 font-bold">電子載具</span>
                  <p class="text-grey-500">
                    可於財政部申請手機載具條碼，開立的發票會自動歸戶，請於下一欄位填寫
                  </p>
                </label>
              </li>
            </ul>

            <div v-if="invoiceType === '電子載具'">
              <FormInput
                :label="['手機載具條碼', '*']"
                type="text"
                id="invoiceCarrier"
                name="手機載具條碼"
                :value="invoiceCarrier"
                @input="invoiceCarrier = $event.target.value"
                placeholder="請輸入手機載具條碼"
              />
            </div>
            <ol class="list-decimal ps-5 text-grey-500">
              <li class="mb-2">
                訂單成立後，您會收到由倍而兔平台所寄出的 Email 交易通知信，此信並非電子收據。
              </li>
              <li>本平台不會隨意聯繫您，若有任何疑問，請聯繫專案團隊聯絡信箱。</li>
            </ol>
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
            <h2 class="mb-6 flex items-center gap-2">
              <span><img src="~/assets/images/icons/credit-card.svg" alt="信用卡" /></span>
              <span>付款方式</span>
            </h2>
            <!-- 
          <ul class="mb-6 flex flex-col gap-4">
            <li class="relative flex items-center">
              <input
                id="credit-card"
                v-model="paymentMethod"
                class="peer absolute left-5"
                type="radio"
                value="CREDIT"
                name="paymentMethod"
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
                id="atm"
                v-model="paymentMethod"
                class="peer absolute left-5"
                type="radio"
                value="WEBATM"
                name="paymentMethod"
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
           -->
            <ol class="list-decimal ps-5 text-grey-500">
              <li class="mb-2">本募資平台目前開放的支付方式為信用卡付款及線上 ATM。</li>
              <li class="mb-2">
                您將會直接導入藍新金流支付平台，請勿返回其他頁面，以免造成交易失敗。
              </li>
              <li class="mb-2">支付需於指定時間內完成付款，超過時限則會取消交易。</li>
              <li>
                信用卡授權成功後，本系統不會存留該刷卡人信用卡相關資料，只會保留刷卡成功之授權碼。
              </li>
            </ol>
          </div>
        </div>
        <div class="mb-16 border-grey-200 lg:mb-20 lg:w-1/3 lg:pt-12">
          <aside class="sticky top-6 rounded-lg bg-white px-8 py-10 ring-1 ring-grey-200">
            <div class="border-b pb-6">
              <div class="mb-6 flex items-center gap-2">
                <span><img src="~/assets/images/icons/bars.svg" alt="信用卡" class="w-8" /></span>
                <h2 class="text-h5">訂單明細</h2>
              </div>
              <h2 class="mb-4 text-h4">{{ projectTitle }}</h2>
              <span class="mb-3 block lg:text-lg">{{ optionName }}</span>
            </div>
            <ul class="border-b pb-6 pt-8">
              <li class="mb-4 flex justify-between">
                <span>小計</span>
                <span>$ {{ formattedAmount(projectPrice * orderOptionQuantity) }}</span>
              </li>
              <li class="mb-4 flex justify-between">
                <span>額外贊助</span>
                <span>$ {{ formattedAmount(orderExtra) }}</span>
              </li>
              <li class="flex justify-between">
                <span>運費</span>
                <span>$ {{ formattedAmount(0) }}</span>
              </li>
            </ul>
            <div class="pt-6">
              <div class="mb-8 flex justify-between">
                <span class="text-lg font-bold">總計</span>
                <span class="text-lg font-bold">$ {{ formattedAmount(orderTotal) }}</span>
              </div>
              <button class="btn btn-primary block w-full" type="submit" :disabled="!meta.valid">
                確認訂單
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </Form>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useOrderStore } from '@/stores/order';
import { useUserStore } from '@/stores/user';
import { defineRule } from 'vee-validate';

definePageMeta({
  middleware: ['auth']
});

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const orderStore = useOrderStore();
const { postOrder } = useApi();
const router = useRouter();

// const route = useRoute();
// const { planId } = route.params;

const paymentMethod = ref('');
const invoiceType = ref('紙本發票');
const invoiceCarrier = ref('');

const userId = orderStore.user_id;
const projectId = orderStore.project_id;
const projectTitle = orderStore.project_title;
const projectPrice = orderStore.project_price;
const optionId = orderStore.option_id;
const optionName = orderStore.option_name;
const orderOptionQuantity = orderStore.order_option_quantity;
const orderExtra = orderStore.order_extra;
const orderTotal = orderStore.order_total;
const orderNote = orderStore.order_note;

// 金額加入千分位
const formattedAmount = (price) => {
  return price.toLocaleString();
};

// console.log(projectPrice);
const navigateToCheckOrder = async () => {
  try {
    const orderOtherData = {
      payment_method: paymentMethod.value,
      invoice_type: invoiceType.value,
      invoice_carrier: invoiceCarrier.value
    };
    // console.log('orderOtherData', orderOtherData);

    // console.log('orderData', orderData);

    const orderPayload = {
      user_id: userId,
      project_id: projectId,
      project_title: projectTitle,
      project_price: projectPrice,
      option_id: optionId,
      option_name: optionName,
      order_option_quantity: orderOptionQuantity,
      order_extra: orderExtra,
      order_total: orderTotal,
      order_note: orderNote,
      ...orderOtherData
    };

    // console.log('orderPayload', orderPayload);
    orderStore.setOrder(orderPayload);

    // 建立訂單
    const { data } = await postOrder(orderPayload);
    // console.log(data.value.data);
    // console.log(data.value.data._id);

    const orderId = data.value.data._id;
    // 前往下一步驟：確認訂單資料
    const url = `/sponsor/${orderId}/check-order`;
    router.push(url);
  } catch (error) {
    console.error(error);
  }
};

defineRule('mobileBarcode', (value) => {
  const re = /^\/[0-9A-Z.+-]{7}$/;
  return re.test(value) ? true : '請輸入正確的手機載具條碼';
});

const formSchema = ref({});

watch(invoiceType, (type) => {
  if (type === '電子載具') {
    formSchema.value = {
      ...formSchema.value,
      手機載具條碼: 'required|mobileBarcode'
    };
  } else {
    delete formSchema.value['手機載具條碼'];
  }
});

const handleSubmit = (values) => {
  console.log('values:', values);
  navigateToCheckOrder();
};
</script>
