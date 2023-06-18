<script setup>
import { useProposalStore } from '~/stores/proposal/owner-info.ts';
import { storeToRefs } from 'pinia';

const isEmpty = (value) => {
  if (value === null || value === undefined || value === '') {
    return true;
  }
  return false;
};

const isPhone = (value) => {
  if (isEmpty(value)) {
    return true;
  }
  const re = /^(09)[0-9]{8}$/;
  return re.test(value) ? true : '需要正確的電話號碼';
};

const formSchema = {
  提案負責人姓名: 'required',
  電子郵件: 'required|email',
  行動電話: isPhone,
  團隊名稱: 'required',
  相關網站: 'url'
};

const proposalStore = useProposalStore();
const { 提案負責人姓名, 電子郵件, 行動電話, 提案人身分, 登記名稱, 團隊名稱, 自我介紹, 相關網站 } =
  storeToRefs(proposalStore);
const { setProposal } = proposalStore;

const router = useRouter();
const goPreviousPage = () => {
  router.go(-1);
};
const handleSubmit = (values) => {
  console.log('values:', values);
  setProposal(values);
};

const modalSendProposal = ref(null);
const sendProposal = () => {
  modalSendProposal.value.openModal();
  console.log('已送出，審核中。');
}
</script>

<template>
  <div>
    <NuxtLayout name="proposal">
      <Form :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
        <FormInput
          :label="['提案負責人姓名', '*']"
          type="text"
          id="name"
          name="提案負責人姓名"
          :value="提案負責人姓名"
          placeholder="請輸入提案負責人姓名"
        />
        <FormInput
          :label="['電子郵件', '*']"
          type="text"
          id="email"
          name="電子郵件"
          :value="電子郵件"
          placeholder="請輸入電子郵件"
        />
        <FormInput
          :label="['行動電話']"
          type="text"
          id="mobile"
          name="行動電話"
          :value="行動電話"
          placeholder="09XXXXXXXX"
        />
        <FormInput
          :label="['提案人身分']"
          type="text"
          id="identity"
          name="提案人身分"
          :value="提案人身分"
          placeholder="請輸入提案人身分"
        />
        <FormInput
          :label="['登記名稱']"
          type="text"
          id="registerName"
          name="登記名稱"
          :value="登記名稱"
          placeholder="請輸入登記名稱"
        />
        <FormInput
          :label="['團隊名稱', '*']"
          type="text"
          id="teamName"
          name="團隊名稱"
          :value="團隊名稱"
          placeholder="請輸入團隊名稱"
        />
        <FormTextarea
          :label="['自我介紹']"
          id="introduction"
          name="自我介紹"
          :value="自我介紹"
          placeholder="請輸入自我介紹"
        />
        <FormInput
          :label="['相關網站']"
          type="text"
          id="site"
          name="相關網站"
          :value="相關網站"
          placeholder="http://example.com, https://example.com"
        />

        <div class="mt-12 flex justify-center gap-x-6 gap-y-8 flex-wrap">
          <button class="btn btn-primary flex-1 lg:flex-none" type="button" @click="goPreviousPage">
            上一頁
          </button>
          <button class="btn btn-primary flex-1 lg:flex-none" :disabled="!meta.valid" type="submit">
            儲存
          </button>
          <button class="btn btn-primary basis-full lg:basis-auto" :disabled="!meta.valid" type="button" @click="sendProposal">
            送出提案
          </button>
        </div>
      </Form>
    </NuxtLayout>
  </div>

  <ModalSendProposal
    ref="modalSendProposal"
  />
</template>
