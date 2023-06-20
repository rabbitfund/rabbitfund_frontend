<script setup>
import { useProposalStore } from '~/stores/proposal/content.ts';

const formSchema = {
  專案內容: 'required'
};

const proposalStore = useProposalStore();
// state 不需 storeToRefs，因為只要初始值
const { content, risk, faqs } = proposalStore;
const { saveData } = proposalStore;

const data = reactive({
  content,
  risk,
  faqs
});

const router = useRouter();
const url = '/proposal/options';

const goPreviousPage = () => {
  router.go(-1);
};
const handleSubmit = (values) => {
  saveData(dealWithData(values));
  router.push(url);

  function dealWithData(data) {
    const content = data['專案內容'] || '';
    const risk = data['風險與變數'] || '';
    const faqs = [];

    for (const key in data) {
      if (key.includes('常見問題')) {
        const questionKey = key;
        const answerKey = `問題回覆${questionKey.slice(-1)}`;

        const question = data[questionKey];
        const answer = data[answerKey];

        if (question && answer) {
          faqs.push({ question, answer });
        }
      }
    }

    return { content, risk, faqs };
  }
};

function createNewFAQ() {
  data.faqs.push({
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
          :value="data.content"
          placeholder="請輸入專案內容"
        />
        <FormTextarea
          :label="['風險與變數']"
          id="risks"
          name="風險與變數"
          :value="data.risk"
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
              v-for="(item, index) in data.faqs"
              :key="index"
              class="border-t border-grey-200 pt-3"
            >
              <FormInput
                :label="[`常見問題`]"
                :id="`question${index + 1}`"
                type="text"
                :name="`常見問題${index + 1}`"
                :value="item.question"
                placeholder="請輸入常見問題"
              />
              <FormInput
                :label="[`問題回覆`]"
                :id="`answer${index + 1}`"
                type="text"
                :name="`問題回覆${index + 1}`"
                :value="item.answer"
                placeholder="請輸入上述問題回覆"
              />
            </li>
          </ul>

          <button class="btn btn-primary" @click.prevent="createNewFAQ" type="button">
            新增問題
          </button>
        </div>

        <div class="flex justify-center gap-6">
          <button class="btn btn-primary" type="button" @click="goPreviousPage">上一頁</button>
          <button class="btn btn-primary" :disabled="!meta.valid" type="submit">
            儲存並前往下一頁
          </button>
        </div>
      </Form>
    </NuxtLayout>
  </div>
</template>
