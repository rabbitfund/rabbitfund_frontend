import { useAuthStore } from '@/stores/auth';

export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const { API_BASE } = runtimeConfig.public;

  globalThis.$fetch = $fetch.create({
    baseURL: API_BASE,
    onRequest({ options }) {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated) {
        options.headers = { Authorization: `Bearer ${authStore.token}` };
        console.log(options);
      } else {
        console.log('Not authenticated');
      }
    },
    onRequestError({ error }) {
      console.error(error);
    }
  });
});
