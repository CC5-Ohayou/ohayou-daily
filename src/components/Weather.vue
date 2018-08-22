<template>
  <div class="weather-container">
    <v-card img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDQ0NDw8QDQ0PDQ0NDQ0NDQ8NDg0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFQ8PFSsZFRkrKysrKysrKysrKystLS0rLS0rLSsrLTctNy0tLS0tNy0tKzc3Ny0rLSstKy03Ky0tLf/AABEIAKABOwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAsEAEAAgIBAgcAAQMFAQAAAAAAARECEiEDMRNBUWFxgZGh0eHxUmKxwfAi/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/EABgRAQEBAQEAAAAAAAAAAAAAAAAREgEh/9oADAMBAAIRAxEAPwD6UA3YAAAAAKCCgAAAAAAoKggKCoKAgoIgoCCgqKAgAAACCkgyzLaSKxLLcpSI6ACgKCCgIKAgoAAAAAAAKAgoCCgIKAgoCCiiKCAAAAAACI0gMzDNNylA0CggoCCgIKAAACgIKAgoCCgIKAgoCKAAoCAoIKAgoCCgIKAiNAMI2gNUuq0tIrGpTdARijV0LKRjWU1dtjdL1Zxy1NJdtzYvVnHHWTV32NikcNSnezgplwo1d+FKZcNDSXdU0ZefSTSfR3LKZcNJ9Dw5d7U0uXDRJxdpxg1hamXHU0d6E0ZcNDV1mkmlpGIwsnptJYnjFFNFKjNFNUUDJTcRDWsFI5UU7awawlWOFFO+sJUFIzRTdFAxStUUDI1RQMjVFAzRTVFAzSwtFAilNY4X5xHyKzRTpOER7/ZpfOKDkW1RSoli0UKkNWlFIUsKWgpBMBYMzimrdoozSU3S0IxRTVFAzSU3RQMUtNUUDMKtFAkwlNUUC0tN0UisUU6afjUdP4/SkcaKejwfu2MunSVY5UU66LHSWpHGljCfR2wy54j+/u5ZdSdrvtPAsTX2lKdcc5mY5+/6unhxPMTF+cV5pSPPtEeVz/DllMz5u2eFOa8RzdOjccevBTWHHKjWeM3zxKU9PS/+o5iJ9JmO6Z9H0/Lc1Y89FN6lKjFFN0RiDFFNziUDFFN01HT+vkHKjV1nHGPO/hiOpzfP/IM0Ri3l1Zu4n6dMssa7c8XEcCxwnEp22xnjtXaUnpz8+8JUjlRTpqaqOdFOmpMRHv8AYRiMbOPKp++Vzm4r/FsY8SDc4+cXXv3hmnWMr5nhqOlHr/CVYmfV9Kn3mF8bipiJc4gohXSMonvEey5ZebnS0DeGcfX/AG3MRHP/AKXHHCfKHbWZj8TqucdT8W6i/VrwJPD/AMHgxjP+r6PDxnm69mpxNOFGYyiOO8eRv7cz3XQjGgYyw47T8yxl06i3apNBHDHC3bHCMfK/drwqXGK+DoxlNzxNezUdT2anpejUxVV39UVjqzPaIv3q0x/3R+8NTlM2YYev89wNI+J9HHLKO0PRPqxnzEHBzxzl1qO/PxXDnqvPqo3p7RE/rGcebWFt5dO0HknF16fSirn8unTTH3MsYj4WpGcujHeI/J4c/C/vbvHa4n+Fx57pVefwZdsYmPrhY4lucfQ6MTjHEz/RJqPfzpnLGZ4XDAguMxMT5e3dieg6Y9N0jEHinpmj1zgmi1I82ixEvRovhlI5R00nB6YxSYrslWPPo1HTdpxvn9KKOeMQ1nPkupqDPTmkjvbeqxALMJOLUKiuepq6UUqOcYLGNN0TCDGpq2AxGMmrVLEKOcYk4OlFA46tacOlFFHHVqMHQKMRgS2Ug5asZ4y7Uswo54Y1382tWojyWIoHPVYhuiYBKTVbr3ZjOQa1Z35bxlMsEF1KZ2TLIVuoTViLdQYmEdKSlRMIWilhFSkpuihGaKaoBKKVRUKFBKS0mEiAaopYKBFoSQCCYSOAWUxlZkoFEsAmRQEFlkFomLWEkCIJjzUsHLLlIh0pKVGZbxyQoGqhJxWIJRWYhWoKEKKaQVKVQEBQQAEIUAskAQUBBQEkUoEkUBKFKBKIaAQFBEpoBkWgEFAQUBKKUBCmgEBQf//Z">
      <v-card-title class="justify-center" primary-title>
      <div class="font-weight-light headline">- {{information[0].date}} -</div>
      </v-card-title>
      <v-card-text>
        <span v-if="error">{{information}} </span>
        <span v-else>
          <img height="40px" src="../assets/sun.svg"> <br>
           <br>
          High: {{this.convert(information[0].high)}} °C  -  Low: {{this.convert(information[0].low)}} °C<br>
          {{information[0].text}}
        </span>
      </v-card-text>
    </v-card>
  </div>
</template>



<script>
import RapidAPI from "rapidapi-connect";
import unirest from "unirest";
const rapid = new RapidAPI(
  "default-application_5b7bcce8e4b0a349c04b0631",
  "12a3a94c-5eac-4a0a-ab60-81114755bd05"
);

// color="light-blue lighten-5"

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
.weather-container {
  margin-right: 5px;
}
</style>
