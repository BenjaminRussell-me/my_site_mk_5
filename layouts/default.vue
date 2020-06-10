<template>
  <div id="app" class="theAppDaddy">
    <Modal></Modal>
    <nuxt-link to="/" v-bind:style="{ textDecoration: 'none' }">
      <p id="logo">BenjaminRussell.me</p></nuxt-link>
      <nuxt />
    <Contact />
    <div  v-bind:class="backgrounds[0]"></div>
    <div class="ballHolder">
      <ball v-for="(item, index) of 3"
      :index="index"
      :key="index"></ball>
    </div>
  </div>
</template>

<script>
    import Contact from "../components/Contact.vue";
    import Modal from "../components/Modal";
    import Ball from "../components/Ball";
    export default {
        transition: {
            name: 'custom',
            mode: 'out-in',
        },
        components: {
          Ball,
            Contact,
            Modal
        },
        data(){
            return{
                backgrounds: ['bg0','bg1']
            }
        },


    };
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    height: 100vh;
  }
  .theAppDaddy{
    background:url("../assets/img/backgrounds/wave.svg");
    background-size: cover;
    background-position:bottom;
  }
  .bg0{
    background:url("../assets/img/backgrounds/main.svg");
    background-size: 300% 300%;
    background-position: center;
    position: fixed;
    height: 100%;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  .bg1{
    background: red;
  }
  #logo {
    position: absolute;
    top: 5px;
    left: 10px;
  }
.ballHolder{
  display: grid;
  align-items: center;
  justify-items: center;
  position: fixed;
  height: 100%;
  top: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>
