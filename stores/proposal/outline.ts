import { defineStore } from 'pinia';

export const useProposalStore = defineStore('outline', {
  state: () => ({
    專案標題: '',
    內容摘要: '',
    專案封面: {},
    開始時間: '',
    結束時間: '',
    專案類別: 0,
    募資目標金額: '',
  }),
  actions: {
    setProposal(proposalInfo: any) {
      this.專案標題 = proposalInfo.專案標題;
      this.內容摘要 = proposalInfo.內容摘要;
      this.專案封面 = proposalInfo.專案封面;
      this.開始時間 = proposalInfo.開始時間;
      this.結束時間 = proposalInfo.結束時間;
      this.專案類別 = proposalInfo.專案類別;
      this.募資目標金額 = proposalInfo.募資目標金額;
    }
  },
  persist: true
});
