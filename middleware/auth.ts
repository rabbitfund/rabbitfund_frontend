import { useAuthStore } from '@/stores/auth';
export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  console.log(authStore);
  console.log(authStore?.token);
  if (!authStore.token) {
    return navigateTo('/signin');
  }
});
