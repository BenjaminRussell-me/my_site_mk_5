<template>
  <div class="dev">
    <display-page >
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
        <div class="content"  v-on:click="pickContent(2)">
          <h1>3</h1>
        </div>
      </template>

      <template v-slot:cont4>
        <div class="content"  v-on:click="pickContent(3)">
          <h1>4</h1>
        </div>
      </template>
    </display-page>
  </div>
</template>

<script>
import DisplayPage from "@/components/DisplayPage.vue";
export default {
    transition: {
        name: 'custom',
        mode: 'out-in',
    },
  components: {
    DisplayPage
  },
    methods: {
        pickContent: function (n) {
            this.$store.commit('modal/setType1Display','development'+n);
        }
    }
};
</script>
