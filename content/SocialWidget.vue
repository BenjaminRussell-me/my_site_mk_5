<template>
  <div id="socialTop">
    <div id="linksControl">
      <div class="socialLine"></div>
      <button class="btn1" @click="heightControl()">See My Links</button>
      <div class="socialLine"></div>
    </div>
    <div id="socialLinksHolder" :style="{height: height+'px' }">
      <div class="placeholdericon"></div>
      <div class="placeholdericon"></div>
      <div class="placeholdericon"></div>
      <div class="placeholdericon"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SocialWidget",
      data () {
          return{
            height: 0,
            check: false
          }
      },
      methods: {
        heightControl: function () {

          if(this.check === false ){
            this.check = true
            this.height = 40
          } else {
            this.check = false
            this.height = 0
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  #socialTop {
    display: grid;
    #linksControl {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      align-self: end;
      grid-column-gap: 1rem;
      .socialLine {
        height: 2px;
        background: black;
      }
      button{
background: black;
        color: white;
      }
    }
    #socialLinksHolder {
      align-self: end;
      justify-self: center;
      justify-items: center;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      transition: .4s;
      width: 50%;
      height: 0px;
      overflow: hidden;
      margin: auto;
      .placeholdericon {
        height: 50px;
        width: 50px;
        background-color: beige;
      }
    }
  }
</style>
