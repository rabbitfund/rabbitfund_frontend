<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <CheckoutProcess step="確認品項" />
    </div>
  </section>
  <section class="bg-light-emphasis lg:bg-transparent">
    <div class="container gap-6 lg:flex">
      <div class="mb-12 bg-light-emphasis pt-12 lg:mb-20 lg:w-2/3 lg:p-12 lg:pb-20">
        <div class="mb-20 flex flex-col gap-6 lg:flex-row">
          <div class="rounded-2 lg:w-3/8">
            <img src="~/assets/images/mock.png" alt="假圖" />
          </div>
          <div class="lg:w-5/8">
            <h2 class="mb-4 text-h4">{{ projectTitle }}</h2>
            <span class="mb-3 block lg:text-lg">{{ optionName }}</span>
            <span class="mb-6 block text-h4 font-bold lg:text-h3">$ {{ price }}</span>
            <ul class="mb-6">
              <li>
                <p class="text-grey-500">已被贊助 100 次</p>
              </li>
              <li>
                <p class="text-grey-500">預計 {{ shipDate }}出貨</p>
              </li>
            </ul>
            <div class="flex items-center gap-2">
              <label for="productNumber" class="mb-0">輸入數量</label>
              <input v-model="quantity" type="number" class="w-1/4" />
            </div>
          </div>
        </div>
        <div>
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/gift.svg" alt="禮物" /></span>
            <h2>理念支持回饋品</h2>
          </div>
          <h3 class="mb-4 text-lg">◆ {{ optionName }}</h3>
          <ul class="mb-6">
            <li class="mb-2">
              <p v-html="content"></p>
            </li>
            <li class="mb-2">
              <p>
                ❖ 操作指引：自訂金額可於「額外贊助」欄位中輸入。電腦版於頁面右方，手機版於頁面下方。
              </p>
            </li>
            <li>
              <p>
                ❖
                提醒您若未來信停止訂閱，定期定額方案將會扣款至信用卡到期日，感謝您的支持！若您想終止贊助請來信至：rabbitfund@fundation.com
              </p>
            </li>
          </ul>
          <div class="mb-6">
            <label for="thanks-to-name">列名感謝顯示名稱</label>
            <input id="thanks-to-name" type="text" name="thanks-to-name" class="mb-2 w-1/2" />
            <p class="text-grey-400">
              非必填。請於此欄填寫您希望露出的名稱，若無填寫則會以收據抬頭列名感謝。
            </p>
          </div>
          <div>
            <label for="remark">備註</label>
            <textarea id="remark" v-model="note" name="remark" rows="4"></textarea>
          </div>
        </div>
      </div>
      <div class="mb-16 border-grey-200 lg:w-1/3 lg:pt-12">
        <div class="mb-6 rounded-lg bg-white px-8 py-10 ring-1 ring-grey-200">
          <div class="border-b pb-8">
            <div class="mb-4 flex items-center justify-between">
              <label for="extra-donation" class="mb-0 font-normal text-grey-400">額外贊助</label>
              <div class="flex w-1/2 items-center gap-4">
                <span class="text-grey-400">$</span>
                <input id="extra-donation" v-model="extra" type="number" name="extra-donation" />
              </div>
            </div>
            <ul class="flex flex-wrap gap-4">
              <!-- <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <span>最低額度</span>
              </li> -->
              <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <!-- <span>+100</span> -->
                <button @click="addExtra(100)">+100</button>
              </li>
              <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <!-- <span>+1000</span> -->
                <button @click="addExtra(1000)">+1000</button>
              </li>
              <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <!-- <span>補整數</span> -->
                <button @click="roundExtra()">補整數</button>
              </li>
            </ul>
          </div>
          <div class="pt-6">
            <div class="mb-8 flex justify-end">
              <span class="text-lg font-bold">NT$ {{ total }}</span>
            </div>
            <NuxtLink class="btn btn-primary block w-full" @click="navigateToCheckout()"
              >直接結帳</NuxtLink
            >
          </div>
        </div>
        <p class="font-sansTC font-medium leading-relaxed tracking-wider text-grey-500">
          點擊「直接結帳」即表示您已閱讀並同意<NuxtLink
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

<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { useUserStore } from '@/stores/user';
import { useOrderStore } from '@/stores/order';

const authStore = useAuthStore();
const userStore = useUserStore();
const isSigned = storeToRefs(authStore).token;
const { userInfo } = storeToRefs(userStore);
const orderStore = useOrderStore();

const route = useRoute();
const router = useRouter();
const { getProjectOption } = useApi();
const { projectId, planId } = route.params;

watch(isSigned, () => {
  if (isSigned) {
    userStore.handleGetUserData();
  }
});

const optionName = ref('');
const content = ref('');
const price = ref(0);
const projectTitle = ref('');
const shipDate = ref('');

onMounted(async () => {
  await nextTick();
  getProjectOption(projectId, planId)
    .then((res) => {
      const option = res.data.value.data;
      optionName.value = option.option_name;
      content.value = option.option_content;
      price.value = option.option_price;
      shipDate.value = getShipDate(option.option_parent.project_end_date);
      projectTitle.value = option.option_parent.project_title;

      console.log(option);
    })
    .catch((err) => {
      console.log(err);
    });
});

const getShipDate = (endDate) => {
  const date = new Date(endDate);
  const newDate = new Date(date.setMonth(date.getMonth() + 2));
  return `${newDate.getFullYear()} 年 ${newDate.getMonth() + 1} 月`;
};

const quantity = ref(1);
const extra = ref(0);
// const total = ref(0);
const note = ref('');
// const orderData = ref('');

// 監聽 price、quantity 和 extra 的變化，重新計算總金額
watch([price, quantity, extra], () => {
  calculateTotal();
});

// 計算總金額的計算屬性
const total = computed(() => {
  return price.value * quantity.value + extra.value;
});

// 額外贊助指定金額
const addExtra = (amount) => {
  extra.value += amount;
};

// 額外贊助補總金額至整數
const roundExtra = () => {
  // 取得最前面那位數的指數，並將其轉換為倍數
  const nearestMultiplier = Math.pow(10, Math.floor(Math.log10(total.value)));
  // 得到補整數後的總金額
  const roundedExtra = Math.ceil(total.value / nearestMultiplier) * nearestMultiplier;
  // 計算原始的總金額與補整數後的總金額的差額
  const difference = roundedExtra - total.value;

  // 將差額加入贊助
  addExtra(difference);
};

// 重新計算總金額
const calculateTotal = () => {
  total.value = price.value * quantity.value + extra.value;

  // console.log('calculateTotal', total.value.data);
};

const navigateToCheckout = () => {
  console.log('userInfo', userInfo);

  const orderData = {
    user_id: '645f2f381357264aa70629b3', // TODO: 抓 userInfo._id 目前嘗試都是 undefined
    project_id: projectId,
    option_id: planId,
    order_option_quantity: quantity.value,
    order_extra: extra.value,
    order_total: total.value,
    order_note: note.value
    // payment_method: 'WEBATM',
    // invoice_type: '電子載具',
    // invoice_carrier: ''
  };
  console.log('orderData', orderData);
  orderStore.setOrder(orderData);

  const url = `/sponsor/${planId}/checkout`;
  router.push(url);
};
</script>
