<template>
  <div id="modal">
    <div class="modal-mask">
      <button class="modal-button" v-on:click="modalControl()">
      </button>
      <div class="modal-content-holder">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../eventBus";

export default {
  name: "Modal",
  data: function() {
    return {
      showModal: false
    };
  },
  methods: {
    modalControl: function() {
      eventBus.$emit("modalControl");
    }
  },
  created() {
    eventBus.$on("modalControl", () => {
      if (this.showModal === true) {
        this.showModal = false;
      } else {
        this.showModal = true;
      }
    });
  }
};
</script>

<style lang="scss">
#modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  width: 100%;
  height: 100%;
  .modal-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    transition: opacity 0.3s ease;
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-rows: auto 1fr;
    .modal-button {
      height: 60px;
      width: 60px;
      justify-self: end;
      margin: 0;
      padding: 10px;
      display: grid;
      align-content: center;
      justify-content: center;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
      transition: 0.3s;
      #buttonX {
        display: grid;
        margin: 0;
        clip-path: polygon(
          20% 0%,
          0% 20%,
          30% 50%,
          0% 80%,
          20% 100%,
          50% 70%,
          80% 100%,
          100% 80%,
          70% 50%,
          100% 20%,
          80% 0%,
          50% 30%
        );
        height: 100%;
        width: 100%;
        background-color: rebeccapurple;
      }
      &:hover {
        transform: scale(1.2) rotate(180deg);
        transition: 0.3s ease-in-out;
      }
    }
    .modal-content-holder {
      width: 90vw;
      height: 90vh;
      background-color: white;
      display: grid;
      grid-template-rows: auto 1fr;
      pointer-events: none;
      padding: 1rem;
      box-sizing: border-box;
      overflow-y: scroll;
    }
  }
}
</style>
