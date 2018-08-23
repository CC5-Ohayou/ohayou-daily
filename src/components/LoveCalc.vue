<template>
  <div class="love__container">
    <v-card color="red darken-4" dark height="260px">
      <v-card-title class="justify-center" primary-title>
         <h3 class="headline mb-0">Love Calculator</h3>
      </v-card-title>
      <div v-if="!percentage.length">
        <v-container grid-list-md>
          <v-layout row wrap>
              <v-flex md4 fill-height>
                <v-text-field color="white" type="text" label="Your Name" v-on:keyup="fpress" ></v-text-field>
              </v-flex>
              <v-flex md4 fill-height>
                <img src="../assets/love.svg" width="80px">
              </v-flex>
              <v-flex md4 fill-height>
                <v-text-field color="white" type="text" label="Your Lover's Name" v-on:keyup="spress"></v-text-field>
              </v-flex>
          </v-layout>
        </v-container>
      </div>
        <div v-if="percentage.length">
          <br>
          <br>
          <p class="center">{{percentage}}</p>
          <p class="center">{{result}}</p>
        </div>
        <div v-if="!percentage.length">
          <v-btn light v-on:click="calculate">Show Result</v-btn>
        </div>
    </v-card>
  </div>
</template>

<script>
const unirest = require("unirest");

export default {
  name: "LoveCalc",
  components: {},
  data: () => ({
    fname: "",
    sname: "",
    percentage: "",
    result: ""
  }),
  methods: {
    calculate: function() {
      const scope = this;
      unirest
        .get(
          `https://love-calculator.p.mashape.com/getPercentage?fname=${
            scope.fname
          }&sname=${scope.sname}`
        )
        .header(
          "X-Mashape-Key",
          "K4O3kdE58HmshNM9ar6nbjUQGnPep1oHFfnjsnuI6QyJ6xoWu7"
        )
        .header("X-Mashape-Host", "love-calculator.p.mashape.com")
        .end(function(result) {
          scope.percentage = result.body.percentage + "%";
          scope.result = result.body.result;
        });
    },
    fpress: function(e) {
      this.fname = e.target.value;
    },
    spress: function(e) {
      this.sname = e.target.value;
    }
  }
};
</script>
<style>
.author {
  text-align: right;
}
.quote {
  font-size: 32px;
}
.center {
  text-align:center;
  font-size:24px;
}
.love__container {
  padding-right: 5px;
}

</style>
