<template>
  <div class="design">
    <display-page :content="DesignContent" :WhatPage="'design'"></display-page>
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
  data() {
    return{
      DesignContent: [
        {
          title: `SVGs and Illustration`,
          img: `illustration.svg`,
        },
        {
          title: `Animation`,
          img: `animation.svg`,
        },
        {
          title: `Layout`,
          img: `layout.svg`,
        },
        {
          title: `Photo and Video Editing`,
          img: `photo.svg`,
        }
      ]
    }
  },
  mounted() {
    this.$store.commit('pages/setPage', 2)
  }
};
</script>
<style lang="scss" scoped>
  </style>
