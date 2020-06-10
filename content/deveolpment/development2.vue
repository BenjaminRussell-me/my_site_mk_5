<template>
  <div>
    <hero>
      <template v-slot:picture>
        <img src="/img/grid.svg">
      </template>
      <template v-slot:title>
        <h1>GRID</h1>
      </template>
      <template v-slot:links>
        <img src="/icons/git.svg">
        <img src="/icons/npm.svg">
      </template>
    </hero>
    <body-text>
      <template v-slot:pls>

      </template>
    </body-text>
  </div>
</template>

<script>
    import hero from "../parts/hero";
    import bodyText from "../parts/bodyText";
    export default {
        name: "development2",
        components: {bodyText, hero}
    }
</script>

<style scoped>

</style>
