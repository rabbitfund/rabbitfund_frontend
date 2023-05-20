import { useAuthStore } from '@/stores/auth';
import { useGlobalStateStore } from '@/stores/globalState';

export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const { API_BASE } = runtimeConfig.public;
  const authStore = useAuthStore();
  const globalState = useGlobalStateStore();
  const { toggleFullscreenLoading } = globalState;

  globalThis.$fetch = $fetch.create({
    baseURL: API_BASE,
    onRequest({ options }) {
      if (options?.globalLoading !== false) {
        toggleFullscreenLoading(true);
      }
      if (authStore.token) {
        options.headers = { Authorization: `Bearer ${authStore.token}` };
      }
    },
    onRequestError({ error }) {
      alert(error);
    },
    onResponse({ response, options }) {
      if (options.globalLoading !== false) {
        toggleFullscreenLoading(false);
      }
      if (!response.ok) {
        alert(response._data.msg);
        return;
      }
      // alert(response._data.msg);
      return response._data;
    },
    onResponseError(context) {
      console.dir(context);
      // alert(context.error);
    }
  });
});
