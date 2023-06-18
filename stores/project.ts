import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    title: '',
    content: '',
    projectInfo: {
      title: '',
      category: '',
      content: '',
      target: '',
      startDate: 0,
      endDate: 0,
      progress: 0,
      cover: ''
    },
    option: [],
    risks: '',
    qas: [],
    news: []
  }),
  actions: {
    setProject(projectInfo: any) {
      this.projectInfo = projectInfo;
      this.title = projectInfo.project_title;
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
