import { useAuthStore } from '@/stores/auth';

export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const { API_BASE } = runtimeConfig.public;
  const authStore = useAuthStore();

  globalThis.$fetch = $fetch.create({
    baseURL: API_BASE,
    onRequest({ options }) {
      if (authStore.token) {
        options.headers = { Authorization: `Bearer ${authStore.token}` };
      }
    },
    onRequestError({ error }) {
      alert(error);
    },
    onResponse({ response }) {
      if (!response.ok) {
        alert(response._data.msg);
        return;
      }
      alert(response._data.msg);
      return response._data;
    },
    onResponseError(context) {
      console.dir(context);
      // alert(context.error);
    }
  });
});
