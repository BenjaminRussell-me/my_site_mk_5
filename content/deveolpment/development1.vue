<template>
  <div>
<hero>
<template v-slot:picture>
  <img src="/img/gears.svg">
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
<h3>What it is</h3>
  <p>This is talking about a Nuxt application that takes content imputed into a custom cockpit powered CRM and outputs
    it into a landing page leveraging vue dynamic components and my Css grid framework.  </p>
  <h3>Why it is</h3>
  <p>I started work on this about  a year into working at Hoglund Advertizing and Analytics. The goal of this project
    -was to upgrade our landing page technology past hand made php pages, and just over all speed up page creation.
    Also off loading the management of adding content to the pages via the CRM to the add copy team there by relieving
    the dev teams responsibility of spelling mistakes was a bonus as well.</p>
  <h3>How it is</h3>
  <p>Because one of Nuxts main features of being a server side loaded javascript application this was my first instance
    of dealing with async data. Understanding the dynamics of all of that took me a bit. </p>
  <p>After that hurdle the main functionality of this app was to take the data given to it and display it in a set number
    of ways depending on what it received. For instance not all landing pages had a form fill on them. If they did the
    layout and position of the header was different. So depending on if form fill data was revived by the page would
    determine a number of things from weather the button for the modal the held the form fill in the first place would
    appear to if the office location text was center or left aligned. </p>
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
