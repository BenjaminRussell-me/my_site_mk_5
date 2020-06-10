<template>
  <div id="display-wrapper">
    <div id="display-grid">
      <div
        v-for="(content, index) in Content"
        tabindex="0"
        :id='"di"+(index+1)'
        class="display-item"
        v-on:mouseover="select(index+1)"
        v-on:mouseleave="deselect(index+1)"
      >
        <div :id='"holder"+(index+1)' class="content-holder" v-on:click="pickContent()
        "v-bind:style="{backgroundImage: `url(${GetImage(content.img)})`}">
          <div class="titleHolder">
            <h3>{{content.title}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
  Content: {
    type: Array
  },
  WhatPage: {
    type: String
  }
},
  data: function() {
    return {
      selected: null,
<<<<<<< HEAD
=======

>>>>>>> f6995cfc98de4cf16e0615f45cb0f29e0f25ba63
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
      let numbers = this.numbersGet();
      console.log('shrink' + this.numbersGet())
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
      let numbers = this.numbersGet();
      console.log('reset' + this.numbersGet())
      numbers.forEach(n => {
        const unhovered = document.querySelector("#di" + n);
        unhovered.style.cssText =
          "transform: scale(1) rotate(0deg); transition: .4s; transition-delay: .2s";
      });
    },
    modalControl: function() {
        this.$store.commit('modal/modalChange');
        this.$store.commit('modal/setType1',true);
    },
    GetImage: function (img) {
      return require (`@/assets/img/projects/${img}`)
    },
    numbersGet() {
      let numbers = []
      for(let i=0; i<this.Content.length; i++){
        numbers.push(i+1)
      }
      console.log('numbers = '+numbers)
      return numbers
    },
    pickContent: function (n) {
      this.$store.commit('modal/setType1Display',this.WhatPage+n);
      this.modalControl()
    },
  },
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
    @media (max-width: 640px) {
      align-self: start;
      margin-top: 2rem;
      grid-template-columns: 1fr;
      grid-row-gap: 1rem;
    }
    .display-item {
      width: 19vw;
      height: 19vw;
      cursor: pointer;
      display: grid;
      @media (max-width: 640px) {
        align-self: center;
        justify-self: center;
        height: 35vw;
        width: 35vw;
      }
      .content-holder {
        background-size: cover;
        background-position: center;
        display: grid;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.77),
          0 0 5px 2px rgba(0, 0, 0, 0.59), 0 0 12px 1px rgba(0, 0, 0, 0.44);
        .content{
          background-size: cover;
          background-position: center center;
          height: 100%;
          width: 100%;
          display: grid;
          .titleHolder{
            grid-area: 1/1/1/1;
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: grayscale(100%);
            align-self: center;
            justify-self: start;
            margin:-30% 0 0 0;
            padding: .5rem 5rem .5rem 2rem;
            @media (max-width: 640px) {
              padding: .3rem 3rem .3rem .3rem;
              margin:.3rem 0 0 .3rem;
            }
            h3{
              color: #151515;
            }
          }
          img{
            grid-area: 1/1/1/1;
            object-fit: cover;
          }
        }
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
