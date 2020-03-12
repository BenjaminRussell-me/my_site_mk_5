<template>
  <div>
  <hero>
    <template v-slot:picture>
      <img src="/img/hex.svg">
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
      <p>This site is a Nuxt powered front end, strapi powered back end CMS, with dynamic asset storage in google cloud services. </p>
      <p>this is the third official personal website I've launched but unofficially its the seventh. I got 80% done with quite a few versions without ever finishing or posting them. </p>

      <h3>Why it is</h3>
      <p>I've always wanted my website / portfolio to be as interesting to me personally as possible. As a result I go
        through several versions that just don't feel right by the time I'm done figuring out all the specifics. Everything
        from the design to how the data is pulled in are things that I want to get better at or understand better. </p>

      <p>This website was made side by side of the landing page creation app using a lot of similar processes. I did this
        for  testing out slightly different ways of doing things or finding issues on one that help smooth out the process
        for the other. When learning something its really useful for me to use it it different ways at the same time.</p>

      <h3>How it is</h3>
      <p>A lot of my time was spent getting the parts of this app playing nicely together. hosting the front end on
        Netlify, the backend on Heroku I didn't know anything about Heroku before this project and the whole resetting
        Dynos had me really confused for a day. After learning about that and getting PostgreSQL and storage on google
        cloud services set up things went a whole lot smoother. </p>
      <p>Always a work in progress... If I run out of stuff to do to my website I start over lol</p>
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
