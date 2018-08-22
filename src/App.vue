<template>
  <div id="app">
<<<<<<< HEAD
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Quote />
=======
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
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndup"
      fixed>
        <v-toolbar-title style="width: 300px, align: left">
          <span class="app-title">My Dashboard</span>
        </v-toolbar-title>
        <v-spacer/>
        <span>makedankmemes</span>
      </v-toolbar>


      <!-- REPLACE WITH CONTENT -->
      <HackerNews />
      <Weather />
      <!-- REPLACE WITH CONTENT -->


    </v-app>
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD
// import HelloWorld from './components/HelloWorld.vue'
import Quote from "./components/Quote.vue"
=======
import Weather from "./components/Weather.vue";
import HackerNews from './components/HackerNews.vue';

>>>>>>> master
export default {
  name: "app",
  components: {
<<<<<<< HEAD
    Quote
=======
    Weather,
    HackerNews,
>>>>>>> master
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
}
</style>
