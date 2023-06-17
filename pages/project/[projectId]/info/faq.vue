<script setup lang="ts">
import moment from 'moment';
import { storeToRefs } from 'pinia';
import { useProjectStore } from '~/stores/project';

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
    create_date: moment(item.qas_update_date).format('YYYY-MM-DD')
  };
});
</script>

<template>
  <h2 class="mb-7 text-center text-h3 lg:text-left xl:text-h2">常見問題</h2>
  <Accordion :data="modifiedQas"></Accordion>
</template>
