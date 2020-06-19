 <template>
  <div id="contact">
    <div id="contact-grid">
      <button id="contact-control" v-on:click="contactControl()">
        {{controlText}}
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
      contactStatus: false,
        controlText: 'Contact'
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
        this.controlText = "Back";
          contact.style.cssText = "transform: translateY(0vh); transition: .5s";
          area.style.cssText = "transform: translateY(0vh); transition: .5s;";
          control.style.cssText = "clip-path: inset(65% 0 0 0); margin-bottom: 0; margin-top: -13vh;transition: .5s; align-items: end"
      } else {
        this.contactStatus = false;
          this.controlText = "Contact";
        contact.style.cssText = "transform: translateY(94vh); transition: .5s";
          area.style.cssText = "transform: translateY(6vh); transition: .5s;";
          control.style.cssText = "clip-path: inset(0 0 65% 0); margin-bottom: -13vh; transition: .5s; align-items: start"
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
  z-index: 3;
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
      align-items: start;
      padding: 1rem 0 1rem 0;
      font-weight: bold;
      color: white;
      @media (max-width: 640px) {
        width: 90%;
      }
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
      backdrop-filter: blur(3px) invert(1);
      display: grid;
      width: 100%;
      transform: translateY(6vh);
    }
  }
}
</style>
