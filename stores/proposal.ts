import { defineStore } from 'pinia';

export const useCounterStore = defineStore('proposal', {
  state: () => ({
    step1: {}
  }),
  actions: {},
  getters: {
    step1Status: (state) => {
      console.log(state);
      return true;
    }
  }
});
