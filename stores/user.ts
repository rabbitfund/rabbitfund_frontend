import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null
  }),
  actions: {
    handleGetUserData(data) {
      const res = data.value;
      if (res && res.ok) {
        this.userInfo = res.data;
      }
    }
  },

  getters: {
    token(): string | undefined {
      const { value, expired = 0 } = this._token;
      console.log(value, expired);
      if (Date.now() > expired) return;
      return value;
    }
  },

  persist: true
});
