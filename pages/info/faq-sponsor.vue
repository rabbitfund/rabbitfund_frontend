<template>
  <h1 class="mb-5 text-h3 xl:text-h2">贊助方常見問題</h1>
  <Accordion :data="modifiedSponsor"></Accordion>
</template>

<script setup lang="ts">
import moment from 'moment';
import { ref } from 'vue';

// 贊助方
const sponsor = ref([
  {
    qas_q: '我想要贊助計畫，可以透過哪些方式呢？',
    qas_a: '我們提供線上信用卡或超商繳費兩種方式讓您贊助計畫。若您使用線上信用卡付款，請確認您的信用卡資訊正確無誤。如果您選擇超商繳費，請您於繳費期限內至任一超商繳費，繳費完成後，系統將自動更新您的贊助狀態。感謝您對計畫的支持！',
    qas_update_date: '2023-05-02'
  },
  {
    qas_q: '我支持的計畫失敗了，我贊助的錢跑去哪裡？',
    qas_a: '如果您支持的計畫沒有達成目標，您所贊助的金額會依照您原本使用的付款方式退還給您以保障支持者的權益。我們建議支持者在支持計畫前，詳細閱讀募資平台的相關規定和計畫的說明，以確保自己的支持能夠發揮最大的效益。',
    qas_update_date: '2023-05-02'
  },
    {
    qas_q: '為什麼遲遲沒有收到贊助成功確認信件？',
    qas_a: '如在24小時內沒有收到贊助成功確認信件，可能是因為系統繁忙或者電子信箱問題，建議檢查是否在垃圾郵件或其他信箱中找到信件。若都未找到，請聯絡客服，提供訂單編號以便協助查詢。',
    qas_update_date: '2023-05-02'
  }
]);
const modifiedSponsor = ref([]);

type Qas = {
  qas_q: string;
  qas_a: string;
  qas_update_date: string;
};

function modified(field: { value: any }, data: { value: Qas[] }) {
  field.value = data.value.map((item: Qas) => {
    return {
      title: item.qas_q,
      content: item.qas_a,
      create_date: moment(item.qas_update_date).format('YYYY-MM-DD')
    };
  });
}

modified(modifiedSponsor, sponsor);
</script>
