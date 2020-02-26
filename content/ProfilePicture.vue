<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.92 308.349">
    <filter id="blurMe">
      <feGaussianBlur  stdDeviation="5" />
    </filter>
    <g id="Layer_2" data-name="Layer 2">
      <g id="little">
        <path
          class="cls-1"
          d="M141.41,308.349,11.916,224.29l8.05-154.175L157.51,0,287,84.059l-8.051,154.174Zm-123.322-87.2L141.771,301.43l131.372-66.969,7.689-147.255L157.149,6.919,25.777,73.888Z"
        />
      </g>
      <g id="big">
        <path
          class="cls-2"
          d="M224.19,283.611H74.73L0,154.174,74.73,24.738H224.19l74.73,129.436Zm-137.913-20H212.644l63.182-109.437L212.644,44.738H86.277L23.094,154.174Z"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "ProfilePicture"
};
</script>

<style scoped>
  svg{
    grid-area: 1/1/1/1;
  }
#little {
  transform: scale(0.9);
  transform-origin: center;
}
#big {
  transform: scale(0.9);
  transform-origin: center;
}
.cls-1 {
  fill: #037fb8;
  animation: wildRotate infinite 220s linear reverse;
  transform-origin: center;
}

.cls-2 {
  fill: black;
  animation: rotate infinite 200s linear;
  transform-origin: center;
}
</style>
