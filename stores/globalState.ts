import { defineStore } from 'pinia';

export const useGlobalStateStore = defineStore('globalState', {
  state: () => ({
    loadingRequest: [],
    loadingStartTime: 0,
    lastRoute: '/'
  }),
  actions: {
    addLoadingRequest(info = {}) {
      this.loadingRequest.push(info);
    },
    removeLoadingRequest() {
      this.loadingRequest.pop();
    },
    recordLastRoute(path) {
      this.lastRoute = path;
    }
  },
  getters: {
    // 監聽 loadingRequest 的變化，如果有不是空的，就顯示 loading
    isShowFullscreenLoading: (state) => Object.keys(state.loadingRequest).length > 0
  }
});
