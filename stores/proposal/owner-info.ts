import { defineStore } from 'pinia';

export const useProposalStore = defineStore('ownerInfo', {
  state: () => ({
    提案負責人姓名: '',
    電子郵件: '',
    行動電話: '',
    提案人身分: '',
    登記名稱: '',
    團隊名稱: '',
    自我介紹: '',
    相關網站: '',
  }),
  actions: {
    setProposal(proposalInfo: any) {
      this.提案負責人姓名 = proposalInfo.提案負責人姓名;
      this.電子郵件 = proposalInfo.電子郵件;
      this.行動電話 = proposalInfo.行動電話;
      this.提案人身分 = proposalInfo.提案人身分;
      this.登記名稱 = proposalInfo.登記名稱;
      this.團隊名稱 = proposalInfo.團隊名稱;
      this.自我介紹 = proposalInfo.自我介紹;
      this.相關網站 = proposalInfo.相關網站;
    }
  },
  persist: true
});
