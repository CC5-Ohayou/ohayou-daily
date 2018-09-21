<template>
  <div id="app">
    <v-app>
      <v-toolbar
      color="blue-grey darken-4"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndup"
      fixed>
        <v-toolbar-title flat>
          <img src="./assets/logo.png" height="45px" style="margin-top: 7px">
        </v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <v-container grid-list-md text-md-center style="margin-top: 0px; padding-right: 0px; padding-left: 0px;">
        <v-layout row wrap>
          <v-flex md6 fill-height>
            <Weather />
            <Quote />
          </v-flex>
          <v-flex md6 fill-height>
            <HackerNews />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md12 fill-height>
            <TedTalk />
          </v-flex>
        </v-layout>
        <v-layout row wrap class="loveword">
          <v-flex md6 fill-height>
            <LoveCalc />
          </v-flex>
          <v-flex md6 fill-height>
            <RandomWord />
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";
import HackerNews from "./components/HackerNews.vue";
import Quote from "./components/Quote.vue";
import TedTalk from "./components/TedTalk.vue";
import LoveCalc from "./components/LoveCalc.vue";
import RandomWord from "./components/RandomWord.vue";

export default {
  name: "app",
  components: {
    Weather,
    HackerNews,
    Quote,
    TedTalk,
    LoveCalc,
    RandomWord
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}

.loveword {
  padding-top: 10px
}
</style>
