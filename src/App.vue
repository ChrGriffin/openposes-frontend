<script>
import { RouterView } from 'vue-router'
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
          'summer_glau',
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
              <img v-for="model in models" :key="model" @click="(modelStore.setSelectedModel(model))" :class="(modelStore.selectedModel === model ? 'selected' : '')" :src="`https://openposes-storage.s3.ca-central-1.amazonaws.com/models/${model}.jpg`" :alt="model">
            </div>
          </button>

          <a target="_blank" href="https://openposes-storage.s3.ca-central-1.amazonaws.com/poses.zip" download="poses.zip">
            <button>
              <span>Download All</span>
              <i class="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <RouterView @click="(selectModelModalOpen = false)" />
  </main>

  <footer>
    <span class="powered">Powered by:
      <a target="_blank" href="https://vuejs.org/"><img src="https://openposes-storage.s3.ca-central-1.amazonaws.com/icons/vue.png" alt="Vue" /></a>
      <a target="_blank" href="https://www.netlify.com/"><img src="https://openposes-storage.s3.ca-central-1.amazonaws.com/icons/netlify.png" alt="Netlify" /></a>
      <a target="_blank" href="https://aws.amazon.com/"><img src="https://openposes-storage.s3.ca-central-1.amazonaws.com/icons/aws.png" alt="AWS" /></a>
    </span>
    <span>Created by <a target="_blank" href="https://christiangriffin.ca/">Christian Griffin</a> in 2023.</span>
  </footer>
</template>

<style lang="scss">
  @import "reset-css";
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;500&display=swap");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css");

  body {
    background-color: #39393f;
    font-family: 'Roboto Mono', monospace;
    padding-top: 1rem;
    color: #dedede;
  }

  button {
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: 0;
    color: #dedede;
    transition: color 0.1s ease, background-color 0.1s ease;

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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #0a0a0a;
    color: #dedede;
    display: flex;
    justify-content: space-between;
    z-index: 99;

    h1 {
      display: inline-block;
      padding: 1rem;
      font-size: 1.1rem;
    }

    .subtitle {
      font-size: 0.75rem;
      font-style: italic;
      display: none;

      @media (min-width: 1024px) {
        display: inline;
      }
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

  footer {
    background-color: #0a0a0a;
    color: #dedede;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    span {
      font-size: 0.8rem;

      &.powered {
        display: flex;

        a {
          text-decoration: none;
          display: inline-block;
          margin-left: 0.75rem;

          img {
            max-height: 1rem;
          }
        }
      }
    }
  }

  section {
    padding: 3rem 1rem;
  }

  article {
    margin: 0 auto;
    max-width: 100rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;

    &:not(:first-child) {
      margin-top: 3rem;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.3;
    font-size: 1.1rem;
  }

  a {
    color: #dedede;
    text-decoration: underline;
  }
</style>
