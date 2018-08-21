const unirest = require("unirest");

export default text => {
  return unirest
    .get("https://robohash.p.mashape.com/index.php?text=" + text)
    .header(
      "X-Mashape-Key",
      "K4O3kdE58HmshNM9ar6nbjUQGnPep1oHFfnjsnuI6QyJ6xoWu7"
    )
    .header("X-Mashape-Host", "robohash.p.mashape.com")
    .end(function(result) {
      console.log(JSON.parse(result.body).imageUrl);
      return JSON.parse(result.body).imageUrl;
    });
};
