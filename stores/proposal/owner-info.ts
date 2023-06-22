import { defineStore } from 'pinia';

export const useProposalStore = defineStore('ownerInfo', {
  state: (): { name: string; email: string; mobile: string; identity: string; registerName: string; teamName: string; introduction: string; site: string } => ({
    name: '',
    email: '',
    mobile: '',
    identity: '',
    registerName: '',
    teamName: '',
    introduction: '',
    site: '',
  }),

  actions: {
    saveData(data: { name: string; email: string; mobile: string; identity: string; registerName: string; teamName: string; introduction: string; site: string }) {
      this.name = data.name;
      this.email = data.email;
      this.mobile = data.mobile;
      this.identity = data.identity;
      this.registerName = data.registerName;
      this.teamName = data.teamName;
      this.introduction = data.introduction;
      this.site = data.site;
    }
  },
  persist: true
});
