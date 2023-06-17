<template>
  <h1 class="mb-5 text-h3 xl:text-h2">提案方常見問題</h1>
  <Accordion :data="modifiedProposals"></Accordion>
</template>

<script setup lang="ts">
import moment from 'moment';
import { ref } from 'vue';

// 提案方
const proposals = ref([
  {
    qas_q: '集資的時間有限制嗎？',
    qas_a: '雖然集資的時間沒有明確的限制，但我們建議募資方設定合理的募資期限以確保項目能夠在適當的時間內得到足夠的支持。拉得太長可能會對募資方的動力和支持者的信心造成不良的影響，因此我們建議在設定募資期限時謹慎考慮。同時，我們也會提供相關的建議和指導，以幫助募資方制定適當的策略，以確保項目的成功。 ',
    qas_update_date: '2023-05-02'
  },
  {
    qas_q: '集資的金額有上限嗎？',
    qas_a: '目前我們沒有設定募資的上限。然而，我們建議募資方設定合理的募資目標，並確保這些目標與項目的需求相符。設定合理的募資目標可以幫助募資方獲得足夠的支持，同時避免過度集資，使募資方無法履行其承諾。我們也會監控項目的進展情況，以確保資金使用得當，並保護支持者的權益。',
    qas_update_date: '2023-05-02'
  },
  {
    qas_q: '在網站上提案以後會發生什麼事情？',
    qas_a: '當您在網站上提交提案後，我們會對提案進行初步審核，確保其符合我們的提案標準。如果您的提案獲得初步審核通過，我們將對提案進行進一步的審核，確保其內容準確、真實、合法、合理。如果您的提案通過了所有審核流程，我們將在網頁上上架您的專案，並開始接受支持者的贊助。  需要注意的是，審核流程可能需要一些時間，具體取決於提案的內容和申請人的相關信息。我們會盡快完成審核流程，並在審核結果出爐後與您聯繫。如果您的提案未能通過審核，我們將提供反饋意見，幫助您修改提案，以期通過審核。',
    qas_update_date: '2023-05-02'
  },
  {
    qas_q: '為什麼計畫要經過審核？',
    qas_a: '經過審核是為了確保提案的合法性、真實性和可行性，保障支持者的權益，避免不良或詐騙行為發生。我們會仔細審核每一個提案，確保提案符合我們的規範和標準，以確保平台的品質和可靠性。',
    qas_update_date: '2023-05-02'
  }
]);
const modifiedProposals = ref([]);

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

modified(modifiedProposals, proposals);
</script>