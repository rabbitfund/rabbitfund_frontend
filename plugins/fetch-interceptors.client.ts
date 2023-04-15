import { useAuthStore } from '@/stores/auth';

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = $fetch.create({
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
