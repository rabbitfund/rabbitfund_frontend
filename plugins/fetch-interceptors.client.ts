import { useAuthStore } from '@/stores/auth';
import { useGlobalStateStore } from '@/stores/globalState';

export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const { API_BASE } = runtimeConfig.public;
  const authStore = useAuthStore();
  const globalState = useGlobalStateStore();
  const { toggleFullscreenLoading, addLoadingList } = globalState;

  const { showErrorMessage } = useSwalShowMessage();

  globalThis.$fetch = $fetch.create({
    baseURL: API_BASE,
    onRequest({ options }) {
      if (options?.globalLoading !== false) {
        toggleFullscreenLoading(true);
      }
      if (authStore.token) {
        options.headers = { Authorization: `Bearer ${authStore.token}` };
      }
      const abortController: AbortController = new AbortController();
      const abortSignal: AbortSignal = abortController.signal;
      addLoadingList(abortController);
      options.signal = abortSignal;
    },
    onRequestError({ error }) {
      showErrorMessage(error);
    },
    onResponse({ response, options }) {
      if (options.globalLoading !== false) {
        toggleFullscreenLoading(false);
      }
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
