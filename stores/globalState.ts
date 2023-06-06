import { defineStore } from 'pinia';

export const useGlobalStateStore = defineStore('globalState', {
  state: () => ({
    isShowFullscreenLoading: false,
    loadingStartTime: 0,
    lastRoute: '/'
  }),
  actions: {
    async toggleFullscreenLoading(state = undefined) {
      const minimumWaitTime = 1300; // 最小等待时间，单位：毫秒

      if (state === false || !this.isShowFullscreenLoading === false) {
        const currentTime = new Date().getTime();
        const loadingTimeDiff = currentTime - this.loadingStartTime;

        if (loadingTimeDiff < minimumWaitTime) {
          const additionalWaitTime = minimumWaitTime - loadingTimeDiff;
          await new Promise((resolve) => setTimeout(resolve, additionalWaitTime));
        }
      }

      this.isShowFullscreenLoading =
        typeof state === 'boolean' ? state : !this.isShowFullscreenLoading;
      
      if (this.isShowFullscreenLoading) {
        this.loadingStartTime = new Date().getTime();
      }
    },
    recordLastRoute(path: string) {
      this.lastRoute = path;
    }
  }
});
