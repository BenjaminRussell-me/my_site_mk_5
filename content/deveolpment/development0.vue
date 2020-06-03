<template>
  <div>
    <hero>
      <template v-slot:title>
        <h1>GRID</h1>
      </template>
      <template v-slot:picture>
        <img src="/img/grid.svg">
      </template>
      <template v-slot:links>
        <img src="/icons/git.svg">
        <img src="/icons/npm.svg">
      </template>
    </hero>
    <body-text>
      <template v-slot:pls>
        <h3>
          What it is
        </h3>
        <p>This creatively "named" framework is a scss framework leveraging css grid almost exclusively. </p>

        <h3>Why it is</h3>
        <p>I started working on it as an intern at Hoglund Advertising and Analytics. The goals of the project were to
          have
          a relatively light weight, easy to use, conveniently editable framework for simple landing pages. At the time
          I was simply acquainted with css grid. After being hired at HAA and continuing to work on the framework for
          months
          on end I'm happy to say that me and css grid are the best of friends. </p>

        <h3>How it is</h3>
        <p>The process of making this css framework had various stages.</p>
        <p class="emph">STAGES</p>
        <ol>
          <li>I have no clue where to start or what i'm doing so I'm going to write random ideas in a notebook</li>
          <li>Look at what features of the currently in use framework are being used</li>
          <li>Talk to the other devs about what the "pain points" of daily landing page building were</li>
          <li>Coming up with a workable idea</li>
          <li>Executing workable idea (got stuck here for a while)</li>
          <li>Refinement (still in process probably to the end of time)</li>
        </ol>
        <p>The main idea of this framework was to have css rules set up in permutations for small screen, size medium
          screen size, and large screen size. With a healthy amount of visual width and percentage values to smooth
          things in between. </p>
        <p>The basic layout would look something like this (row-6-3-1) This class would create a grid row that would
          have
          6 columns at large sizes 3 at medium sizes and 1 at small sizes. Easy to understand I thought ... so now to
          build it.</p>
        <p class="emph">row -1-1-1 ... row-2-1-1 ... row-3-1-1... </p>
        <p>After writing to about row-2-3-1 by hand it fully sunk in how many css rules this was going to be and how
          hard it was going to be to keep it all straight without making any mistakes. </p>

        <h3>Enter css permutations writing app!</h3>
        <img src="~/assets/img/dev/cssmakerPre.jpg">
        <p class="emph">*shrieking*</p>
        <p>Around this time were my first couple adventures into vue.js so I decided to build this app with it. After a
          couple of hours this beautiful child of mine popped out. </p>
        <p>Here you can see it in action</p>
        <img src="~/assets/img/dev/cssmakerPost.png">
        <p>For the most part that is the entire basis of this framework. There are custom styles and animations built
          into
          it for ease of use but for the most part after that its just syntax and css grid.</p>
        <p>I'm happy to say that this framework has been quite successful. It has been used in production for almost
          every
          landing page made at HAA since summer 2019 with no problems. The other developers at HAA have said that they
          like
          using it and no complaint have ever been voiced ... at least not to me lol. </p>
      </template>
    </body-text>
  </div>
</template>

<script>
    import hero from "../parts/hero";
    import bodyText from "../parts/bodyText";

    export default {
        name: "development0",
        components: {
            hero,
            bodyText
        }
    }
</script>

<style scoped lang="scss">


</style>
