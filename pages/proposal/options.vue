<script setup>
import { useProposalStore } from '~/stores/proposal/options.ts';

const formSchema = {
  回饋方案名稱: 'required',
  回饋金額: 'required',
  回饋數量限制: 'required',
  問題1: 'required',
  答案選項1: 'required'
};

const proposalStore = useProposalStore();
const { setProposal } = proposalStore;

const options = reactive([{}]);
function createNewOption() {
  options.push({});
}

const router = useRouter();
const url = '/proposal/owner-info';

const goPreviousPage = () => {
  router.go(-1);
};

const handleSubmit = (values) => {
  console.log('values:', values);
  setProposal(values);
  router.push(url);
};
</script>

<template>
  <div>
    <NuxtLayout name="proposal">
      <Form :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
        <ProposalOptions v-for="(option, index) in options" :key="index" />

        <button class="btn btn-primary mb-12" @click="createNewOption">新增回饋項目</button>

        <div class="flex justify-center gap-6 border-t border-grey-200 pt-6">
          <button class="btn btn-primary" type="button" @click="goPreviousPage">
            上一頁
          </button>
          <button class="btn btn-primary" :disabled="!meta.valid" type="submit">
            儲存並前往下一頁
          </button>
        </div>
      </Form>
    </NuxtLayout>
  </div>
</template>
