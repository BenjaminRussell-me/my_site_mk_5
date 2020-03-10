<template>
  <div class="dev">
    <display-page >
      <template v-slot:cont1>
        <div class="content"  v-on:click="pickContent(0)" v-bind:style="{backgroundImage: 'url(/img/grid.svg)'}">
          <div class="titleHolder">
            <h4>CSS Grid Framework</h4>
          </div>
        </div>
      </template>

      <template v-slot:cont2>
        <div class="content"  v-on:click="pickContent(1)" v-bind:style="{backgroundImage: 'url(/img/gears.svg)'}">
          <img src="">
          <div class="titleHolder" >
            <h4>Landing page creation app</h4>
          </div>
        </div>
      </template>

      <template v-slot:cont3>
        <div class="content"  v-on:click="pickContent(2)" v-bind:style="{backgroundImage: 'url(/img/hex.svg)'}">
          <div class="titleHolder">
            <h4>This very website</h4>
          </div>
        </div>
      </template>

      <template v-slot:cont4>
        <div class="content"  v-on:click="pickContent(3)" v-bind:style="{backgroundImage: 'url(/img/hex.svg)'}">
          <div class="titleHolder">
            <h4>TBD</h4>
          </div>
        </div>
      </template>
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
      photo: ''
    }
  },
  components: {
    Img,
    DisplayPage
  },
    methods: {
        pickContent: function (n) {
            this.$store.commit('modal/setType1Display','development'+n);
        }
    }
};
</script>

<style lang="scss">


</style>
