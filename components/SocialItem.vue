<template>
  <div tabindex="0" id="socialItemWrapper">
    <div id="socialItem">
      <div id="itemPhoto" v-bind:style="{backgroundImage: 'url(' + api_url + picture + ')'}" >
      </div>
      <div id="itemText">
        <div id="itemInfo">
          <h3>{{title}}</h3>
          <h3>{{description}}</h3>
        </div>
        <div id="itemDate">
          <p>{{date}}</p>
        </div>
      </div>
    </div>
    <div class="itemLine"></div>
  </div>
</template>

<script>
export default {
  name: "SocialItem",
    props: {
      title:{
         type: String
      },
        description: {
          type: String
        },
        picture: {
          type: String
        },
        date: {
          type: String
        }
    },
    data(){
      return{
          api_url: process.env.strapiBaseUri,
      }
    }
};
</script>

<style scoped lang="scss">
#socialItemWrapper {
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.64), 0 0 4px 2px rgba(0, 0, 0, 0.63);
    transition: 0.3s;
    transform: scale(1.01);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.64), 0 0 4px 2px rgba(0, 0, 0, 0.63);
    transition: 0.3s;
  }
  .itemLine {
    height: 4px;
    background: linear-gradient(to right, #2271b4, #1e86ac, #1c9c9f, #1fb08e);
    background-attachment: fixed;
    width: 100%;
  }
}
#socialItem {
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  padding: 1rem;
  background: rgb(57, 57, 57);
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  #itemPhoto {
    background-color: #fefffe;
    background-size: cover;
    background-position: center;
    box-shadow: 2px 0 6px 1px rgba(0, 0, 0, 0.6),
      2px 0 3px 1px rgba(0, 0, 0, 0.58);
  }
  #itemText {
    color: white;
    margin: 1rem;
    display: grid;
    #itemDate {
      align-self: end;
      justify-self: end;
    }
  }
}
</style>
