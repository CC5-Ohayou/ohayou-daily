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
import word from "../../getRandomWord.js";
let unirest = require("unirest");

// console.log(words[date.getDay()*142])

export default {
  name: "RandomWord",
  mounted() {
    let scope = this;
    if (process.env.NODE_ENV === "development") {
        this.key = process.env.VUE_APP_QUOTE;
      } else if (process.env.NODE_ENV === "production") {
        this.key = process.env.VUE_APP_QUOTE;
      }
    unirest
      .get(
        "https://mashape-community-urban-dictionary.p.mashape.com/define?term="+ this.word
      )
      .header(
        "X-Mashape-Key",
        key
      )
      .header(
        "X-Mashape-Host",
        "mashape-community-urban-dictionary.p.mashape.com"
      )
      .end(function(result) {
        scope.definition=result.body.list[1].definition;
      });
  },
  components: {},
  data: () => ({
    word: word(),
    definition:"",
  })
};
</script>
<style>
</style>
