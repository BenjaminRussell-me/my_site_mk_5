<template>
  <div id="app" v-bind:class="backgrounds[0]">
    <Modal></Modal>
    <nuxt-link to="/" v-bind:style="{ textDecoration: 'none' }">
      <p id="logo">BenjaminRussell.me</p></nuxt-link>
      <nuxt />
    <Contact />
  </div>
</template>

<script>
    import Contact from "../components/Contact.vue";
    import Modal from "../components/Modal";
    export default {
        transition: {
            name: 'custom',
            mode: 'out-in',
        },
        components: {
            Contact,
            Modal
        },
        data(){
            return{
                backgrounds: ['bg0','bg1']
            }
        }
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
    background-size: cover;
    background-position: bottom;
    height: 100vh;
  }
  .bg0{
    background: url("../assets/img/backgrounds/wave.svg");
  }
  .bg1{
    background: red;
  }
  #logo {
    position: absolute;
    top: 5px;
    left: 10px;
  }

</style>
