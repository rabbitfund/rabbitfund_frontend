<script setup>
import { decodeCredential } from 'vue3-google-login';
import { useAuthStore } from '@/stores/auth';

const { handleSignUp } = useAuthStore();
const { errors, useFieldModel } = useVeeValidate();
const [email, password, name] = useFieldModel(['email', 'password', 'name']);

const inputState = reactive({
  email: false,
  password: false,
  name: false
});

function generalSignUp() {
  handleSignUp({
    method: 0,
    email: email.value,
    pass: password.value,
    name: name.value
  });
}

const googleSignUp = (response) => {
  const responsePayload = decodeCredential(response.credential);

  handleSignUp({
    method: 1,
    email: responsePayload.email,
    pass: '',
    oauth_google_id: responsePayload.sub,
    name: responsePayload.name,
    cover: responsePayload.picture
  });
};

definePageMeta({
  title: '註冊'
});
</script>

<template>
  <section
    class="mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl bg-gray-100 drop-shadow-md"
  >
    <div class="p-12 sm:px-20">
      <div class="">
        <h2 class="mb-5 border-b-2 border-lime-500 text-xl font-extrabold text-lime-500">註冊</h2>
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
        <div class="mb-3">
          <input
            id="userName"
            v-model="name"
            type="text"
            class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
            placeholder="使用者名稱"
            @focus="() => (inputState.name = true)"
          />
          <label v-if="inputState.name" for="userName" class="text-sm text-red-500">{{
            errors.name
          }}</label>
        </div>
        <button
          class="mb-2 w-full rounded-md bg-lime-500 py-1 font-bold text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-lime-500 disabled:cursor-not-allowed disabled:bg-red-300 disabled:text-white"
          :disabled="errors.email || errors.password || errors.name"
          @click="generalSignUp"
        >
          註冊
        </button>

        <NuxtLink to="/users/signin" class="cursor-pointer text-lime-500 hover:text-lime-700"
          >返回登入</NuxtLink
        >

        <div class="mt-7">
          <p class="text-l mb-5 border-b-2 border-lime-500 font-extrabold text-lime-500">
            或使用以下方式註冊
          </p>

          <ClientOnly>
            <GoogleLogin :callback="googleSignUp" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>
