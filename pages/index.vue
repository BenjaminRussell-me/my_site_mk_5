<template>
  <div id="home">
    <div id="nav-holder">
      <nuxt-link to="/development/" v-bind:style="{ textDecoration: 'none' }"
      ><hex :color="color1" />
      </nuxt-link>
      <nuxt-link to="/design/" v-bind:style="{ textDecoration: 'none' }"
      ><hex :color="color2" />
      </nuxt-link>
      <nuxt-link to="/social/" v-bind:style="{ textDecoration: 'none' }"
      ><hex :color="color3" />
      </nuxt-link>
      <nuxt-link to="/about/" v-bind:style="{ textDecoration: 'none' }"
      ><hex :color="color4" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Hex from "@/components/Hex.vue";

    export default {
        transition: {
          name: 'custom',
          mode: 'out-in',
        },
        name: "home",
        components: {
            Hex
        },

        data: function() {
            return {
                pages: [1, 2, 3, 4],
                color1: "#2271b4",
                color2: "#1E86AC",
                color3: "#1C9C9F",
                color4: "#1FB08E"
            };
        },
        methods: {}
    };
</script>

<style scoped lang="scss">
  #home {
    width: 100%;
    height: 97vh;
    display: grid;
    overflow: hidden;
  }
  #nav-holder {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 50%;
    height: 90px;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-items: center;
    margin-top: -10vh;
  }
</style>

<style lang="scss">
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes wildRotate {
    0% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
      fill: #2271b4;
    }
    10% {
      transform: translateY(5px) translateX(-3px) rotate(36deg);
    }
    20% {
      transform: translateY(0px) translateX(0px) rotate(72deg);
    }
    30% {
      transform: translateY(-3px) translateX(5px) rotate(108deg);
      fill: #1e86ac;
    }
    40% {
      transform: translateY(0px) translateX(0px) rotate(144deg);
    }
    50% {
      transform: translateY(3px) translateX(2px) rotate(180deg);
    }
    60% {
      transform: translateY(0px) translateX(0px) rotate(216deg);
      fill: #1c9c9f;
    }
    70% {
      transform: translateY(-4px) translateX(-5px) rotate(252deg);
    }
    80% {
      transform: translateY(0px) translateX(0px) rotate(288deg);
    }
    90% {
      transform: translateY(4px) translateX(-2px) rotate(324deg);
      fill: #1fb08e;
    }
    100% {
      transform: translateY(0px) translateX(0px) rotate(359deg);
    }
  }

  @keyframes activeRotate {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(179.5deg) scale(1.4);
    }

    100% {
      transform: rotate(359deg) scale(1);
    }
  }

  @keyframes leaveRotate {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(120deg) scale(0.7);
    }
    70% {
      transform: rotate(350deg) scale(1.1);
    }
    100% {
      transform: rotate(359deg) scale(1);
    }
  }

  @keyframes clickRotate {
    0% {
      transform: rotate(0deg) scale(1.4);
    }
    50% {
      transform: rotate(179.5deg) scale(0.7);
    }

    100% {
      transform: rotate(359deg) scale(100);
      background-color: white;
      z-index: 9999;
    }
  }

  @keyframes glow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes wiggle {
    0% {
      transform: translateY(0px) translateX(0px);
    }
    10% {
      transform: translateY(5px) translateX(-3px);
    }
    20% {
      transform: translateY(0px) translateX(0px);
    }
    30% {
      transform: translateY(-3px) translateX(5px);
    }
    40% {
      transform: translateY(0px) translateX(0px);
    }
    50% {
      transform: translateY(3px) translateX(2px);
    }
    60% {
      transform: translateY(0px) translateX(0px);
    }
    70% {
      transform: translateY(-4px) translateX(-5px);
    }
    80% {
      transform: translateY(0px) translateX(0px);
    }
    90% {
      transform: translateY(4px) translateX(-2px);
    }
    100% {
      transform: translateY(0px) translateX(0px);
    }
  }
  .custom-enter-active {
    animation: scale-in 0.5s;
  }

  .custom-leave-active {
    animation: fade-out .8s;
  }

  @keyframes scale-in {
    0% {
      opacity: 0;
      transform: scale(0.89, 0.89);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
