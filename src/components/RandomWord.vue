<template>
  <div class="hackernews__container">
    <v-card color="red lighten-5">
      <v-card-title class="justify-center" primary-title>
         <h3 class="headline mb-0">Random Word</h3>
      </v-card-title>
      <v-card-text>
      <div >
         <p class= "word">{{word}}</p>
         <p class="definition">{{definition}}</p>
      </div>
     </v-card-text>
    </v-card>
  </div>

</template>

<script>
import word from "../../getRandomWord.js";
let unirest = require("unirest");
export default {
  name: "RandomWord",
  mounted() {
    let scope = this;
    unirest
      .get(
        "https://mashape-community-urban-dictionary.p.mashape.com/define?term="+ this.word
      )
      .header(
        "X-Mashape-Key",
        "K4O3kdE58HmshNM9ar6nbjUQGnPep1oHFfnjsnuI6QyJ6xoWu7"
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
.word {
  text-align: center;
  font-size: 48px;
}
.definition {
  text-align: center;
}
</style>
