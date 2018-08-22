<template>
  <v-app>
    <v-card>
      <v-card-text>
        <h1>Weather</h1>
        <span v-if="error">{{information}} </span>
        <span v-else>
          <h3>- {{information[0].date}} -</h3>
          Today's Forecast:<br>
          High: {{information[0].high}} F<br>
          Low: {{information[0].low}} F<br>
          {{information[0].text}}<br>
        </span>
      </v-card-text>
    </v-card>
  </v-app>
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
    information: 'something',
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
  }
};
</script>

<style>
</style>
