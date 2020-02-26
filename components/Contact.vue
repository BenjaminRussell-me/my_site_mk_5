<template>
  <div id="contact">
    <div id="contact-grid">
      <button id="contact-control" v-on:click="contactControl()">
      </button>
      <div id="contact-area">
        <my-form></my-form>
      </div>
    </div>
  </div>
</template>

<script>
  import myForm from "./myForm";
export default {
  name: "Contact",
  data: function() {
    return {
      contactStatus: false
    };
  },
    components: {
      myForm
    },
  methods: {
    contactControl: function() {
      const contact = document.querySelector("#contact");
      const area = document.querySelector("#contact-area");
      const control = document.querySelector("#contact-control");
      if (this.contactStatus === false) {
        this.contactStatus = true;
          contact.style.cssText = "transform: translateY(0vh); transition: .5s";
          area.style.cssText = "transform: translateY(0vh); transition: .5s; backdrop-filter: blur(5px) invert(1)";
          control.style.cssText = "clip-path: inset(65% 0 0 0); margin-bottom: 0; margin-top: -13vh;transition: .5s"
      } else {
        this.contactStatus = false;
        contact.style.cssText = "transform: translateY(94vh); transition: .5s";
          area.style.cssText = "transform: translateY(6vh); transition: .5s; backdrop-filter: blur(1px) invert(0.1)";
          control.style.cssText = "clip-path: inset(0 0 65% 0); margin-bottom: -13vh; transition: .5s"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#contact {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: grid;
  transform: translateY(94vh);
  #contact-grid {
    display: grid;
    #contact-control {
      border-radius: 100% 100% 100% 100%;
      height: 20vh;
      margin-bottom: -13vh;
      width: 60%;
      align-self: start;
      justify-self: center;
      border: none;
      background: #151515;
      cursor: pointer;
      display: grid;
      clip-path: inset(0 0 65% 0);
      grid-area: 1/1/1/1;
      z-index: 10;
      #control-text {
        align-self: start;
        justify-self: center;
        color: white;
        transform: translateY(-60px);
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
      }
    }
    #contact-control:focus {
      outline: none;
    }
    #contact-area {
      grid-area: 1/1/1/1;
      background-color: rgba(176, 196, 222, 0.52);
      backdrop-filter: blur(1px) invert(0.1);
      display: grid;
      align-content: center;
      justify-content: center;
      transform: translateY(6vh);
    }
  }
}
</style>
