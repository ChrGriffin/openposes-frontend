<script>
import PoseGrid from "@/components/PoseGrid.vue";
import PoseFilters from "@/components/PoseFilters.vue";
import { poses } from "@/consts/consts";

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
  <section>
    <pose-filters />
    <pose-grid :poses="poses" />
  </section>

  <section>
    <article>
      <div>
        <div>
          <h2>OpenPose & ControlNet</h2>
          <p><a target="_blank" href="https://github.com/lllyasviel/ControlNet">ControlNet</a> is a way of adding <a target="_blank" href="https://arxiv.org/abs/2302.05543">conditional control</a> to the output of Text-to-Image diffusion models, such as Stable Diffusion. In layman's terms, it allows us to direct the model to maintain or prioritize a particular pattern when generating output. There are many applications of this idea, but an incredibly common use case is generating a consistent pose for human subjects.</p>
          <p><a target="_blank" href="https://github.com/CMU-Perceptual-Computing-Lab/openpose">OpenPose</a>, meanwhile, is a human pose detection library that works by detecting multiple "keypoints" in a the human body and converting that information into a consistent "skeleton" representing the person.</p>
          <p>Combine the two and we now have the ability to use OpenPose skeletons to control the pose of subjects in Stable Diffusion outputs, removing a great deal of the randomness and allowing us to be more intentional with our outputs than ever before.</p>
          <p>Of course, OpenPose is not the only available model for ControlNot. Multiple other models, such as Semantic Suggestion, User Scribbles, and HED Boundary are available. Consult the <a target="_blank" href="https://github.com/lllyasviel/ControlNet">ControlNet GitHub page</a> for a full list.</p>
          <h2>This Site</h2>
          <p>These OpenPose skeletons are provided free of charge, and can be freely used in any project, commercial or otherwise. That said, we do encourage you to share the site if you find these resources useful, as it will help others do the same!</p>
          <p>If you do want to help us out, do feel free to <a target="_blank" href="https://www.paypal.com/paypalme/peregrinestudios/1">donate a dollar via PayPal</a>. While the site itself is hosted on <a target="_blank" href="https://www.netlify.com/">Netlify</a>'s free tier, donations certainly help with the domain name and AWS data transfer costs.</p>
          <p>If you're familiar with <a target="_blank" href="https://github.com/AUTOMATIC1111/stable-diffusion-webui">Automatic1111's WebUI</a> for Stable Diffusion, getting started with ControlNet and OpenPose should be straightforward. If you're lost, take a look at <a target="_blank" href="https://www.reddit.com/r/StableDiffusion/comments/119o71b/a1111_controlnet_extension_explained_like_youre_5/">this Reddit post</a> to point you in the right direction.</p>
        </div>
      </div>

      <div>
        <img src="https://openposes-storage.s3.ca-central-1.amazonaws.com/summer_01.jpg" alt="image of a woman rendered using controlnet" />
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  section:nth-of-type(2) {
    background-color: #313136;
  }

  article {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4rem;

    @media (min-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
    }

    > div {
      display: flex;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 100%;
        display: none;

        @media (min-width: 1280px) {
          display: block;
        }
      }
    }
  }
</style>