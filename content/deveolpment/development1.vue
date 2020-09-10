<template>
  <div>
  <hero>
    <template v-slot:picture>
      <img src="/img/hex.svg">
    </template>
    <template v-slot:title>
      <h1>Modular Form Component</h1>
    </template>
    <template v-slot:links>
      <img src="/icons/git.svg">
      <img src="/icons/npm.svg">
    </template>
  </hero>
  <body-text>
    <template v-slot:pls>
      <h3>What it is</h3>
      <p>It is a Vue form component made to be as universally plug and play as possible through NPM for the landing pages being made at Hoglund Advertising and Analytics.</p>

      <h3>Why it is</h3>
      <p>Once upon a time the dev team at HAA had around seven different types of form fills being duplicated on new projects at complete random.</p>
      <p>Then one fateful summer the company decided to completely switch which service we used for our phone tracking and form capturing.</p>
      <p>This meant that we had to update every single form. So rather than try to untangle the previous form situation I just made a new one</p>

      <h3>How it is</h3>
      <p>Long story short each of the field components validates itself meaning that you can add whatever you want to the form without much effort.</p>
      <p>Then the actual form body itself just makes a big ol JSON object and sends it off</p>

    </template>
  </body-text>
  </div>
</template>

<script>
    import hero from "../parts/hero";
    import bodyText from "../parts/bodyText";
    export default {
        name: "development1",
        components: {bodyText, hero}
    }
</script>

<style scoped>

</style>
