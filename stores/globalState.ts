import { defineStore } from 'pinia';

export const useGlobalStateStore = defineStore('globalState', {
  // stores: [useUserStore],
  state: () => ({
    isShowFullscreenLoading: false
  }),
  actions: {
    toggleFullscreenLoading(state = undefined) {
      this.isShowFullscreenLoading =
        typeof state === 'boolean' ? state : !this.isShowFullscreenLoading;
    }
  }
});
