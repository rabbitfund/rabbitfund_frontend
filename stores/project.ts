import { defineStore } from 'pinia';

type Option = {
  option_content: string;
  option_cover: string;
  option_name: string;
  option_price: number;
  _id: string;
};

export const useProjectStore = defineStore('project', {
  state: () => ({
    content: '',
    option: [] as Option[],
    risks: '',
    qas: [],
    news: []
  }),
  actions: {
    setProject(projectInfo: any) {
      this.content = projectInfo.project_content;
      this.option = projectInfo.option;
      this.risks = projectInfo.project_risks;
      this.qas = projectInfo.qas;
      this.news = projectInfo.news;
    }
  }
  // getters: {
  //   getOption: (state) => state.option,
  //   getContent: (state) => state.content
  // }
});
