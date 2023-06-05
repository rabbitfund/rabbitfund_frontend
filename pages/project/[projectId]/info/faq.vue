<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProjectStore } from '~/stores/project';

// const qas = ref([
//   {
//     qas_q: '我是企業或相關組織，希望可以大額贊助或深度合作，請問如何聯繫？',
//     qas_a: '感謝您的熱心支持，請來信 service@rabbit.org，將有專人與您接洽。',
//     qas_create_date: '2023-04-23'
//   },
//   {
//     qas_q: '何時可以收到感謝禮及收據呢？',
//     qas_a: '感謝禮預計於2023年9月中下旬依照訂單順序陸續替大家安排寄出，再請大家留意電子信箱～！',
//     qas_create_date: '2023-05-01'
//   },
//   {
//     qas_q: '可以選擇哪些付款方式呢？',
//     qas_a: '您可以使用信用卡、ATM 轉帳或是超商繳費。',
//     qas_create_date: '2023-05-02'
//   }
// ]);

const modifiedQas: any = ref([]);

type Qas = {
  qas_q: string;
  qas_a: string;
  qas_update_date: string;
};

const projectStore = useProjectStore();
const { qas } = storeToRefs(projectStore);

modifiedQas.value = qas.value.map((item: Qas) => {
  return {
    title: item.qas_q,
    content: item.qas_a,
    create_date: item.qas_update_date
  };
});
</script>

<template>
  <h2 class="mb-7 text-center text-h3 lg:text-left xl:text-h2">常見問題</h2>
  <Accordion :data="modifiedQas"></Accordion>
</template>
