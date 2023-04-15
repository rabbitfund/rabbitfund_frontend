import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: ''
  }),
  actions: {
    login(token: string) {
      this.token = token;
      this.isAuthenticated = true;
    }
  },
  getters: {}
});
