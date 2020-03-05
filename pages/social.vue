<template>
  <div class="socialWrapper">
    <div id="socialTop">
      <div id="linksControl">
        <div class="socialLine"></div>
        <button>place holder</button>
        <div class="socialLine"></div>
      </div>
      <div id="socialLinksHolder">
        <div class="placeholdericon"></div>
        <div class="placeholdericon"></div>
        <div class="placeholdericon"></div>
        <div class="placeholdericon"></div>
      </div>
    </div>
    <div id="socialMid">
      <div id="socialContentHolder">
        <SocialItem v-for="(article, index) in this.$store.state.articles.articles"
                    :key="article.id"
                    :title="article.title"
                    :description="article.content"
                    :date="article.published"
                    :picture="article.photo"
        >

        </SocialItem>
      </div>
      {{this.$store.state.articles.articles[0].title}}
    </div>
    <div id="socialBot">
      <button>
        load more
      </button>
    </div>
  </div>
</template>

<script>
import SocialItem from "../components/SocialItem";
import {getData} from "../mixins/getData.js";
export default {
    transition: {
        name: 'custom',
        mode: 'out-in',
    },
    mixins:[getData],
    name: "Social",
    components: {
      SocialItem
    },
    data() {
        return {


        }
    }
}
</script>

<style scoped lang="scss">
.socialWrapper {
  height: 100%;
  width: 99%;
  margin: auto;
  display: grid;
  grid-template-rows: 0.12fr 1fr 0.12fr;
  #socialTop {
    display: grid;
    #linksControl {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      align-self: end;
      grid-column-gap: 1rem;
      .socialLine {
        height: 2px;
        background: black;
      }
    }
    #socialLinksHolder {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-items: center;
      width: 50%;
      display: none;
      margin: auto;
      .placeholdericon {
        height: 50px;
        width: 50px;
        background-color: beige;
      }
    }
  }
  #socialMid {
    display: grid;
    #socialContentHolder {
      align-self: center;
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem;
      grid-row-gap: 3rem;
      width: 95%;
      padding: 0 1rem 0 1rem;
      height: 80%;
    }
  }
  #socialBot {
    display: grid;
    align-items: start;
    justify-items: center;
  }
}
</style>
