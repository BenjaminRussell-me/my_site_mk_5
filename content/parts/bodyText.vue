<template>
    <div id="textHolder">
      <slot name="pls"></slot>
    </div>
</template>

<script>
    export default {
        name: "text"
    }
</script>

<style scoped lang="scss">
#textHolder{
  width: 65%;
  margin: auto;
  padding: 0 0 4rem 0;
  img{
    width: 100%;
  }
  h3{
    margin-top: 1rem;
  }
  p{
    margin: .5rem 0 0 0;
  }
  li:not(:first-child){
    margin: 1rem 0 0 0
  }
  li:last-child{
    margin: 1rem 0 2rem 0;
  }
  .emph{
    margin: 2rem 0 2rem 0;
    font-style: italic;
  }
}
</style>
