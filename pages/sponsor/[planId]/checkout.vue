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
      <div class="bg-light-emphasis pt-12 lg:w-2/3 lg:p-12 lg:pb-20">
        <div class="mb-20 flex flex-col gap-6 lg:flex-row">
          <div class="rounded-2 lg:w-3/8">
            <img src="~/assets/images/mock.png" alt="假圖" />
          </div>
          <div class="lg:w-5/8">
            <h2 class="mb-4 text-h4">愛奇兒家庭社區共融中心集資計畫</h2>
            <span class="mb-3 block lg:text-lg">單次捐款｜理念支持</span>
            <span class="mb-6 block text-h4 font-bold lg:text-h3">$ 300</span>
            <ul class="mb-6">
              <li>
                <p class="text-grey-500">已被贊助 100 次</p>
              </li>
              <li>
                <p class="text-grey-500">預計 2023 年 12 月出貨</p>
              </li>
            </ul>
            <div class="flex items-center gap-2">
              <label for="productNumber" class="mb-0">輸入數量</label>
              <input type="number" class="w-1/4" />
            </div>
          </div>
        </div>
        <div class="mb-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/gift.svg" alt="禮物" /></span>
            <h2>理念支持回饋品</h2>
          </div>
          <h3 class="mb-4 text-lg">◆ 列名感謝</h3>
          <ul class="mb-6">
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
            <input type="text" name="thanks-to-name" id="thanks-to-name" class="mb-2" />
            <p class="text-grey-400">
              非必填。請於此欄填寫您希望露出的名稱，若無填寫則會以收據抬頭列名感謝。
            </p>
          </div>
          <div>
            <label for="remark">備註</label>
            <textarea name="remark" id="remark" rows="4"></textarea>
          </div>
        </div>
        <div class="mb-12 border-t border-grey-200 pt-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/user-fill.svg" alt="使用者" /></span>
            <h2>購買（贊助）人</h2>
          </div>
          <div class="mb-6">
            <label for="name">真實姓名</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="mb-6">
            <label for="cellphone">手機</label>
            <input type="tel" name="cellphone" id="cellphone" />
          </div>
          <div class="mb-6">
            <label for="email">電子信箱</label>
            <input type="email" name="email" id="email" />
          </div>
          <div class="mb-6">
            <label for="country">國家 / 地區</label>
            <input type="text" name="country" id="country" />
          </div>
          <div class="mb-6">
            <label for="city">城市 / 州 / 區</label>
            <input type="text" name="city" id="city" />
          </div>
          <div class="mb-6">
            <label for="district">鄉 / 鎮 / 市 / 區</label>
            <input type="text" name="district" id="district" />
          </div>
          <div class="mb-6">
            <label for="postcode">郵遞區號</label>
            <input type="number" name="postcode" id="postcode" />
          </div>
          <div class="mb-6">
            <label for="address">地址</label>
            <input type="text" name="address" id="address" />
          </div>
          <p class="text-grey-500">
            當您確認參與本專案贊助方案時，您已確實暸解此專案資訊揭露與承諾之內容。若您發現有與實際情況不符之處，請透過【檢舉與回報】功能通報平台，我們會盡速確認。
          </p>
        </div>
        <div class="mb-12 border-t border-grey-200 pt-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/book.svg" alt="書" /></span>
            <h2>稅捐收據</h2>
          </div>
          <ul class="mb-6 flex flex-col gap-4">
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <input class="peer" type="radio" name="tax-receipt" id="no-receipt" />
              <div>
                <label for="no-receipt" class="mb-1.5">不需要收據</label>
                <p class="text-grey-500">無抵稅需求，不需要寄送收據</p>
              </div>
            </li>
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <input class="peer" type="radio" name="tax-receipt" id="receipt-no-send" />
              <div>
                <label for="receipt-no-send" class="mb-1.5">需要收據，但不需要寄送</label>
                <p class="text-grey-500">
                  由團隊協助在隔年五月上傳稅捐資料至國稅局，僅提供個人捐款服務
                </p>
              </div>
            </li>
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <input class="peer" type="radio" name="tax-receipt" id="paper-receipt" />
              <div>
                <label for="paper-receipt" class="mb-1.5">單次寄送紙本收據</label>
                <p class="text-grey-500">每次捐款都寄送一次收據</p>
              </div>
            </li>
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <input class="peer" type="radio" name="tax-receipt" id="paper-annual" />
              <div>
                <label for="paper-annual" class="mb-1.5">年度寄送紙本收據</label>
                <p class="text-grey-500">統整年度稅捐記錄，於隔年五月前統一寄送紙本收據</p>
              </div>
            </li>
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <p>與購買（贊助）人相同</p>
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
        </div>
        <div class="mb-12 border-t border-grey-200 pt-12">
          <div class="mb-6 flex items-center gap-2">
            <span><img src="~/assets/images/icons/credit-card.svg" alt="信用卡" /></span>
            <h2>付款方式</h2>
          </div>
          <ul class="mb-6 flex flex-col gap-4">
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <input class="peer" type="radio" name="payment-method" id="credit-card" />
              <div>
                <label for="credit-card" class="mb-1.5">線上刷卡</label>
                <p class="text-grey-500">接受國外卡單次交易，不提供銀聯卡交易</p>
              </div>
            </li>
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <input class="peer" type="radio" name="payment-method" id="atm" />
              <div>
                <label for="atm" class="mb-1.5">ATM 虛擬帳號轉帳（最高限制 5 萬元）</label>
                <p class="text-grey-500">請於 3 日內付款完成</p>
              </div>
            </li>
            <li class="flex items-center gap-6 rounded bg-white px-5 py-4 ring-1 ring-grey-200">
              <input class="peer" type="radio" name="payment-method" id="convenience-store" />
              <div>
                <label for="convenience-store" class="mb-1.5">超商代碼付款（非貨到付款）</label>
                <p class="text-grey-500">需加 30 元手續費，請於 3 日內付款完成</p>
              </div>
            </li>
          </ul>
          <ol class="list-decimal ps-5 text-grey-500">
            <li class="mb-2">您將會直接導入金流支付平台，請勿返回其他頁面，以免造成交易失敗。</li>
            <li class="mb-2">
              信用卡授權成功後，本系統不會存留該刷卡人信用卡相關資料，只會保留刷卡成功之授權碼。
            </li>
            <li class="mb-2">
              國外交易需綁定 3D 驗證，定期定額付款者，請使用國內（台灣）信用卡付款。
            </li>
            <li class="mb-2">
              選擇 ATM 轉帳或超商付款需於指定時間內完成付款，超過時限則會取消交易。
            </li>
            <li class="mb-2">
              由於 ATM 單筆轉帳金額上限為 50,000 元，若您有高額贊助需求，請聯繫平台客服人員。
            </li>
            <li>超商付款需增加 30 元手續費，在金額超過 20,000 元時無法選擇此付款方式。</li>
          </ol>
        </div>
      </div>
      <div class="mb-16 border-grey-200 lg:w-1/3 lg:pt-12">
        <div class="mb-6 rounded-lg bg-white px-8 py-10 ring-1 ring-grey-200">
          <div class="border-b pb-8">
            <div class="mb-4 flex items-center justify-between">
              <label for="extra-donation" class="mb-0 text-grey-400">額外贊助</label>
              <div class="flex w-1/2 items-center gap-4">
                <span class="text-grey-400">$</span>
                <input type="text" name="extra-donation" id="extra-donation" />
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
          <ul class="border-b pb-6 pt-8">
            <li class="mb-4 flex justify-between"><span>小計</span><span>$ 300</span></li>
            <li class="flex justify-between"><span>額外贊助</span><span>$ 0</span></li>
          </ul>
          <div class="pt-6">
            <div class="mb-8 flex justify-between">
              <span class="text-lg font-bold">總計</span
              ><span class="text-lg font-bold">$ 300</span>
            </div>
            <button class="btn btn-primary w-full">直接結帳</button>
          </div>
        </div>
        <p class="font-sansTC font-medium leading-relaxed tracking-wider text-grey-500">
          點擊「直接結帳」即表示您已閱讀並同意服務條款與隱私權政策。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const { planId } = route.params;
</script>
