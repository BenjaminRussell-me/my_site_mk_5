<template>
  <div id="display-wrapper">
    <div id="display-grid">
      <div
        tabindex="0"
        id="di1"
        class="display-item"
        v-on:mouseover="select(1)"
        v-on:mouseleave="deselect(1)"
      >
        <div class="content-holder" v-on:click="modalControl()">
          <slot name="cont1"></slot>
        </div>
      </div>
      <div
        tabindex="0"
        id="di2"
        class="display-item"
        v-on:mouseover="select(2)"
        v-on:mouseleave="deselect(2)"
      >
        <div class="content-holder" v-on:click="modalControl()">
          <slot name="cont2"></slot>
        </div>
      </div>
      <div
        tabindex="0"
        id="di3"
        class="display-item"
        v-on:mouseover="select(3)"
        v-on:mouseleave="deselect(3)"
      >
        <div class="content-holder" v-on:click="modalControl()">
          <slot name="cont3"></slot>
        </div>
      </div>
      <div
        tabindex="0"
        id="di4"
        class="display-item"
        v-on:mouseover="select(4)"
        v-on:mouseleave="deselect(4)"
      >
        <div class="content-holder" v-on:click="modalControl()">
          <slot name="cont4"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      selected: null,
    };
  },
  methods: {
    select: function(selected) {
      this.selected = selected;
      const hovered = document.querySelector("#di" + this.selected);
      hovered.style.cssText = "transform: scale(1.1); transition: .4s";
      this.shrinkOthers();
    },
    shrinkOthers: function() {
      let numbers = [1, 2, 3, 4];
      const unselected = numbers.filter(x => {
        return x !== this.selected;
      });
      unselected.forEach(b => {
        const unhovered = document.querySelector("#di" + b);
        unhovered.style.cssText =
          "transform: scale(0.5) rotate(90deg); transition: .4s";
      });
    },
    deselect: function() {
      this.reset();
    },
    reset: function() {
      let numbers = [1, 2, 3, 4];
      numbers.forEach(n => {
        const unhovered = document.querySelector("#di" + n);
        unhovered.style.cssText =
          "transform: scale(1) rotate(0deg); transition: .4s; transition-delay: .2s";
      });
    },
    modalControl: function() {
        this.$store.commit('modal/modalChange');
        this.$store.commit('modal/setType1',true);
    }
  }
};
</script>

<style lang="scss" scoped>
#display-wrapper {
  display: grid;
  height: 98vh;
  width: 100vw;
  overflow: hidden;
  #display-grid {
    align-self: center;
    justify-self: center;
    height: 40vw;
    width: 40vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
    @media (max-width: 640px) {
      align-self: start;
      grid-template-columns: 1fr;
    }
    .display-item {
      height: 100%;
      width: 100%;
      cursor: pointer;
      display: grid;
      @media (max-width: 640px) {
        align-self: center;
        justify-self: center;
        height: 35vw;
        width: 35vw;
      }
      .content-holder {
        display: grid;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.77),
          0 0 5px 2px rgba(0, 0, 0, 0.59), 0 0 12px 1px rgba(0, 0, 0, 0.44);
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-content-holder,
.modal-leave-active .modal-content-holder {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
