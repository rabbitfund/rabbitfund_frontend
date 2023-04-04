import { useCounterStore } from '@/stores/counter';
export default defineNuxtRouteMiddleware(() => {
  const counterStore = useCounterStore();
  if (counterStore.count < 0) {
    return abortNavigation('abortNavigation! count need >= 0');
  }
});
