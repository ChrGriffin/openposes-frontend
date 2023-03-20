<script>
import { useModelStore } from  '@/stores/model';

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
  <a target="_blank" :href="`https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/${pose.name}.png`" :download="`${pose.name}.png`" class="pose-item">
    <img :src="`https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/${this.modelStore.selectedModel}/jpg/${pose.name}.jpg`"
         :alt="`${this.modelStore.selectedModel}_${pose.name}`" />
    <img :src="`https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/transparent/${pose.name}.png`"
         :alt="pose.name" />
    <span>Click to Download</span>
  </a>
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
      opacity: 0.9;
      transition: opacity 0.1s ease;

      &:nth-child(2) {
        opacity: 0.75;
      }
    }

    span {
      position: absolute;
      width: 100%;
      bottom: 10px;
      text-align: center;
      opacity: 0;
      transition: opacity 0.1s ease;
    }

    &:hover {
      img {
        opacity: 0.3;

        &:nth-child(2) {
          opacity: 1;
        }
      }

      span {
        opacity: 1;
      }
    }
  }
</style>
