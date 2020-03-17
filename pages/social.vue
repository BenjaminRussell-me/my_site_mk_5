<template>
  <div class="socialWrapper">
    <div id="socialTop">
      <div id="linksControl">
        <div class="socialLine"></div>
        <button >place holder</button>
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
        <SocialItem  v-for="(article, index) in display"
                    :key="article.id"
                    :title="article.title"
                    :content="article.content"
                    :published="article.published"
                    :photo="article.photo"

        >

        </SocialItem>
      </div>
    </div>
    <div id="socialBot">
      <button v-on:click="loadMore">
        load more
      </button>
      <button v-on:click="loadPrevious">
        go back
      </button>
    </div>
  </div>
</template>

<script>
import SocialItem from "../components/SocialItem";
export default {
    transition: {
        name: 'custom',
        mode: 'out-in',
    },
  async fetch({store}) {
    await store.dispatch('articles/fetchAllContent')
  },
    name: "Social",
    components: {
      SocialItem
    },
    data() {
        return {
        showModal: false,
        displayed: 0,
            floor: 0,
            ceiling: 0,
            add:0,
        }
    },
    computed: {
        allArticles(){
            return this.$store.state.articles.articles.slice().reverse()
        },
        display(){
            return this.allArticles.slice(this.floor, this.ceiling)
        },




    },
    methods: {
      loadMore: function () {
          this.ceiling = this.ceiling - this.add;
          this.floor = this.floor - this.add;
      },
        loadPrevious: function () {
            this.ceiling = this.ceiling + this.add;
            this.floor = this.floor + this.add;
        }

    },
  mounted() {
        if(screen.width < 641 ){
            this.add = 3
        } else {
            this.add = 6
        }
      this.ceiling = this.$store.state.articles.articles.length;
      this.floor =  this.ceiling - this.add;
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
      @media (max-width: 640px) {
        grid-template-columns:1fr;
        grid-row-gap: 1rem;
      }
    }
  }
  #socialBot {
    display: grid;
    align-items: start;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
