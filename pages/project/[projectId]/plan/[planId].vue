<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <ProcessCheckout />
    </div>
  </section>

  <Form :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
    <section class="bg-light-emphasis lg:bg-transparent">
      <div class="container gap-6 lg:flex">
        <div class="mb-12 bg-light-emphasis pt-12 lg:mb-0 lg:w-2/3 lg:p-12 lg:pb-20">
          <div class="mb-20 flex flex-col gap-6 lg:flex-row">
            <div class="rounded-2 lg:w-3/8">
              <img :src="coverUrl" :alt="projectTitle" />
            </div>
            <div class="lg:w-5/8">
              <NuxtLink :to="`/project/${projectId}/info`">
                <h2 class="mb-4 text-h4">{{ projectTitle }}</h2>
              </NuxtLink>
              <span class="mb-3 block lg:text-lg">{{ optionName }}</span>
              <span class="mb-6 block text-h4 font-bold lg:text-h3">
                $ {{ formattedAmount(price) }}
              </span>
              <ul class="mb-6">
                <li>
                  <p class="text-grey-500">已被贊助 {{ generateRandomNumberById(planId) }} 次</p>
                </li>
                <li>
                  <p class="text-grey-500">預計 {{ shipDate }}出貨</p>
                </li>
              </ul>
              <FormInput
                class="w-1/2"
                :label="['贊助數量', '*']"
                type="number"
                id="quantity"
                name="贊助數量"
                :value="quantity"
                @keydown="handleKeyDown"
                @input="updateQuantity($event.target.value)"
              />
            </div>
          </div>
          <div>
            <h2 class="mb-6 flex items-center gap-2">
              <span><img src="~/assets/images/icons/gift.svg" alt="禮物" /></span>
              <span>理念支持回饋品</span>
            </h2>
            <h3 class="mb-4 text-lg">◆ {{ optionName }}</h3>
            <ul class="mb-6">
              <li class="mb-2">
                <p v-html="content"></p>
              </li>
              <li class="mb-2">
                <p>
                  ❖
                  操作指引：自訂金額可於「額外贊助」欄位中輸入。電腦版於頁面右方，手機版於頁面下方。
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
              <FormInput
                class="!mb-2 lg:w-1/2"
                :label="['列名感謝顯示名稱']"
                type="text"
                id="thanks-to-name"
                name="列名感謝顯示名稱"
              />
              <p class="text-grey-400">
                請於此欄填寫您希望露出的名稱，若無填寫則會以收據抬頭列名感謝。
              </p>
            </div>
            <FormTextarea
              class="!mb-0"
              :label="['備註']"
              id="remark"
              name="備註"
              placeholder="請輸入備註"
              v-model="note"
            />
          </div>
        </div>
        <div class="border-grey-200 pb-16 lg:mb-20 lg:w-1/3 lg:pb-0 lg:pt-12">
          <aside class="sticky top-6">
            <div class="mb-6 rounded-lg bg-white px-8 py-10 ring-1 ring-grey-200">
              <div class="border-b pb-8">
                <div class="mb-4 flex items-center justify-between">
                  <label for="extra-donation" class="mb-0 font-normal text-grey-400"
                    >額外贊助</label
                  >
                  <div class="flex w-1/2 flex-wrap">
                    <div class="flex items-center gap-x-4">
                      <span class="inline-block text-grey-400">$</span>
                      <Field
                        type="number"
                        id="extra-donation"
                        name="額外贊助"
                        v-model.number="extra"
                        @keydown="handleKeyDown"
                      />
                    </div>
                    <ErrorMessage name="額外贊助" class="mt-2 block text-sm text-primary" />
                  </div>
                </div>
                <ul class="flex flex-wrap gap-4">
                  <li
                    class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
                    @click="addExtra(100)"
                  >
                    <span>+100</span>
                  </li>
                  <li
                    class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
                    @click="addExtra(1000)"
                  >
                    <span>+1000</span>
                  </li>
                  <li
                    class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
                    @click="roundExtra()"
                  >
                    <span>補整數</span>
                  </li>
                </ul>
              </div>
              <div class="pt-6">
                <div class="mb-8 flex justify-end">
                  <span class="text-lg font-bold"> NT$ {{ formattedAmount(total) }} </span>
                </div>
                <button class="btn btn-primary block w-full" type="submit" :disabled="!meta.valid">
                  直接結帳
                </button>
              </div>
            </div>
            <p class="font-sansTC font-medium leading-relaxed tracking-wider text-grey-500">
              點擊「直接結帳」即表示您已閱讀並同意<NuxtLink
                to="/info/terms"
                class="link link-primary"
                target="_blank"
                >使用者條款</NuxtLink
              >與<NuxtLink to="/info/privacy" class="link link-primary" target="_blank"
                >隱私權政策</NuxtLink
              >。
            </p>
          </aside>
        </div>
      </div>
    </section>
  </Form>
</template>

<script setup>
import moment from 'moment';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { useUserStore } from '@/stores/user';
import { useOrderStore } from '@/stores/order';

definePageMeta({
  middleware: ['auth']
});

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
const coverUrl = ref('');

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

      if (option.option_cover === '' || option.option_cover === 'cover URL') {
        coverUrl.value = `https://fakeimg.pl/352x110/f3e3f5/9d1ead?text=${option.option_name}&font=noto`;
      } else {
        coverUrl.value = option.option_cover;
      }

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

function generateRandomNumberById(objectId) {
  const seed = objectId.substring(20); // last four
  let times = 1;
  for (const el of seed) {
    times *= el.charCodeAt(0);
  }
  const date = moment().format('MMDD');
  return Math.round(times / parseInt(date)) % 1000;
}

const quantity = ref(1);
const extra = ref(0);
const note = ref('');

function handleKeyDown(event) {
  // 阻止輸入字母 "e"
  if (event.key === 'e') {
    event.preventDefault();
  }
}

// 計算總金額
const total = computed(() => price.value * quantity.value + extra.value);

function updateQuantity(value) {
  quantity.value = value;
}

// 監聽 price、quantity 和 extra 的變化，重新計算總金額
watch([price, quantity, extra], () => {
  total;
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

// 金額加入千分位
const formattedAmount = (price) => {
  return price.toLocaleString();
};

const navigateToCheckout = () => {
  // console.log('userInfo', userInfo.value._id, userInfo.value);

  const orderData = {
    user_id: userInfo.value._id,
    project_id: projectId,
    project_title: projectTitle.value,
    project_price: price.value,
    option_id: planId,
    option_name: optionName.value,
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

const formSchema = {
  贊助數量: 'required|min_value:1',
  額外贊助: 'min_value:0'
};

const handleSubmit = (values) => {
  console.log('values:', values);
  navigateToCheckout();
};
</script>
