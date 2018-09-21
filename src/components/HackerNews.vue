<template>
  <div class="hackernews__container">
    <v-card>
      <v-card-media src="https://i.imgur.com/adx1r1l.png" height="80px" ></v-card-media>
      <v-card-text>
      <div v-if="this.storiesArray.length">
        <div v-for="story in storiesArray" v-bind:key="story.id">
          <a class="hn__link"  :href="story.url"><span class="hn__title">{{story.title}}</span><span class="hn__urlName">{{showUrlName(story.url)}}</span></a>
        </div>
      </div>
     </v-card-text>
    </v-card>
  </div>
</template>

<script>

const RapidAPI = require('rapidapi-connect');

let name;
let key;
if (process.env.NODE_ENV === "development") {
  name = process.env.VUE_APP_HACKER_NAME;
  key = process.env.VUE_APP_HACKER_KEY;
} else if (process.env.NODE_ENV === "production") {
  name = process.env.VUE_APP_HACKER_NAME;
  key = process.env.VUE_APP_HACKER_KEY;
}

const rapid = new RapidAPI(name, key);

export default {
async mounted() {
  await this.getAllStories();
},
data: () => ({
  storiesArray: [],
}),
methods: {
  //Get all HackerNews stories => returns an array of IDs
  getAllStories: async function () {
    //Helps with the function call inside the 'success' callback
    const scope = this;
    rapid.call('HackerNews', 'getTopStories', { 
      }).on('success', async (payload)=>{
        for (let i = 0; i < 10; i++) {
          //Take the first 10 IDs and call the 'getItem' api with that link
          //The method below also pushs the result into the storiesArra
          await this.getStoryContent(this.storiesArray, payload[i])
        }
      }).on('error', (payload)=>{
    });
  },
  getStoryContent: async function (array, item) {
    rapid.call('HackerNews', 'getItem', { 
      'itemId': item
        }).on('success', (payload) => {
          array.push(payload)
        }).on('error', (payload)=>{
    });
  },
  getId: function (id) {
    return this.storyIds[id];
  },
  showUrlName: function (data) {
      if (data) {
        let a = document.createElement('a');
        a.href = data;
        let hostname = a.hostname;
        if (hostname[0] === "w" && hostname[1] === "w" && hostname[2] === "w" ) {
          hostname = hostname.slice(4);
        }
        return hostname;
      }
  }
} 

}
</script>

<style>
.hackernews__container {
  text-align: left;
  margin-left: 5px;
}

.hn__title {
  font-size: 1.1em;
}

.hn__title:hover {
  color: #0288d1;
}

.hn__urlName {
  padding-left: 10px;
  font-size: 0.8em;
  color: grey;
}

.hn__link {
  text-decoration: none;
  color: black;
}
</style>
