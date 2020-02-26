<template>
  <div id="picture-holder" v-bind:style="{backgroundImage: 'url(' + bioPic + ')'}">
  </div>
</template>

<script>
    export default {
        name: "img",
        props: {
            bioPic:{
                type: String
            }
        }
    }
</script>

<style scoped>

</style>
