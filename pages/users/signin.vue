<script setup>
import { decodeCredential } from 'vue3-google-login';
import { useAuthStore } from '@/stores/auth';

const { handleSignIn } = useAuthStore();
const { errors, useFieldModel } = useVeeValidate();
const [email, password] = useFieldModel(['email', 'password']);

const inputState = reactive({
  email: false,
  password: false
});

function generalSignIn() {
  handleSignIn({
    method: 0,
    email: email.value,
    pass: password.value,
    forget: false
  });
}

const googleSignIn = (response) => {
  const responsePayload = decodeCredential(response.credential);

  handleSignIn({
    method: 1,
    email: responsePayload.email,
    oauth_google_id: responsePayload.sub,
    forget: false
  });
};

definePageMeta({
  title: '登入'
});
</script>

<template>
  <section class="container max-w-lg">
    <div class="my-8 rounded bg-light-emphasis drop-shadow md:my-16">
      <div class="p-5 sm:px-20 lg:py-10">
        <div class="mb-7">
          <h2 class="mb-6 flex items-center gap-2">
            <span class="w-8"><img src="~/assets/images/icons/user-fill.svg" alt="使用者" /></span>
            <span>登入</span>
          </h2>
          <div class="mb-8">
            <div class="mb-6">
              <label for="userEmail">電子信箱</label>
              <input
                class="mb-2"
                id="userEmail"
                v-model="email"
                type="email"
                placeholder="請輸入 email"
                @focus="() => (inputState.email = true)"
              />
              <span v-if="inputState.email" class="text-error">{{ errors.email }}</span>
            </div>
            <div class="mb-8">
              <label for="userPassword">密碼</label>
              <input
                class="mb-2"
                id="userPassword"
                v-model="password"
                type="password"
                placeholder="請輸入密碼"
                @focus="() => (inputState.password = true)"
              />
              <span v-if="inputState.password" for="userPassword" class="text-error">{{
                errors.password
              }}</span>
            </div>
            <button
              class="btn btn-primary w-full"
              :disabled="errors.email || errors.password"
              @click="generalSignIn"
            >
              登入
            </button>
          </div>
          <div class="flex justify-between font-bold text-primary">
            <NuxtLink to="/users/signup" class="hover:text-primary-dark hover:underline"
              >尚未註冊？</NuxtLink
            >
            <NuxtLink to="/users/reset-password" class="hover:text-primary-dark hover:underline"
              >忘記密碼？</NuxtLink
            >
          </div>
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
