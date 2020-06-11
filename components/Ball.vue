<template>
    <div class="ball" :class="`ball${index}`" :style="{height:(additive)+'px', width:(additive)+'px', bottom:top+'%', left:left+'%' }">
    </div>
</template>

<script>
    export default {
        name: "Ball",
      props: {
          index: {
            type: Number
          }
      },
      data () {
          return {
        ballSize: `0`,
        ballDirection: ``,
            top: ``,
            left: ``,
            additive: 800,
          }
      },
      methods: {

        BallsInMotion: function () {
          for(var i = 0;i < 1000; i++){
            let k = i;
            this.SlowedBalls(k)
          }
        },
        SlowedBalls: function(k){
          setTimeout(()=>{
              this.BallsSet()
          }, 6500 * (k + 1));
        },
        BallsSet: function () {

          console.log('setting')
            this.ballSize = this.randomNumber()
            this.top = this.randomNumber()
            this.left = this.randomNumber()
        },
        randomNumber: function () {
          return Math.floor(Math.random() * 100) + 1
        }
      },
      mounted() {
          this.BallsSet()
          this.BallsInMotion()
      }
    }
</script>

<style scoped>
  .ball{
    position: fixed;
    grid-area: 1/1/1/1;
    border-radius: 360%;
    transition: 10s;
    transform-origin: center;
    backdrop-filter: saturate(200%);
  }
  .ball0{
    bottom: 1%;
    left: 1%;
  }
  .ball1{
    bottom: 20%;
    left: 20%
  }
  .ball2{
    bottom: 60%;
    left: 60%;
  }
</style>
