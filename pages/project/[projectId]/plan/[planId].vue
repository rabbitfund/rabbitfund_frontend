<template>
  <section class="border-b py-6 lg:py-12">
    <div class="container">
      <div class="flex justify-center">
        <ul class="flex w-full gap-7 lg:w-2/3 lg:gap-8">
          <li class="w-1/3">
            <span class="mb-1 text-grey-400">01</span
            ><span class="mb-1 block font-bold lg:text-lg">確認品項</span>
            <div class="h-1 bg-primary"></div>
          </li>
          <li class="w-1/3">
            <span class="mb-1 text-grey-400">02</span
            ><span class="mb-1 block font-bold lg:text-lg">填寫訂單資料</span>
            <div class="h-1 bg-primary-light"></div>
          </li>
          <li class="w-1/3">
            <span class="mb-1 text-grey-400">03</span
            ><span class="mb-1 block font-bold lg:text-lg">交易結果</span>
            <div class="h-1 bg-primary-light"></div>
          </li>
        </ul>
      </div>
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
              <input type="number" class="w-1/4" />
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
              <p>
                {{ content }}
              </p>
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
            <input type="text" name="thanks-to-name" id="thanks-to-name" class="mb-2 w-1/2" />
            <p class="text-grey-400">
              非必填。請於此欄填寫您希望露出的名稱，若無填寫則會以收據抬頭列名感謝。
            </p>
          </div>
          <div>
            <label for="remark">備註</label>
            <textarea name="remark" id="remark" rows="4"></textarea>
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
                <input type="number" name="extra-donation" id="extra-donation" />
              </div>
            </div>
            <ul class="flex flex-wrap gap-4">
              <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <span>最低額度</span>
              </li>
              <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <span>+100</span>
              </li>
              <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <span>+1000</span>
              </li>
              <li
                class="cursor-pointer rounded-full bg-light-emphasis px-3 py-1 text-primary ring-1 ring-primary"
              >
                <span>補整數</span>
              </li>
            </ul>
          </div>
          <div class="pt-6">
            <div class="mb-8 flex justify-end">
              <span class="text-lg font-bold">NT$ 300</span>
            </div>
            <button @click="navigateToCheckout()" class="btn btn-primary w-full">直接結帳</button>
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
const route = useRoute();
const router = useRouter();
const { getProjectOption } = useApi();
const { projectId, planId } = route.params;

const navigateToCheckout = () => {
  const url = `/sponsor/${planId}/checkout`;
  router.push(url);
};

const optionName = ref('');
const content = ref('');
const price = ref('');
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
</script>
