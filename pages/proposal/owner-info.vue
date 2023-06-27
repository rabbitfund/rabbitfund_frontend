<script setup>
import { useProposalStore } from '~/stores/proposal/owner-info.ts';
import { defineRule } from 'vee-validate';

const isEmpty = (value) => {
  if (value === null || value === undefined || value === '') {
    return true;
  }
  return false;
};

defineRule('mobile', (value) => {
  if (isEmpty(value)) {
    return true;
  }
  const re = /^(09)[0-9]{8}$/;
  return re.test(value) ? true : '請輸入正確的手機號碼';
});

const formSchema = {
  提案負責人姓名: 'required',
  電子郵件: 'required|email',
  手機號碼: 'mobile',
  團隊名稱: 'required',
  相關網站: 'url'
};

const proposalStore = useProposalStore();
const { name, email, mobile, identity, registerName, teamName, introduction, site } = proposalStore;
const { saveData } = proposalStore;

const data = reactive({
  name,
  email,
  mobile,
  identity,
  registerName,
  teamName,
  introduction,
  site
});

const router = useRouter();
const url = '/proposal/outline';

const handleSubmit = (values) => {
  saveData(dealWithData(values));
  router.push(url);

  function dealWithData(data) {
    const name = data['提案負責人姓名'] || '';
    const email = data['電子郵件'] || '';
    const mobile = data['手機號碼'] || '';
    const identity = data['提案人身份'] || '';
    const registerName = data['登記名稱'] || '';
    const teamName = data['團隊名稱'] || '';
    const introduction = data['自我介紹'] || '';
    const site = data['相關網站'] || '';

    return { name, email, mobile, identity, registerName, teamName, introduction, site };
  }
};
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
          :value="data.name"
          placeholder="請輸入提案負責人姓名"
        />
        <FormInput
          :label="['電子郵件', '*']"
          type="text"
          id="email"
          name="電子郵件"
          :value="data.email"
          placeholder="請輸入電子郵件"
        />
        <FormInput
          :label="['手機號碼']"
          type="text"
          id="mobile"
          name="手機號碼"
          :value="data.mobile"
          placeholder="09XXXXXXXX"
        />
        <!-- <FormInput
          :label="['提案人身份']"
          type="text"
          id="identity"
          name="提案人身份"
          :value="data.identity"
          placeholder="請輸入提案人身份"
        /> -->
        <FormInput
          :label="['登記名稱']"
          type="text"
          id="registerName"
          name="登記名稱"
          :value="data.registerName"
          placeholder="請輸入登記名稱"
        />
        <FormInput
          :label="['團隊名稱', '*']"
          type="text"
          id="teamName"
          name="團隊名稱"
          :value="data.teamName"
          placeholder="請輸入團隊名稱"
        />
        <FormTextarea
          :label="['自我介紹']"
          id="introduction"
          name="自我介紹"
          :value="data.introduction"
          placeholder="請輸入自我介紹"
        />
        <FormInput
          :label="['相關網站']"
          type="text"
          id="site"
          name="相關網站"
          :value="data.site"
          placeholder="http://example.com, https://example.com"
        />

        <div class="mt-12 flex justify-center">
          <button class="btn btn-primary" :disabled="!meta.valid" type="submit">
            儲存並前往下一頁
          </button>
        </div>
      </Form>
    </NuxtLayout>
  </div>
</template>
