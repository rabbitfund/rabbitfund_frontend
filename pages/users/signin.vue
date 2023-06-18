<script setup>
import { decodeCredential } from 'vue3-google-login';
import { useAuthStore } from '@/stores/auth';

const { handleSignIn } = useAuthStore();
const { signin } = useApi();

const formSchema = {
  email: 'required|email',
  密碼: 'required|min:8'
};

const handleSubmit = async (values) => {
  const { data } = await signin({
    method: 0,
    email: values.email,
    pass: values.密碼,
    forget: false
  });

  handleSignIn(data.value);
};

const googleSignIn = async (response) => {
  const responsePayload = decodeCredential(response.credential);

  const { data } = await signin({
    method: 1,
    email: responsePayload.email,
    oauth_google_id: responsePayload.sub,
    forget: false
  });

  handleSignIn(data.value);
};

definePageMeta({
  title: '登入'
});
</script>

<template>
  <section class="container max-w-lg">
    <div class="my-8 rounded bg-light-emphasis drop-shadow md:my-16">
      <div class="p-5 sm:px-20 lg:py-10">
        <Form class="mb-8" :validation-schema="formSchema" v-slot="{ meta }" @submit="handleSubmit">
          <h2 class="mb-6 flex items-center gap-2">
            <span class="w-8"><img src="~/assets/images/icons/user-fill.svg" alt="user" /></span>
            <span>登入</span>
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
          <button class="btn btn-primary mt-2 w-full" :disabled="!meta.valid" type="submit">
            登入
          </button>
        </Form>

        <div class="mb-6 flex justify-between font-bold text-primary">
          <NuxtLink to="/users/signup" class="hover:text-primary-dark hover:underline"
            >尚未註冊？</NuxtLink
          >
          <NuxtLink to="/users/reset-password" class="hover:text-primary-dark hover:underline"
            >忘記密碼？</NuxtLink
          >
        </div>

        <div>
          <p class="mb-6 border-b border-grey-200 text-h5 text-info">或使用以下方式登入</p>
          <ClientOnly>
            <div class="text-center">
              <GoogleLogin :callback="googleSignIn" />
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>
