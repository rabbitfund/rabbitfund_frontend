import { useGlobalStateStore } from '@/stores/globalState';

const pageWithoutLoading = ['/users/signin', '/users/signup', '/proposal'];
export default defineNuxtRouteMiddleware((to) => {
  const globalState = useGlobalStateStore();
  if (process.client) {
    if (!pageWithoutLoading.includes(to.path)) {
      globalState.addLoadingRequest();
      setTimeout(() => {
        globalState.removeLoadingRequest();
      }, 1000);
    }
  }
});
