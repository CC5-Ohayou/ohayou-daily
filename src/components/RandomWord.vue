<template>
  <div class="hackernews__container">
    <v-card>
      <v-card-title class="justify-left" primary-title>
        <h3 class="title mb-0 font-weight-bold" style="background-color: yellow"> TOP DEFINITION </h3>
      </v-card-title>
      <v-card-text>
        <p class="display-1" style="color: blue, font-family: Baskerville,Baskerville Old Face,Hoefler Text,Garamond,Times New Roman,serif;">{{word}}</p>
        <p class="definition">{{definition}}</p>
     </v-card-text>
    </v-card>
  </div>

</template>

<script>
require('dotenv').config()
export default {
  name: "RandomWord",
  mounted() {
    let scope = this;

    const url = "https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=";
    const key = process.env.VUE_APP_WORDNIK_KEY;
    fetch(url+key)
      .then(data=>data.json())
      .then(data=>{
        scope.word=data.word;
        scope.definition=data.definitions[0].text;
    })
  },
  components: {},
  data: () => ({
    word: "",
    definition:"",
  })
};
</script>
<style>
</style>
