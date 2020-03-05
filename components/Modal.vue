<template>
  <transition name="fade">
    <div v-show="this.$store.state.modal.modalStatus" id="modal-wrapper">
      <div id="XHolder">
        <button id="modal-close" v-on:click="modalControl">
          <span id="theXFactor"></span>
        </button>
      </div>
      <transition name="fall">
        <div id="content-wrapper">
        <div id="type2" v-if="this.$store.state.modal.type2">
        <div v-show="this.$store.state.modal.modalStatus" id="content-holder">
          <div class="modalImage" v-bind:style="{backgroundImage: 'url(' +  this.$store.state.modal.photo + ')'}">
            <img alt="display image" :src="this.$store.state.modal.photo" />
            <div id="titleHolder">
          <h1 id="title">{{this.$store.state.modal.title}}</h1>
            </div>
          </div>
          <div id="editor" v-html="$md.render(this.$store.state.modal.content)"></div>
          <p>{{this.$store.state.modal.published}}</p>
        </div>
          <slot></slot>
        </div>

        <div id="type1" v-if="this.$store.state.modal.type1">
          <template>
            <component v-bind:is="this.$store.state.modal.type1Display" ></component>
          </template>
        </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  import design0 from "../content/design/design0";
  import design1 from "../content/design/design1";
  import design2 from "../content/design/design2";
  import design3 from "../content/design/design3";
  import development0 from "../content/deveolpment/development0";
  import development1 from "../content/deveolpment/development1";
  import development2 from "../content/deveolpment/development2";
  import development3 from "../content/deveolpment/development3";
    export default {
        name: "modal",
        data: function() {
            return {
                showModal: false
            };
        },
        methods: {
            modalControl: function() {
                this.$store.commit('modal/modalChange')
            }
        },
        components:{
            design0,
            design1,
            design2,
            design3,
            development0,
            development1,
            development2,
            development3
        }
    }
</script>

<style scoped lang="scss">
  #content-wrapper{
    box-shadow: 0 0 18px 5px, 0 0 7px 3px;
    width: 80%;
    height: 90%;
    margin-top: -2rem;
    grid-area: 1/1/2/2;
    align-self: center;
    justify-self: center;
    display: grid;
    background: rgba(255, 255, 255, 0.56);
    overflow-y: scroll;
  }
  .modalImage{
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
   img{
     grid-area: 1/1/1/1;
     width: 100%;
   }
    #titleHolder{
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: grayscale(100%);
      align-self: start;
      justify-self: start;
      grid-area: 1/1/1/1;
      margin:1rem 0 0 2rem;
      padding: .5rem 5rem .5rem 2rem;
      #title{
      color: #151515;

      }
    }

  }
  #modal-wrapper{
    width: 100vw;
    height: 100vh ;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.73);
    display: grid;
    z-index: 50;
  }
  #content-holder{

  }
  #XHolder{
    grid-area: 1/1/2/2;
    align-self: start;
    justify-self: end;
    margin: 1.5rem 3rem;
    @media (max-width: 640px) {
      margin: .5rem .5rem;
    }
  }
  #modal-close{
    border: none;
    outline: none;
    background: none;
    height: 60px;
    width: 60px;
    margin: 0;
    padding: .5rem;
    box-sizing: border-box;
    justify-self: end;
    cursor: pointer;
    transition: .3s ease-out;
    filter: drop-shadow(0  1px 3px black);
    &:hover{
      transform: scale(1.2) rotate(180deg);
      transition: .4s ease-out;
      filter: drop-shadow(0  1px 5px black);
    }
    #theXFactor{
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top right, #2271b4, #1e86ac, #1c9c9f, #1fb08e);
      clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
      -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .fall-enter-active, .fall-leave-active {
    transform: scale(1);
    transition: .5s;
  }
  .fall-enter, .fall-leave-to /* .fall-leave-active below version 2.1.8 */ {
    transform: scale(1.1);
  }
</style>
