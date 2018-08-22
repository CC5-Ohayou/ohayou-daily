<template>
    <div>
      <h1>Random quote</h1> 
      <p>{{randomQuote}}</p>
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
        console.log(scope.randomQuote);
      });
  },
  name: "Quote",
  components: {},
  data:()=>({
      randomQuote: ""
  }),
};
</script>
<style>
</style>
