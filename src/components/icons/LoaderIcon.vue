<script>
export default {
  name: "LoaderIcon",
};
</script>

<template>
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1,0,0,1,-0.00020711,-0.00081857)">
      <g transform="matrix(4.14035,0,0,4.14035,-328.528,-150.623)">
        <rect x="85.416" y="40.14" width="36.17" height="4.614" style="fill:rgb(153,0,102);"/>
      </g>
      <g transform="matrix(-7.60569e-16,-4.14035,4.14035,-7.60569e-16,-150.623,528.528)">
        <rect x="85.416" y="40.14" width="36.17" height="4.614" style="fill:rgb(153,102,0);"/>
      </g>
      <g transform="matrix(-4.14035,-4.12295e-16,4.12295e-16,-4.14035,528.528,350.623)">
        <rect x="85.416" y="40.14" width="36.17" height="4.614" style="fill:rgb(0,153,0);"/>
      </g>
      <g transform="matrix(-6.65819e-16,4.14035,-4.14035,-6.65819e-16,350.623,-328.528)">
        <rect x="85.416" y="40.14" width="36.17" height="4.614" style="fill:rgb(0,0,153);"/>
      </g>
      <g transform="matrix(1.22887,0,0,1.22887,128.677,-27.4165)">
        <circle cx="37.596" cy="42.754" r="20.443" style="fill:rgb(255,255,0);"/>
      </g>
      <g transform="matrix(1.22887,0,0,1.22887,-21.0786,-27.4165)">
        <circle cx="37.596" cy="42.754" r="20.443" style="fill:rgb(98,254,0);"/>
      </g>
      <g transform="matrix(-2.2574e-16,-1.22887,1.22887,-2.2574e-16,-27.4165,221.079)">
        <circle cx="37.596" cy="42.754" r="20.443" style="fill:rgb(255,0,0);"/>
      </g>
      <g transform="matrix(-1.22887,-1.22371e-16,1.22371e-16,-1.22887,221.079,227.417)">
        <circle cx="37.596" cy="42.754" r="20.443" style="fill:rgb(255,85,0);"/>
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  opacity: 0.75;
  animation-name: spin;
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
}
</style>