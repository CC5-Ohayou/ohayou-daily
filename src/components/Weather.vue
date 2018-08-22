<template>
    <v-card color="light-blue lighten-5">
      <v-card-title class="justify-center" primary-title>
        <h1 class="headline mb-0">Weather</h1>
      </v-card-title>
      <v-card-text>
        <span v-if="error">{{information}} </span>
        <span v-else>
          <h3>- {{information[0].date}} -</h3>
          Today's Forecast:<br>
          High: {{this.convert(information[0].high)}} C<br>
          Low: {{this.convert(information[0].low)}} C<br>
          {{information[0].text}}<br>
        </span>
      </v-card-text>
    </v-card>
</template>

<script>
import RapidAPI from "rapidapi-connect";
const rapid = new RapidAPI(
  "default-application_5b7bcce8e4b0a349c04b0631",
  "12a3a94c-5eac-4a0a-ab60-81114755bd05"
);

export default {
  location: "tokyo, japan",
  data: () => ({
    information: [{
      high: 32,
      low: 32,
    }],
    error: false,
    }),
  

  mounted() {
    rapid
      .call("YahooWeatherAPI", "getWeatherForecast", {
        location: "tokyo, japan"
      })
      .on("success", payload => {
        this.information = payload.query.results.channel.item.forecast;
      })
      .on("error", payload => {
        this.information = 'Error fetching results';
        this.error = true;
      });
  },
  methods: {
    convert: function(fahrenheit) {
      const celsius = (fahrenheit -32) * 5 / 9;
      return Math.round(celsius);
    }
  }
};
</script>

<style>

</style>
