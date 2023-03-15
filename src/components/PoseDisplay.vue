<script>
import { useModelStore } from  '../stores/model';

export default {
  name: "PoseDisplay",
  props: {
    pose: {
      type: Object,
      required: true,
    }
  },
  setup: function () {
    const modelStore = useModelStore();
    return { modelStore };
  },
};
</script>

<template>
  <div class="pose-item">
    <img :src="`https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/${this.modelStore.selectedModel}/${pose.name}.jpg`" :alt="`${this.modelStore.selectedModel}_${pose.name}`" />
    <img :src="`https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/${pose.name}.png`" :alt="pose.name" />
    <div class="button-container">
      <a href="#">Download</a>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .pose-item {
    position: relative;
    display: inline-block;
    background-color: black;
    padding-bottom: 100%;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &:nth-child(2) {
        opacity: 0.3;
        transition: opacity 0.1s ease;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .button-container {
      position: absolute;
      width: 100%;
      bottom: 3px;
      text-align: center;

      a {

      }
    }
  }
</style>
