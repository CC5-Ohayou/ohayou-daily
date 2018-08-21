<template>
  <div>
    <img alt="response" :src="this.image">
    </div>
</template>

<script>
// const RapidAPI = new require('rapidapi-connect');
const unirest = require('unirest');
// const rapid = new RapidAPI('mememachine_5b7b8561e4b08e04f8459ab1', '/connect/auth/mememachine_5b7b8561e4b08e04f8459ab1');

export default {
  async mounted() {
   unirest.get("https://ronreiter-meme-generator.p.mashape.com/meme?meme=Condescending-Wonka&font=Impact&font_size=50&top=Top+text&bottom=Bottom+text")
    .header("X-Mashape-Key", "okp4jvdXPQmshTESeF7gpJryuF2Kp1W5m7XjsnuCNmvURQUQG5")
    .header("X-Mashape-Host", "ronreiter-meme-generator.p.mashape.com")
    .end((result) => {
      const url = window.URL || window.webkitURL;
      const blob = new Blob([result.body], { type: "image/jpeg" } );
      this.image = url.createObjectURL(blob);
      console.log(this.image)
      // this.image = new Buffer( result.body, 'binary' ).toString('base64');
    });
  },
  data: () => ({
    image: "",
  })
}
</script>

<style>

</style>
