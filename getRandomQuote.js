const unirest = require("unirest");

export default unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10")
.header("X-Mashape-Key", "K4O3kdE58HmshNM9ar6nbjUQGnPep1oHFfnjsnuI6QyJ6xoWu7")
.header("X-Mashape-Host", "andruxnet-random-famous-quotes.p.mashape.com")
.end(function (result) {
  console.log(result.body[0].quote);
});