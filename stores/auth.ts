import { defineStore } from 'pinia';
import { useGlobalStateStore } from './globalState'

interface UserTokenStorage {
  value: string;
  expired: number;
}

const { signin, signup } = useApi();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    _token: {} as UserTokenStorage
  }),
  actions: {
    async handleSignIn(_data) {
      const { data } = await signin(_data);
      const res = data.value;
      if (res && res?.ok) {
        this._token = {
          value: res.data.token,
          expired: Date.now() + Number(res.data.expired) * 1000
        };
        navigateTo(useGlobalStateStore().lastRoute);
      }
    },
    async handleSignUp(_data) {
      const { data } = await signup(_data);
      const res = data.value;
      if (res && res?.ok) {
        navigateTo('/users/signin');
      }
    },
    handleSignOut() {
      this._token = {} as UserTokenStorage;
      navigateTo('/users/signin');
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
