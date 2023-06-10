import { useGlobalStateStore } from '@/stores/globalState';

const regex = /^\/users\//;
export default defineNuxtRouteMiddleware((to, from) => {
  const globalState = useGlobalStateStore();
  if (to.path === '/users/signin') {
    let prevPath = from.path;
    // 檢查上一個路由是否為 /users/ 相關
    if (regex.test(from.path)) {
      prevPath = '/';
    }

    globalState.recordLastRoute(prevPath);
  }
});
