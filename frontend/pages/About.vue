<template>
  <div id="about">
    <div id="about-grid">
      <div id="intro-grid">
        <div id="bio-picture">
          <div id="picture-holder" v-bind:style="{backgroundImage: 'url(' + api_url + bios[0].picture.url + ')'}"></div>
          <profile-picture  />
        </div>
        <h1>Test</h1>
      </div>
      <div id="bio-grid">
        <div id="bio-holder">
          <div class="color-bar"></div>
          <div id="editor" v-html="$md.render(bios[0].bio)"></div>
        </div>
        <div id="social-holder">
          <div class="color-bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "~/content/ProfilePicture.vue";
import bioQuery from '../apollo/queries/bio/bio.graphql'
export default {
    transition: {
        name: 'custom',
        mode: 'out-in',
    },
  components: {
    ProfilePicture
  },
    data () {
        return{
          bios: [],
            api_url: process.env.strapiBaseUri,
        }
    },
    apollo: {
        bios: {
            prefetch: true,
            query: bioQuery,
            variables () {
                return { id: parseInt(this.$route.params.id) }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
#about {
  display: grid;
  height: 98vh;
  width: 100vw;

  #about-grid {
    align-self: center;
    justify-self: center;
    width: 85%;
    height: 90%;
    display: grid;

    grid-template-rows: auto 1fr;
    grid-row-gap: 2vw;
    #intro-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      #bio-picture {
        width: 200px;
        height: 200px;

        display: grid;
        align-items: center;
        justify-items: center;
    #picture-holder{
      grid-area: 1/1/1/1;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      clip-path: circle(50% at 50% 50%);
      z-index: -1;
    }
      }
      h1 {
        justify-self: end;
        align-self: center;
      }
    }
    #bio-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      #bio-holder {
        display: grid;
        grid-template-rows: auto 1fr;
      }
      #social-holder {
        display: grid;
        grid-template-rows: auto 1fr;
      }
      .color-bar {
        width: 100%;
        height: 4px;
        background: linear-gradient(
          to right,
          #2271b4,
          #1e86ac,
          #1c9c9f,
          #1fb08e
        );
        align-self: start;
        background-attachment: fixed;
        box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.41);
      }
    }
  }
}
</style>
