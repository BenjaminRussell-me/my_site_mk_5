<template>
  <div class="design">
    <display-page>
      <template v-slot:cont1>
        <div class="content"  v-on:click="pickContent(0)">
          <h1>1</h1>
        </div>
      </template>
<template v-slot:cont2>
      <div class="content"  v-on:click="pickContent(1)">
        <h1>2</h1>
      </div>
</template>
      <template v-slot:cont3>
        <div class="content">
          <h1>3</h1>
        </div>
      </template>
      <template v-slot:cont4>
        <div class="content">
          <h1>4</h1>
        </div>
      </template>
      <template v-slot:modalContent>
      <component v-bind:is="page" />
      </template>
    </display-page>
  </div>
</template>

<script>
  import Test from "~/content/design/test.vue"
  import Test2 from "~/content/design/test2.vue"
import DisplayPage from "~/components/DisplayPage.vue";
export default {
    transition: {
        name: 'custom',
        mode: 'out-in',
    },
  components: {
    DisplayPage,
    Test,
    Test2
  },
  data: function () {
    return{
      pages: ["Test", "Test2"],
      page: ''
    }
  },
  methods: {
    pickContent: function (n) {
      this.page = this.pages[n];
      console.log(this.page);
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
