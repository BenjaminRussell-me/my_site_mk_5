<template>
  <div
    class="holder"
    v-on:mouseover="enter()"
    v-on:focus="enter()"
    v-on:mouseleave="leave()"
    v-on:click="click()"
  >
    <svg
      v-bind:style="{
        animation:
          animationName + rotateSpeed + 's' + animationTimes + ' linear'
      }"
      class="hex-svg"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 264.381 264.381"
    >
      <filter id="blurMe">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>

      <polygon
        class="hex-svg-under"
        v-bind:style="{
          animation: 'wiggle ' + rotateSpeed + 's' + ' infinite linear',
          stroke: color
        }"
        points="183.307 43.654 81.074 43.654 29.957 132.19 81.074 220.727 183.307 220.727 234.423 132.19 183.307 43.654"
        filter="url(#blurMe)"
      />
      <polygon
        id="hex-svg-over"
        points="183.307 43.654 81.074 43.654 29.957 132.19 81.074 220.727 183.307 220.727 234.423 132.19 183.307 43.654"
      />
      <circle class="circle" cx="132.19" cy="132.19" r="127.69" />
    </svg>
    <span v-bind:style="{ color: color }" class="link-text">test</span>
  </div>
</template>

<script>
export default {
  name: "Hex1",
  props: ["color"],
  data: function() {
    return {
      animationName: "rotate ",
      animationTimes: " infinite",
      rotateSpeedArr: [13, 14, 15, 16, 17, 18],
      rotateSpeed: 10,
      count: 0,
      pages: [1, 2, 3, 4]
    };
  },

  methods: {
    enter: function() {
      this.rotateSpeed = 0.7;
      this.animationName = "activeRotate ";
      this.animationTimes = " infinite";
      clearTimeout(this.leave);
    },
    leave: function() {
      this.rotateSpeed = 1;
      this.animationName = "leaveRotate ";
      this.animationTimes = " infinite";
      setTimeout(() => {
        if (this.rotateSpeed === 1) {
          this.rotateSpeed = 15;
          this.animationName = "rotate ";
        }
      }, 1000);
    },
    click: function() {
      this.rotateSpeed = 0.7;
      this.animationName = "clickRotate ";
      this.animationTimes = "";
    }
  },
  created: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.hex-svg {
  width: 100%;
  transition: 0.5s;
  &:focus {
    outline: none;
  }
  #hex-svg-over {
    z-index: 9999;
    fill: rgba(0, 255, 244, 0);
    stroke: #231f20;
    stroke-miterlimit: 10;
    stroke-width: 13px;
  }
  cursor: pointer;
  circle {
    display: none;
  }
}
.hex-svg-under {
  width: 100%;
  position: absolute;
  fill: rgba(0, 255, 244, 0);
  stroke-miterlimit: 10;
  stroke-width: 20px;
}

.holder {
  height: 100px;
  width: 100px;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 360px;
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
}
.holder:focus {
  outline: none;
}

.link-text {
  font-weight: bold;
}
</style>
