<template>
    <div class="ball" :style="{height:(ballSize+additive)+'px', width:(ballSize+additive)+'px', bottom:top+'%', left:left+'%' }">


    </div>
</template>

<script>
    export default {
        name: "Ball",
      data () {
          return {
        ballSize: `0`,
        ballDirection: ``,
            top: `0`,
            left: `0`,
            additive: `100`,
          }
      },
      methods: {

        BallsInMotion: function () {
          for(var i = 0;i < 100; i++){
            let k = i;
            this.SlowedBalls(k)
          }
        },
        SlowedBalls: function(k){
          setTimeout(()=>{
              this.BallsSet()
          }, 10000 * (k + 1));
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
</style>
