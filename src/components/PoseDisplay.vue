<script>
import {useModelStore} from '@/stores/model';
import LoaderIcon from "@/components/icons/LoaderIcon.vue";
import {KEYPOINT_PAIRS, KEYPOINTS} from "@/consts/consts";
import JsonIcon from "@/components/icons/JsonIcon.vue";
import ImageIcon from "@/components/icons/ImageIcon.vue";

export default {
  name: "PoseDisplay",
  components: {ImageIcon, JsonIcon, LoaderIcon},
  setup: function () {
    const modelStore = useModelStore();
    return {modelStore};
  },
  props: {
    pose: {
      type: Object,
      required: true,
    }
  },
  data: function () {
    return {
      json: null,
      image: null,
      downloadImage: null,
    }
  },
  mounted: function () {
    this.loadPoseJson().then(() => this.renderOpenPose());
  },
  methods: {
    loadPoseJson: async function () {
      const response = await fetch(
          `https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/${this.pose.name}.json`
      );
      this.json = await response.json();
    },
    renderOpenPose: function () {
      const transparentCanvas = this.makeCanvas(this.json[0].canvas_width, this.json[0].canvas_height);
      const transparentCtx = transparentCanvas.getContext('2d');
      this.drawPose(transparentCtx);

      const blackCanvas = this.makeCanvas(this.json[0].canvas_width, this.json[0].canvas_height);
      const blackCtx = blackCanvas.getContext('2d');
      this.drawBackground(blackCtx, this.json[0].canvas_width, this.json[0].canvas_height)

      const transparentPoseSrc = transparentCanvas.toDataURL('image/png');
      this.addImageOverlayToCanvas(blackCtx, transparentPoseSrc);

      this.downloadImage = blackCanvas.toDataURL('image/png');
      this.image = transparentPoseSrc
    },
    makeCanvas: function (width, height) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      return canvas;
    },
    drawPose: function (ctx) {
      const keypoints = new Array(18)
          .fill('')
          .map((_, i) => this.json[0].people[0].pose_keypoints_2d.slice(i * 3, (i + 1) * 3));

      keypoints.forEach((keypoint, index) => {
        this.drawCircle(ctx, {x: keypoint[0], y: keypoint[1]}, KEYPOINTS[index].color);
      });

      Object.keys(KEYPOINT_PAIRS).forEach((keypointPair) => {
        const [keypointFromIndex, keypointToIndex] = keypointPair.split('-');
        this.drawLine(
            ctx,
            {x: keypoints[keypointFromIndex][0], y: keypoints[keypointFromIndex][1]},
            {x: keypoints[keypointToIndex][0], y: keypoints[keypointToIndex][1]},
            KEYPOINT_PAIRS[keypointPair].color
        );
      });
    },
    drawBackground(ctx, width, height) {
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fill();
    },
    drawCircle: function (ctx, center, color) {
      ctx.beginPath();
      ctx.arc(center.x, center.y, 7, 0, 2 * Math.PI);
      ctx.fillStyle = color
      ctx.fill();
    },
    drawLine: function (ctx, from, to, color) {
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 9;
      ctx.stroke();
    },
    addImageOverlayToCanvas: function (ctx, imageSrc) {
      const transparentPoseImage = new Image();
      transparentPoseImage.src = imageSrc;
      ctx.drawImage(transparentPoseImage, 0, 0);
    }
  }
};
</script>

<template>
  <div class="pose-item">
    <img
        :src="`https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/${this.modelStore.selectedModel}/jpg/${pose.name}.jpg`"
        :alt="`${this.modelStore.selectedModel}_${pose.name}`"/>
    <img v-if="image" :src="image" :alt="pose.name"/>
    <div v-if="image" class="download">
      <h3>Download</h3>
      <div>
        <a target="_blank" :href="`https://openposes-storage.s3.ca-central-1.amazonaws.com/poses/${pose.name}.json`"
           download="`${pose.name}.json`"><json-icon />JSON</a>
        <a target="_blank" :href="downloadImage" :download="`${pose.name}.png`"><image-icon/>Image</a>
      </div>
    </div>
    <div v-if="!image && !downloadImage" class="loading">
      <loader-icon/>
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
    opacity: 0.9;
    transition: opacity 0.1s ease;

    &:nth-child(2) {
      opacity: 0.75;
    }
  }

  .download {
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.1s ease;

    h3 {
      padding-left: 15px;
      font-size: 1.3rem;
    }

    > div {
      border-top: 2px solid #dedede;
      margin-top: 15px;
      display: flex;
      text-align: center;

      a {
        display: block;
        padding: 10px 0;
        flex-grow: 1;
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.5);
        transition: color 0.1s ease, background-color 0.05s ease;

        svg {
          display: inline;
          height: 0.8rem;
          padding-right: 10px;
          color: inherit;
        }

        &:first-child {
          border-right: 1px solid #dedede;
        }

        &:last-child {
          border-left: 1px solid #dedede;
        }

        &:hover {
          color: #313136;
          background-color: #dedede;
          transition: color 0.1s ease, background-color 0.05s ease;
        }
      }
    }
  }

  &:hover {
    img {
      opacity: 0.3;

      &:nth-child(2) {
        opacity: 1;
      }
    }

    > div {
      opacity: 1;
    }
  }

  .loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #313136;

    svg {
      position: absolute;
      top: calc(50% - 50px);
      left: calc(50% - 50px);
      width: 100px;
      height: 100px;
    }
  }
}
</style>
