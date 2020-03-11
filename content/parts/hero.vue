<template>
  <div class="imageHolder">
    <slot name="picture"></slot>
    <div class="titleHolder">
      <slot name="title"></slot>
    </div>
    <div class="linksHolder">
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "hero"
    }
</script>

<style scoped lang="scss">
  .imageHolder{
    display: grid;
    .titleHolder{
      grid-area: 1/1/1/1;
    }
    .linksHolder{
      grid-area: 1/1/1/1;
      align-self: end;
      justify-self: end;
      padding: 1rem;
      background: rgba(35, 31, 32, 0.51);
      margin: 0 1rem 1rem 0;
      display: flex;
      column-gap: 1rem;
      img{
        width: 80px ;
        margin: 0 1rem 0 1rem;
        transition: .3s;
        transform: scale(1);
        cursor: pointer;
        &:hover{
          transform: scale(1.2);
          transition: .3s ease-out;
        }
      }
    }
    img{
      grid-area: 1/1/1/1;
      width: 100%;
    }
  }
</style>
