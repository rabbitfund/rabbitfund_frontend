import { useAuthStore } from '@/stores/auth';

export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const { API_BASE } = runtimeConfig.public;
  const authStore = useAuthStore();

  const { showErrorMessage } = useSwalShowMessage();

  globalThis.$fetch = $fetch.create({
    baseURL: API_BASE,
    onRequest({ options }) {
      if (authStore.token) {
        options.headers = { Authorization: `Bearer ${authStore.token}` };
      }
    },
    onRequestError({ error }) {
      showErrorMessage(error);
    },
    onResponse({ response }) {
      if (!response.ok) {
        showErrorMessage(response._data.msg);
        return;
      }
      return response._data;
    },
    onResponseError(context) {
      showErrorMessage(context);
    }
  });
});
