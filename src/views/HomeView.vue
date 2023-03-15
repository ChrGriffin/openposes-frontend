<script>
import PoseGrid from "../components/PoseGrid.vue";
import PoseFilters from "../components/PoseFilters.vue";
import { poses } from "../consts/consts";

export default {
  name: "HomeView",
  components: {PoseFilters, PoseGrid },
  data: function () {
    return {
      poses: poses
    };
  },
};
</script>

<template>
  <pose-filters />
  <pose-grid :poses="poses" />
</template>
