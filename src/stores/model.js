import { defineStore } from 'pinia'

export const useModelStore = defineStore('model', {
  state: () => ({
    selectedModel: localStorage.getItem("selectedModel")
        ? localStorage.getItem("selectedModel")
        : 'emma_watson',
  }),
  actions: {
    setSelectedModel(model) {
      this.selectedModel = model;
      localStorage.setItem("selectedModel", model);
    },
  },
})