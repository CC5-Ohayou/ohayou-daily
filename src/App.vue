<template>
  <div id="app">
    <v-app>

      <!-- SIDE DRAWER -->
      <!-- <v-navigation-drawer 
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer">
        <v-list dense>
          <v-layout
          row
          align-center
          >
            <v-flex xs6>
              Insert Random Meme Button!
            </v-flex>
          </v-layout>
          <v-layout
          row
          align-center
          >
            <v-flex xs6>Insert Robot Meme Button!</v-flex>
          </v-layout>
        </v-list>
        
      </v-navigation-drawer> -->

      <v-toolbar
      color="blue-grey darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndup"
      fixed>
        <v-toolbar-title flat>
          <span style="text-align: center" class="app-title">Ohayou Daily</span>
        </v-toolbar-title>
        <v-spacer/>
      </v-toolbar>


      <!-- REPLACE WITH CONTENT -->
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
      </v-container>
      <!-- <v-container grid-list-md text-md-center>
        <v-layout row wrap>
          <v-flex md6 fill-height>
          </v-flex>
        </v-layout>
      </v-container> -->
      <!-- REPLACE WITH CONTENT -->


    </v-app>
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";
import HackerNews from './components/HackerNews.vue';
import Quote from './components/Quote.vue';

export default {
  name: "app",
  components: {
    Weather,
    HackerNews,
    Quote,
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
</style>
