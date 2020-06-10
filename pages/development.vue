<template>
  <div class="dev">
    <display-page :content="DevContent">
<!--      <template v-for="(content, index) in DevContent">-->
<!--        <div class="content"  v-on:click="pickContent(index)" v-bind:style="{backgroundImage: GetImage(content.img)}">-->
<!--          <div class="titleHolder">-->
<!--            <h4>{{content.title}}</h4>-->
<!--          </div>-->
<!--        </div>-->
<!--      </template>-->
    </display-page>
  </div>
</template>

<script>
import DisplayPage from "@/components/DisplayPage.vue";
import Img from "../content/bio/bioImg";
export default {
    transition: {
        name: 'custom',
        mode: 'out-in',
    },
  data() {
    return{
      DevContent: [
        {
          title: `Css Grid Framework`,
          img: `grid.svg`,
        },
        {
          title: `My Website`,
          img: `hex.svg`,
        },
        {
          title: ``,
          img: `hex.svg`,
        },
        {
          title: ``,
          img: `hex.svg`,
        },
      ]
    }
  },

  components: {
    Img,
    DisplayPage
  },
    methods: {
        pickContent: function (n) {
            this.$store.commit('modal/setType1Display','development'+n);
        },
      GetImage: function (img) {
          return require (`assets/img/projects/${img}`)
      }
    }
};
</script>

<style lang="scss">


</style>
