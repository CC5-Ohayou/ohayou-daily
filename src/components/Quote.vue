<template>
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
const unirest = require("unirest");
export default {
  mounted() {
    if (process.env.NODE_ENV === "development") {
      this.key = process.env.VUE_APP_QUOTE;
    } else if (process.env.NODE_ENV === "production"){
      this.key = process.env.VUE_APP_QUOTE;
    }
    const scope = this;
    const key = this.key;
    unirest
      .get(
        "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1"
      )
      .header(
        "X-Mashape-Key",
        key
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
    key: ""
  })
};
</script>

<style>
.author{
  text-align: right;
  color: #DDDDDD;
}
.quotes__container {
  margin-top: 22px;
  margin-right: 5px;
}
</style>
