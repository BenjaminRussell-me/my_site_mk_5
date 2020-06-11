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
          img: `grid.svg`,
        },
        {
          title: `Animation`,
          img: `hex.svg`,
        },
        {
          title: `Layout`,
          img: `hex.svg`,
        },
        {
          title: `Layout`,
          img: `hex.svg`,
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
  </style>
