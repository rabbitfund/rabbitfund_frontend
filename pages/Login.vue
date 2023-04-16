<template>
  <div>
    <ClientOnly>
      <GoogleLogin :callback="callback" popup-type="TOKEN">
        <button>使用 Google 進行登入</button>
      </GoogleLogin>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const { login } = authStore;

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log(response);
  login(response.access_token);
  navigateTo('/admin');
};
</script>
