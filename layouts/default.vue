<template>
  <div id="app" class="theAppDaddy">
    <Modal></Modal>
    <div id="TopBar">
      <nuxt-link to="/" v-bind:style="{ textDecoration: 'none' }">
        <button id="logo">BenjaminRussell.me</button></nuxt-link>
      <div id="NavDisplay">
        <nuxt-link :to="this.$store.state.pages.pagesArr[getNavDisplay.last].page">
        <button class="wing navDisButton" :style="{color: this.$store.state.pages.pagesArr[getNavDisplay.last].color1}">{{this.$store.state.pages.pagesArr[getNavDisplay.last].text}}</button>
        </nuxt-link>
        <nuxt-link :to="this.$store.state.pages.pagesArr[getNavDisplay.current].page">
        <button class="main navDisButton" :style="{color: this.$store.state.pages.pagesArr[getNavDisplay.current].color1}">{{this.$store.state.pages.pagesArr[getNavDisplay.current].text}}</button>
        </nuxt-link>
        <nuxt-link :to="this.$store.state.pages.pagesArr[getNavDisplay.next].page">
        <button class="wing navDisButton" :style="{color: this.$store.state.pages.pagesArr[getNavDisplay.next].color1}">{{this.$store.state.pages.pagesArr[getNavDisplay.next].text}}</button>
        </nuxt-link>
      </div>
    </div>
    <div id="contentGrid">
      <nuxt-link :to="this.$store.state.pages.currentPage.backward" id="BackwardsButton">
      <button>back</button>
      </nuxt-link>
      <nuxt />
      <nuxt-link :to="this.$store.state.pages.currentPage.forward" id="ForwardButton">
      <button>forward</button>
      </nuxt-link>
    </div>
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
      computed:{
        getNavDisplay: function (){
          let currentNumber = 0;
          if(this.$store.state.pages.currentPage.number !== undefined){
            currentNumber = this.$store.state.pages.currentPage.number
          }
          if(currentNumber === 0){
            return {last: 4, current: 0, next: 1}
          } else if( currentNumber === 4){
            return {last: 3, current: 4, next: 0}
          } else {
            return {last: currentNumber- 1, current: currentNumber, next: currentNumber +1 }
          }
        }
      },



    };
</script>

<style lang="scss">
#TopBar{
  display: grid;
  grid-area: 1/1/1/1;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem 0 1rem;
  #logo{
    justify-self: start;
    margin-top: 1rem;
  }
  #NavDisplay{
    display: grid;
    align-self: start;
    justify-self: end;
    justify-items: center;
    .wing{
      transform: scale(.6);
    }
    .navDisButton{
      border: none;
      background: none;
      margin: 0;
      transition: .3s;
    }
  }
}
  body {
    margin: 0;
  }
  @mixin buuutan{
    align-self: center;
    height: 50px;
    width: 50px;
    background: black;
    button{
      background: none;
      visibility: hidden;
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
  #BackwardsButton{
    @include buuutan;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 37% 100%, 71% 50%, 37% 0);
    transform: rotate(180deg);
    margin-left: 1rem;
  }
  #ForwardButton{
    @include buuutan;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 37% 100%, 71% 50%, 37% 0);
    margin-right: 1rem;

  }
  #app{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #contentGrid{
    display: grid;
    grid-area: 1/1/1/1;
    grid-template-columns: auto 1fr auto;
  }
  .theAppDaddy{
    background:url("../assets/img/backgrounds/wave.svg");
    background-size: cover;
    background-position:bottom;
    display: grid;
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
