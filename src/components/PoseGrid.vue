<script>
import PoseDisplay from "@/components/PoseDisplay.vue";
import { useFilterStore } from  '@/stores/filter';

export default {
  name: "PoseGrid",
  components: {PoseDisplay},
  props: {
    poses: {
      type: Array,
      required: true,
    }
  },
  setup: function () {
    const filterStore = useFilterStore();
    return { filterStore };
  },
  computed: {
    filteredPoses: function () {
      if(!this.filterStore.activeFilters.length) {
        return this.poses;
      }

      return this.poses.filter(pose => {
        return !!this.filterStore.activeFilters
            .filter(filter => pose.tags.includes(filter))
            .length;
      });
    }
  },
};
</script>

<template>
  <div class="grid">
    <pose-display v-for="pose in filteredPoses" :key="pose" :pose="pose" />
  </div>
</template>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    @media (min-width: 712px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1280px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
</style>
