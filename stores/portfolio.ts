import { defineStore } from 'pinia';
import type { Project } from '~/types';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    selectedProject: null as Project | null,
    isModalOpen: false,
  }),
  actions: {
    selectProject(project: Project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    closeProjectModal() {
      this.isModalOpen = false;
    }
  }
});
