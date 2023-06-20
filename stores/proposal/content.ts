import { defineStore } from 'pinia';

type FAQ = {
  question: string;
  answer: string;
};

export const useProposalStore = defineStore('content', {
  state: (): { content: string; risk: string; faqs: FAQ[] } => ({
    content: '',
    risk: '',
    faqs: [
      {
        question: '',
        answer: ''
      }
    ]
  }),

  actions: {
    saveData(data: { content: string; risk: string; faqs: FAQ[] }) {
      this.content = data.content;
      this.risk = data.risk;
      this.faqs = data.faqs;
    }
  },
  persist: true
});
