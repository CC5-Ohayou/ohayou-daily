<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer 
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
        
      </v-navigation-drawer>

      <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndup"
      fixed>
        <v-toolbar-title style="width: 300px, align: left" class="toolbar-drawer">
          <v-toolbar-side-icon @click.stop="drawer = !drawer" />
          <span class="app-title">Meme Generator</span>
        </v-toolbar-title>
        <v-spacer/>
        <span>makedankmemes</span>
      </v-toolbar>


      <!-- REPLACE WITH CONTENT -->
      <Weather />
      <!-- REPLACE WITH CONTENT -->


    </v-app>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Weather from "./components/Weather.vue";

export default {
  name: "app",
  drawer: true,
  components: {
    HelloWorld,
    Weather,
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
