import { defineStore } from 'pinia';

type SPECIFICATION = {
  question: string;
  answer: string;
};

type OPTION = {
  name: string;
  price: string;
  quantity: string;
  deliveryDate: string;
  start: string;
  end: string;
  specifications: SPECIFICATION[];
};

const emptyOption: OPTION = {
  name: '',
  price: '',
  quantity: '',
  deliveryDate: '',
  start: '',
  end: '',
  specifications: [
    {
      question: '',
      answer: ''
    }
  ]
};

export const useProposalStore = defineStore('options', {
  state: (): { options: OPTION[] } => ({
    options: [
      {
        name: '',
        price: '',
        quantity: '',
        deliveryDate: '',
        start: '',
        end: '',
        specifications: [
          {
            question: '',
            answer: ''
          }
        ]
      }
    ]
  }),

  actions: {
    addEmptyOption() {
      this.options.push(JSON.parse(JSON.stringify(emptyOption)));
    },
    saveData(data: { options: OPTION[] }) {
      this.options = data.options;
    }
  },
  persist: true
});
