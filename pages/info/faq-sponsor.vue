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
    qas_q: '可以選擇哪些付款方式呢？',
    qas_a: '您可以使用信用卡、ATM 轉帳或是超商繳費。',
    qas_update_date: '2023-05-02'
  },
  {
    qas_q: '可以選擇哪些付款方式呢？',
    qas_a: '您可以使用信用卡、ATM 轉帳或是超商繳費。',
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
