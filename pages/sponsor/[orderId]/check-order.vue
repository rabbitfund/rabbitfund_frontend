<script setup>
const route = useRoute();
const { orderId } = route.params;
const { getOrder } = useApi();

const order = ref('');

onMounted(async () => {
  await nextTick();
  getOrder(orderId)
    .then((res) => {
      console.log('res', res.data.value.data);
      order.value = res.data.value.data;
      // const option = res.data.value.data;
      // optionName.value = option.option_name;
      // content.value = option.option_content;
      // price.value = option.option_price;
      // shipDate.value = getShipDate(option.option_parent.project_end_date);
      // projectTitle.value = option.option_parent.project_title;

      // console.log(option);
    })
    .catch((err) => {
      console.log(err);
    });
});

// const url = `https://rabbit-newebpay.onrender.com/order/${orderId}`;
// const urlNewebpay = 'https://ccore.newebpay.com/MPG/mpg_gateway';

// const navigateToResult = async () => {
//   const { data } = await useFetch(url);
//   // console.log(data.value.data.order_id);
//   order.value = data.value.data;
// };
// const postDataToBluesnap = async () => {
//   try {
//     // const response = await this.$fetch(urlNewebpay, {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(order.value)
//     // });
//     await $fetch(urlNewebpay, {
//       method: 'POST',
//       body: order.value
//     });
//     // const response = await this.$http.$post(urlNewebpay, order.value);
//     console.log(response);
//     // 在這裡處理藍新金流的回應
//   } catch (error) {
//     console.error(error);
//   }
// };
// // postDataToBluesnap();

// (async () => {
//   console.log('navigateToResult', data);
//   try {
//     const response = await this.$http.$get(url, {
//       headers: {
//         Authorization: `Bearer ${USER_TOKEN}`
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });
// }
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
        <form class="mb-12" action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post">
          <!-- TODO: env newebpay action -->
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/user-fill.svg" alt="使用者" /></span>
            <h2>確認訂單資料</h2>
          </div>
          <div class="mb-6">
            <input type="hidden" name="MerchantID" value="MS148719690" disabled />
            <!-- TODO: env MerchantID -->
          </div>
          <div class="mb-6">
            <input type="hidden" name="Version" value="1.5" disabled />
            <!-- TODO: env Version -->
          </div>
          <div class="mb-6">
            <label for="MerchantOrderNo">訂單編號</label>
            <input id="MerchantOrderNo" type="text" name="MerchantOrderNo" :value="order.order_id" disabled />
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-1/2">
              <label for="Name">真實姓名</label>
              <input id="Name" type="text" name="Name" :value="order.user_name" disabled />
            </div>
            <div class="mb-6 md:w-1/2">
              <label for="Email">電子信箱</label>
              <input id="Email" type="email" name="Email" :value="order.user_email" disabled />
            </div>
          </div>
          <div class="md:flex md:gap-6">
            <div class="mb-6 md:w-4/5">
              <label for="itemDesc">訂單商品</label>
              <input id="itemDesc" type="text" name="itemDesc" :value="order.itemDesc" disabled />
            </div>
            <div class="mb-6 md:w-1/5">
              <label for="Amt">訂單金額</label>
              <input id="Amt" type="text" name="Amt" :value="order.amt" disabled />
            </div>
          </div>
          <div class="mb-6">
            <input type="hidden" name="TimeStamp" :value="order.timeStamp" disabled />
          </div>
          <div class="mb-6">
            <input type="hidden" name="TradeInfo" :value="order.newebpay_aes_encrypt" disabled />
          </div>
          <div class="mb-6">
            <input type="hidden" name="TradeSha" :value="order.newebpay_sha_encrypt" disabled />
          </div>
          <p class="text-grey-500">
            當您確認參與本專案贊助方案時，您已確實暸解此專案資訊揭露與承諾之內容。若您發現有與實際情況不符之處，請透過【檢舉與回報】功能通報平台，我們會盡速確認。
          </p>
          <button type="submit" class="btn btn-primary block">立即付款</button>
        </form>
        <br><br>
        <form action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post">
          <input type="hidden" name="MerchantID" value="MS148719690" />
          <input type="hidden" name="Version" value="1.5" />
          <input type="text" name="MerchantOrderNo" :value="order.order_id" />
          <input type="text" name="Name" :value="order.user_name" />
          <input type="text" name="Email" :value="order.user_email" />
          <input type="text" name="Amt" :value="order.amt" />
          <input type="text" name="itemDesc" :value="order.itemDesc" />
          <input type="text" name="TimeStamp" :value="order.timeStamp" />
          <input type="hidden" name="TradeInfo" :value="order.newebpay_aes_encrypt" />
          <input type="hidden" name="TradeSha" :value="order.newebpay_sha_encrypt" />
          <button class="btn btn-primary w-full">送出訂單</button>
        </form>
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
            <NuxtLink class="btn btn-primary block w-full">立即付款</NuxtLink>
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
