<script>
import { POSES } from "@/consts/consts";
import { useFilterStore } from  '@/stores/filter';

export default {
  name: "PoseFilters",
  data: function () {
    return {
      tags: [...new Set(POSES.flatMap(pose => pose.tags))]
    }
  },
  setup: function () {
    const filterStore = useFilterStore();
    return { filterStore };
  },
  methods: {
    toggleFilter(filter) {
      if(this.filterStore.activeFilters.includes(filter)) {
        this.filterStore.removeFilter(filter);
        return;
      }

      this.filterStore.addFilter(filter);
    },
    tagName(tagSlug) {
      return tagSlug.split('_')
          .map(word => word[0].toUpperCase() + word.substring(1))
          .join(' ');
    },
  },
};
</script>

<template>
  <div v-for="tag in tags" :key="tag" @click="toggleFilter(tag)" :class="(filterStore.activeFilters.includes(tag) ? 'active' : '')">
    {{ tagName(tag) }}
  </div>
</template>

<style lang="scss" scoped>
  div {
    font-size: 0.75rem;
    color: #dedede;
    border: 2px solid #dedede;
    background-color: #0a0a0a;
    display: inline-block;
    padding: 0.65rem 0.85rem;
    margin: 0 0.75rem 1rem 0;
    opacity: 0.5;
    transition: opacity 0.1s ease;

    &:hover, &.active {
      cursor: pointer;
      opacity: 1;
    }
  }
</style>
