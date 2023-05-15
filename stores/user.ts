import { defineStore } from 'pinia';

const { getUserDetail } = useApi();

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null
  }),
  actions: {
    async handleGetUserData() {
      const { data } = await getUserDetail();
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
