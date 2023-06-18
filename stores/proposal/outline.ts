import { defineStore } from 'pinia';

export const useProposalStore = defineStore('outline', {
  state: (): { title: string; summary: string; cover: object; startDate: string; endDate: string; category: string; target: string; video: string } => ({
    title: '',
    summary: '',
    cover: {},
    startDate: '',
    endDate: '',
    category: '',
    target: '',
    video: '',
  }),

  actions: {
    saveData(data: { title: string; summary: string; cover: object; startDate: string; endDate: string; category: string; target: string; video: string  }) {
      this.title = data.title;
      this.summary = data.summary;
      this.cover = data.cover;
      this.startDate = data.startDate;
      this.endDate = data.endDate;
      this.category = data.category;
      this.target = data.target;
      this.video = data.video;
    }
  },
  persist: true
});
