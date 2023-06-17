<script setup>
import { useProposalStore } from '~/stores/proposal/content.ts';
import { storeToRefs } from 'pinia';

const formSchema = {
  專案內容: 'required'
};

const proposalStore = useProposalStore();
const { 專案內容, 風險與變數, 常見問題1, 問題回覆1, 常見問題2, 問題回覆2 } =
  storeToRefs(proposalStore);
const { setProposal } = proposalStore;

const router = useRouter();
const url = '/proposal/options';

const goPreviousPage = () => {
  router.go(-1);
};
const handleSubmit = (values) => {
  console.log('values:', values);
  setProposal(values);
  router.push(url);
};

const FAQs = reactive([
  {
    question: '',
    answer: ''
  }
]);

function createNewFAQ() {
  FAQs.push({
    question: '',
    answer: ''
  });
}
</script>

<template>
  <div>
    <NuxtLayout name="proposal">
      <Form :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
        <FormTextarea
          :label="['專案內容', '*']"
          id="content"
          name="專案內容"
          :value="專案內容"
          placeholder="請輸入專案內容"
        />
        <FormTextarea
          :label="['風險與變數']"
          id="risks"
          name="風險與變數"
          :value="風險與變數"
          placeholder="請輸入風險與變數"
        />

        <div class="mb-12 rounded-lg bg-light px-3 py-6">
          <h3 class="mb-2 flex items-center text-md font-bold">
            <span class="mr-2"
              ><img src="~/assets/images/icons/detail.svg" alt="time" class="w-6"
            /></span>
            <span>常見問答</span>
          </h3>
          <ul>
            <li
              v-for="(item, index) in FAQs"
              :key="item.question"
              class="border-t border-grey-200 pt-3"
            >
              <FormInput
                :label="[`常見問題 ${index + 1}`]"
                type="text"
                :id="`question${index + 1}`"
                :name="`常見問題${index + 1}`"
                :value="常見問題1"
                placeholder="請輸入常見問題"
              />
              <FormInput
                :label="[`問題回覆 ${index + 1}`]"
                type="text"
                :id="`answer${index + 1}`"
                :name="`問題回覆${index + 1}`"
                :value="問題回覆1"
                placeholder="請輸入上述問題回覆"
              />
            </li>
          </ul>

          <button class="btn btn-primary" @click="createNewFAQ">新增問題</button>
        </div>

        <div class="flex justify-center gap-6">
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
