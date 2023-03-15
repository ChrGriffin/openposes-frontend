import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: () => ({
    activeFilters: localStorage.getItem("activeFilters")
        ? JSON.parse(localStorage.getItem("activeFilters"))
        : [],
  }),
  actions: {
    addFilter(filter) {
      if(this.activeFilters.includes(filter)) {
        return;
      }

      this.activeFilters.push(filter);
      localStorage.setItem("activeFilters", JSON.stringify(this.activeFilters));
    },
    removeFilter(filter) {
      if(!this.activeFilters.includes(filter)) {
        return;
      }

      const index = this.activeFilters.indexOf(filter);
      this.activeFilters.splice(index, 1);
      localStorage.setItem("activeFilters", JSON.stringify(this.activeFilters));
    },
  },
})