<template>
  <div id="app">
    <Modal></Modal>
    <nuxt-link to="/" v-bind:style="{ textDecoration: 'none' }">
      <p id="logo">test</p></nuxt-link>
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
        }
    };
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #logo {
    position: absolute;
    top: 5px;
    left: 10px;
  }
  #app {
    height: 98vh;
    width: 100vw;
    overflow: hidden;
  }
</style>
