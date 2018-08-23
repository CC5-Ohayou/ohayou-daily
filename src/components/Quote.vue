<template>
  <div class="hackernews__container">
    <v-card color="green lighten-5">
      <v-card-title class="justify-center" primary-title>
         <h3 class="headline mb-0">Random quote</h3>
      </v-card-title>
      <v-card-text>
      <div >
         <blockquote class="quote">"{{randomQuote}}"</blockquote>
         <p class="author">-{{author}}</p>
      </div>
     </v-card-text>
    </v-card>
  </div>
</template>

<script>
let unirest = require("unirest");
export default {
  mounted() {
    const scope = this;
    unirest
      .get(
        "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1"
      )
      .header(
        "X-Mashape-Key",
        "K4O3kdE58HmshNM9ar6nbjUQGnPep1oHFfnjsnuI6QyJ6xoWu7"
      )
      .header("X-Mashape-Host", "andruxnet-random-famous-quotes.p.mashape.com")
      .end(function(result) {
        scope.randomQuote = result.body[0].quote;
        scope.author = result.body[0].author;
      });
  },
  name: "Quote",
  components: {},
  data: () => ({
    randomQuote: "",
    author:"",
  })
};
</script>
<style>
.author{
  text-align: right;
}
.quote{
  font-size:32px;
}
</style>
