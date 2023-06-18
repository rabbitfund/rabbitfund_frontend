<script setup>
import { decodeCredential } from 'vue3-google-login';
import { useAuthStore } from '@/stores/auth';

const { handleSignUp } = useAuthStore();
const { signup } = useApi();

const formSchema = {
  email: 'required|email',
  密碼: 'required|min:8',
  使用者名稱: 'required'
};

async function handleSubmit(values) {
  const { data } = await signup({
    method: 0,
    email: values.email,
    pass: values.密碼,
    name: values.使用者名稱
  });
  handleSignUp(data.value);
}

const googleSignUp = async (response) => {
  const responsePayload = decodeCredential(response.credential);

  const { data } = await signup({
    method: 1,
    email: responsePayload.email,
    pass: '',
    oauth_google_id: responsePayload.sub,
    name: responsePayload.name,
    cover: responsePayload.picture
  });
  handleSignUp(data.value);
};

definePageMeta({
  title: '註冊'
});
</script>

<template>
  <section class="container max-w-lg">
    <div class="my-8 rounded bg-light-emphasis drop-shadow md:my-16">
      <div class="p-5 sm:px-20 lg:py-10">
        <Form class="mb-8" :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
          <h2 class="mb-6 flex items-center gap-2">
            <span class="w-8"><img src="~/assets/images/icons/user-fill.svg" alt="user" /></span>
            <span>註冊</span>
          </h2>
          <TextInput
            label="電子信箱"
            type="email"
            id="email"
            name="email"
            placeholder="rabbit@example.com"
          />
          <TextInput
            label="密碼"
            type="password"
            id="password"
            name="密碼"
            placeholder="請輸入密碼"
          />
          <TextInput
            label="使用者名稱"
            type="text"
            id="name"
            name="使用者名稱"
            placeholder="請輸入使用者名稱"
          />
          <button class="btn btn-primary mt-2 w-full" :disabled="!meta.valid" type="submit">
            註冊
          </button>
        </Form>

        <div class="mb-6 flex font-bold text-primary">
          <NuxtLink to="/users/signin" class="link link-primary"
            >前往登入</NuxtLink
          >
        </div>

        <div>
          <p class="mb-6 border-b border-grey-200 text-h5 text-info">或使用以下方式註冊</p>
          <ClientOnly>
            <div class="text-center">
              <GoogleLogin :callback="googleSignUp" />
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>
