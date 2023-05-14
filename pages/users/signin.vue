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
  <section
    class="mx-auto my-8 w-full max-w-[500px] overflow-hidden rounded-2xl bg-gray-100 drop-shadow-md md:my-16"
  >
    <div class="p-12 sm:px-20">
      <div class="mb-7">
        <h2 class="mb-5 border-b-2 border-lime-500 text-xl font-extrabold text-lime-500">登入</h2>
        <div class="mb-3">
          <input
            id="userEmail"
            v-model="email"
            type="email"
            class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
            placeholder="使用者帳號"
            @focus="() => (inputState.email = true)"
          />
          <label v-if="inputState.email" for="userEmail" class="text-sm text-red-500">{{
            errors.email
          }}</label>
        </div>
        <div class="mb-3">
          <input
            id="userPassword"
            v-model="password"
            type="password"
            class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
            placeholder="密碼"
            @focus="() => (inputState.password = true)"
          />
          <label v-if="inputState.password" for="userPassword" class="text-sm text-red-500">{{
            errors.password
          }}</label>
        </div>
        <button
          class="mb-2 w-full rounded-md bg-lime-500 py-1 font-bold text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-lime-500 disabled:cursor-not-allowed disabled:bg-red-300 disabled:text-white"
          :disabled="errors.email || errors.password"
          @click="generalSignIn"
        >
          登入
        </button>
        <div class="flex justify-between text-lime-500">
          <NuxtLink to="/users/signup" class="cursor-pointer hover:text-lime-700"
            >尚未註冊?</NuxtLink
          >
          <NuxtLink to="/users/reset-password" class="cursor-pointer hover:text-lime-700"
            >忘記密碼?</NuxtLink
          >
        </div>
      </div>
      <div>
        <p class="text-l mb-5 border-b-2 border-lime-500 font-extrabold text-lime-500">
          或使用以下方式登入
        </p>

        <ClientOnly>
          <GoogleLogin :callback="googleSignIn" />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
