import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    content: '',
    option: [],
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
