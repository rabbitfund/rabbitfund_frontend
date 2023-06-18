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
    // FIXME: 可以寫在一起，之後再說
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
    title: '',
    content: '',
    option: [] as Option[],
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
