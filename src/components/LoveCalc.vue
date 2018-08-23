<template>
  <div class="hackernews__container">
    <v-card color="purple lighten-5">
      <v-card-title class="justify-center" primary-title>
         <h3 class="headline mb-0">Love Calculator</h3>
      </v-card-title>
      <v-card-input>
      <div >
        <v-text-field type="text" label="First Name" v-on:keyup="fpress" ></v-text-field>
        <v-text-field type="text" label="Second Name" v-on:keyup="spress"></v-text-field>
        <v-btn v-on:click="calculate">Calc</v-btn>
         <p class="center" v-model="percentage">{{percentage}}</p>
         <p class="center" v-model="result">{{result}}</p>
      </div>
  </v-card-input>
    </v-card>
  </div>
</template>

<script>
let unirest = require("unirest");
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

</style>
