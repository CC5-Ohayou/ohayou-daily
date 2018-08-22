<template>
  <div class="ted__container">
    <v-card dark class="black">
      <v-card-media src="https://i.imgur.com/hkO1HGK.png" height="60px" ></v-card-media>
      <v-card-title class="justify-center headline font-weight-thin" primary-title>
        {{this.video.title}}
     </v-card-title>
      <iframe width="100%" height="400" :src="'https://www.youtube.com/embed/' + this.video.id + '?modestbranding=1&autohide=1&showinfo=0'" frameborder="0" allowfullscreen></iframe>
    </v-card>
  </div>
</template>

<script>

const axios = require('axios');

export default {
async mounted() {
  this.getVideos();
},
data: () => ({
  video: {
    id: "",
    title: "",
  },
}),
methods: {
  getVideos: async function () {
     const response = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAuUUnT6oDeKwE6v1NGQxug&maxResults=1&order=date&type=video&key=AIzaSyBp1cSbOuPp9mTYHtez55ycUOScbK7hABA")
      this.video.id = response.data.items[0].id.videoId; 
      this.video.title = response.data.items[0].snippet.title;
  }
} 
}
</script>

<style>
.ted__container {
  margin-top: 10px;
}
</style>
