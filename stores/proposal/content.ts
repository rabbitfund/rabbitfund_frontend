import { defineStore } from 'pinia';

export const useProposalStore = defineStore('content', {
  state: () => ({
    專案內容: '',
    風險與變數: '',
    FaQs: [{
      常見問題1: '',
      問題回覆1: '',
    }],

    常見問題2: '',
    問題回覆2: '',
  }),
  actions: {
    setProposal(proposalInfo: any) {
      this.專案內容 = proposalInfo.專案內容;
      this.風險與變數 = proposalInfo.風險與變數;
      this.FaQs[0].常見問題1 = proposalInfo.常見問題1;
      this.FaQs[0].問題回覆1 = proposalInfo.問題回覆1;
      this.常見問題2 = proposalInfo.常見問題2;
      this.問題回覆2 = proposalInfo.問題回覆2;
    }
  },
  persist: true
});
