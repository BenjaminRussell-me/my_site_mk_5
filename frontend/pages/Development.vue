<template>
  <div class="dev">
    <display-page />
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
  }
};
</script>
