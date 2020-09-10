<template>
  <div id="about">
    <div id="about-grid">
      <div id="intro-grid">
        <div id="bio-picture">
          <div id="picture-holder"  v-bind:style="{backgroundImage: 'url(' + Content.picture + ')'}"></div>
          <profile-picture  />
        </div>
        <h1 class="greeting">Sup?</h1>
      </div>
      <div id="bio-grid">
        <div id="bio-holder">
          <div class="color-bar"></div>
       <div id="editor" v-for="content in this.$store.state.bio.bio" v-html="$md.render(Content.bio)"></div>

        </div>
        <div id="social-holder">
          <div class="color-bar"></div>
          <h4 class="pending">Where a Resume Will Go As Soon As I Feel Like Updating It</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfilePicture from "../content/ProfilePicture"
    export default {
        watchQuery: ['page'],
        transition: {
            name: 'custom',
            mode: 'out-in',
        },
        name: "About",

        async fetch({store}) {
          await store.dispatch('bio/fetchAllContent')
          // this.Content.picture = this.$store.state.bio.bio

        },
        data() {
            return {
              Content: {
                  picture: this.GetImage('placeHolder.svg'),
                  bio: `loading...`
              }
            }
        },
        components: {
            ProfilePicture
        },
      methods: {
        GetImage: function (img) {
          return require (`@/assets/img/${img}`)
        },
      },

mounted() {
  this.$store.commit('pages/setPage', 4)
  this.Content.bio = this.$store.state.bio.bio[0].content
  this.Content.picture = this.$store.state.bio.bio[0].picture
}
    };
</script>

<style lang="scss" scoped>
  #picture-holder{
    grid-area: 1/1/1/1;
    width: 90%;
    height: 90%;
    background-position: center;
    background-size: cover;
    clip-path: circle(50% at 50% 50%);
    z-index: 1;
  }
#about {
  display: grid;
  height: 98vh;
  width: 100%;

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

      }
      .greeting{
        font-weight: 900;
        align-self: end;
        justify-self: end;
      }
    }
    #bio-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
      #bio-holder {
        display: grid;
        grid-template-rows: auto 1fr;
      }
      #social-holder {
        display: grid;
        grid-template-rows: auto 1fr;
      }
      #editor{
        padding: 1rem;

      }
      p{
        margin: 1rem 0 .2rem 0;
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
.pending{
  align-self: center;
  justify-self: center;
  width: 200px;
  animation: spin infinite forwards 100s;
  transform-origin: center;
}
  @keyframes spin {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
