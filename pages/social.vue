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
    <div id="shadow">
    <div id="socialMid">
      <div id="socialContentHolder">
        <SocialItem  v-for="(content, index) in content"
                    :key="content.id"
                    :title="content.title"
                    :content="content.content"
                    :published="content.published"
                    :photo="content.photo"
        >
        </SocialItem>
      </div>
    </div>
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
          content: [

          ]


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
        },
      setArray: function () {
       for(let i = 0; i < this.allArticles.length; i++  ) {
         const oob = {
           id: this.allArticles[i].id,
           title: this.allArticles[i].title,
           content: this.allArticles[i].content,
           published: this.allArticles[i].published,
           photo:this.allArticles[i].photo,
         }
         this.content.push(oob)
       }
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
      this.setArray()
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
  #shadow{
    display: grid;
    box-shadow: 3px 3px 5px 4px black inset;
    overflow: hidden;
    margin: 2rem 0 0 0;
    padding: 2rem;
  }
  #socialMid {
    display: grid;
    overflow-y: scroll;
    height: 100%;
    #socialContentHolder {
      align-self: center;
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem;
      grid-row-gap: 3rem;
      width: 95%;
      padding: 0 1rem 0 1rem;
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
