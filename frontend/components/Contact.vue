<template>
  <div id="contact">
    <div id="contact-grid">
      <button id="contact-control" v-on:click="contactControl()">
      </button>
      <div id="contact-area"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function() {
    return {
      contactStatus: false
    };
  },
  methods: {
    contactControl: function() {
      const contact = document.querySelector("#contact");
      if (this.contactStatus === false) {
        this.contactStatus = true;
        contact.style.cssText = "transform: translateY(0vh); transition: .5s";
      } else {
        this.contactStatus = false;
        contact.style.cssText = "transform: translateY(94vh); transition: .5s";
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
    grid-template-rows: auto 1fr;
    #contact-control {
      border-radius: 100% 100% 100% 100%;
      height: 20vh;
      margin-bottom: -13vh;
      width: 60%;
      justify-self: center;
      border: none;
      background: black;
      cursor: pointer;
      display: grid;
      clip-path: inset(0 0 65% 0);
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
      background-color: rgba(176, 196, 222, 0.52);
      backdrop-filter: blur(5px) invert(1);
    }
  }
}
</style>
