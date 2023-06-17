import { defineStore } from 'pinia';

export const useProposalStore = defineStore('options', {
  state: () => ({
    回饋方案名稱: '',
    回饋金額: '',
    回饋數量限制: '',
    預計出貨時間: '',
    回饋起始時間: '',
    回饋結束時間: '',
    問題1: '',
    答案選項1: '',
  }),
  actions: {
    setProposal(proposalInfo: any) {
      this.回饋方案名稱 = proposalInfo.回饋方案名稱;
      this.回饋金額 = proposalInfo.回饋金額;
      this.回饋數量限制 = proposalInfo.回饋數量限制;
      this.預計出貨時間 = proposalInfo.預計出貨時間;
      this.回饋起始時間 = proposalInfo.回饋起始時間;
      this.回饋結束時間 = proposalInfo.回饋結束時間;
      this.問題1 = proposalInfo.問題1;
      this.答案選項1 = proposalInfo.答案選項1;
    }
  },
  persist: true
});
