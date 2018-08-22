<template>
    <!-- <div>
      <h1>Random quote</h1> 
      <p>{{randomQuote}}</p>
    </div> -->

  <div class="quotes__container">
    <v-card color="grey darken-3">
      <v-card-title class="justify-center" primary-title>
        <img height="40px" src="../assets/quote.svg">
      </v-card-title>
      <v-card-text class="white--text">
         <p class="font-weight-medium font-italic headline">"{{randomQuote}}"</p>
         <p class="author">- {{author}}</p>
     </v-card-text>
    </v-card>
  </div>

</template>

<script>
var unirest = require("unirest");
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
  color: #DDDDDD;
}

.quotes__container {
  margin-top: 20px;
  margin-right: 5px;
}

.quote {

}

</style>
