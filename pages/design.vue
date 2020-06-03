<template>
  <div class="design">
    <display-page>
      <template v-slot:cont1>
        <div class="content"  v-on:click="pickContent(0)">
          <h1>SVG's</h1>
        </div>
      </template>

      <template v-slot:cont2>
            <div class="content"  v-on:click="pickContent(1)">
              <h1>Animation</h1>
            </div>
      </template>

      <template v-slot:cont3>
        <div class="content"  v-on:click="pickContent(2)">
          <h1>Illustration</h1>
        </div>
      </template>

      <template v-slot:cont4>
        <div class="content"  v-on:click="pickContent(3)">
          <h1>Layout</h1>
        </div>
      </template>
    </display-page>
  </div>
</template>

<script>
import DisplayPage from "~/components/DisplayPage.vue";
export default {
    transition: {
        name: 'custom',
        mode: 'out-in',
    },
  components: {
    DisplayPage,
  },
  data: function () {
    return{
      pages: ["Test", "Test2"],
      page: ''
    }
  },
  methods: {
    pickContent: function (n) {
        this.$store.commit('modal/setType1Display','design'+n);
    }
  }
};
</script>
<style lang="scss" scoped>
  .content{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top right, red, rgba(255, 255, 0, 0.38));
  }
  </style>
