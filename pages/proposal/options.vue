<script setup>
import { useProposalStore } from '~/stores/proposal/options.ts';

const formSchema = {
  // 回饋方案名稱: 'required',
  // 回饋金額: 'required',
  // 回饋數量限制: 'required',
  // 問題: 'required',
  // 答案選項: 'required'
};

const proposalStore = useProposalStore();
const { saveData } = proposalStore;

const router = useRouter();

const goPreviousPage = () => {
  router.go(-1);
};

const handleSubmit = (values) => {
  saveData(dealWithData(values));

  function dealWithData(data) {
    const options = [];
    const specifications = [];

    for (const key in data) {
      if (key.includes('回饋方案名稱')) {
        const nameKey = key;
        const priceKey = `回饋金額${nameKey.slice(-1)}`;
        const quantityKey = `回饋數量限制${nameKey.slice(-1)}`;
        const deliveryDateKey = `預計出貨時間${nameKey.slice(-1)}`;
        const startKey = `開始時間${nameKey.slice(-1)}`;
        const endKey = `結束時間${nameKey.slice(-1)}`;

        const name = data[nameKey];
        const price = data[priceKey];
        const quantity = data[quantityKey];
        const deliveryDate = data[deliveryDateKey];
        const start = data[startKey];
        const end = data[endKey];

        const questions = Object.keys(data).filter((k) => k.includes(`問題${nameKey.slice(-1)}`));

        for (const key of questions) {
          const questionKey = key;
          const answerKey = `答案選項${questionKey.slice(-3)}`;

          const question = data[questionKey];
          const answer = data[answerKey];

          if (question && answer) {
            specifications.push({ question, answer });
          }
        }

        options.push({ name, price, quantity, deliveryDate, start, end, specifications });
      }
    }

    return { options };
  }
};

const modalSendProposal = ref(null);
const sendProposal = () => {
  modalSendProposal.value.openModal();
  console.log('已送出，審核中。');
};
</script>

<template>
  <div>
    <NuxtLayout name="proposal">
      <Form :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
        <ProposalOptions />

        <div class="flex flex-wrap justify-center gap-x-6 gap-y-8 border-t border-grey-200 pt-6">
          <button class="btn btn-primary flex-1 lg:flex-none" type="button" @click="goPreviousPage">
            上一頁
          </button>
          <button class="btn btn-primary flex-1 lg:flex-none" :disabled="!meta.valid" type="submit">
            儲存
          </button>
          <button
            class="btn btn-primary basis-full lg:basis-auto"
            :disabled="!meta.valid"
            type="button"
            @click="sendProposal"
          >
            送出提案
          </button>
        </div>
      </Form>
    </NuxtLayout>
  </div>

  <ModalSendProposal ref="modalSendProposal" />
</template>
