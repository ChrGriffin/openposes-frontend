<script>
import { RouterLink, RouterView } from 'vue-router'
import { useModelStore } from "./stores/model";

export default {
  name: "App",
  components: { RouterView },
  setup: function () {
    const modelStore = useModelStore();
    return { modelStore };
  },
  data: function () {
    return {
      selectModelModalOpen: false,
      models: [
          'emma_watson',
          'idris_elba',
          'salma_hayek',
          'henry_cavill'
      ],
    };
  },
  computed: {
    selectedModelName: function () {
      return this.modelStore.selectedModel
          .split('_')
          .map(word => word[0].toUpperCase() + word.substring(1))
          .join(' ');
    }
  },
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <h1>OpenPoses</h1>
          <span class="subtitle">A collection of poses for OpenPose and Stable Diffusion</span>
        </div>

        <div>
          <button :class="`selected-model${selectModelModalOpen ? ' selected' : ''}`" @click="(selectModelModalOpen = !selectModelModalOpen)">
            <span>Model: {{ selectedModelName }}</span>
            <i :class="`fa-solid fa-caret-${selectModelModalOpen ? 'up' : 'down'}`"></i>
            <div :class="`model-modal${selectModelModalOpen ? '' : ' hidden'}`">
              <img v-for="model in models" :key="model" @click="(modelStore.setSelectedModel(model))" :class="(modelStore.selectedModel === model ? 'selected' : '')" :src="`https://openposes-storage.s3.ca-central-1.amazonaws.com/${model}.png`" :alt="model">
            </div>
          </button>

          <button>
            <span>Download All</span>
            <i class="fa-solid fa-download"></i>
          </button>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <RouterView @click="(selectModelModalOpen = false)" />
  </main>
</template>

<style lang="scss">
  @import "reset-css";
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;500&display=swap");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css");

  body {
    background-color: #43454b;
    font-family: 'Roboto Mono', monospace;
  }

  button {
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: 0;
    color: #dedede;

    i {
      padding-left: 0.75rem;
    }

    &:hover, &.selected {
      color: #0a0a0a;
      background-color: #dedede;
      cursor: pointer;
    }
  }

  nav {
    background-color: #0a0a0a;
    color: #dedede;
    display: flex;
    justify-content: space-between;

    h1 {
      display: inline-block;
      padding: 1rem;
      font-size: 1.1rem;
    }

    .subtitle {
      font-size: 0.75rem;
      font-style: italic;
    }

    .model-modal {
      position: absolute;
      top: 100%;
      right: 0;
      padding: 10px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      z-index: 99;
      background-color: #dedede;

      &.hidden {
        display: none;
      }

      img {
        width: 200px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        opacity: 0.5;

        &.selected {
          border: 5px solid #0a0a0a;
          opacity: 1;
        }

        &:hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    }
  }

  main {
    padding: 1rem;
  }
</style>
