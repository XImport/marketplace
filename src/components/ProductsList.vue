<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="(NewProduct, index) in NewProducts"
        :key="index"
        cols="12"
        sm="3"
        class="pa-6"
      >
        <v-card class="pa-2 justify-center align-center" outlined tile>
          <v-img
            class="img--center ml-7"
            :lazy-src="NewProduct.img"
            max-height="200"
            max-width="200"
            :src="NewProduct.img"
          ></v-img>

          <div class="my-4 text-subtitle-1 text-center">
            {{ NewProduct.description }}
          </div>
          <h3 class="my-4 text-center">{{ NewProduct.price }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      NewProducts: [
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/07/5jEWQMvjoVJ1yGAfhGqRy9e758YO55hqej4zfgmCYOg_350x200_2x-0-300x400.jpeg",
          description: "Amazon Card 1 Month",
          price: "45,00 MAD",
        },
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/10/spotify-card-10-706x800-3-300x400.png.webp",
          description: "Spotify Premium 3 Month",
          price: "60,00 MAD",
        },
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/07/u5fIEE2UHsLRPg3yJTUsLgkcmJrWRAL4ufHvIa2KUJw_350x200_2x-0-300x400.jpeg",
          description: "Nitendo Switch Plus",
          price: "56,00 MAD",
        },
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/07/pL6W5WrfKR33bhWXvyEui03-tU4aXsmHeAmAkh0RHg_350x200_2x-0-300x400.jpeg",
          description: "Play Station Plus",
          price: "45,00 MAD",
        },
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/07/JR5v-wtibBraTiwW3YXRMRPp5CC_6i4mM0MU3QmkrTo_350x200_2x-0-1-300x400.jpeg",
          description: "Netflix Pack 1 Month",
          price: "25,00 MAD",
        },
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/12/steam-gift-card-50-300x400.png",
          description: "Steam Pack Game",
          price: "25,00 MAD",
        },
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/10/3296895388-300x400.jpg",
          description: "Xbox Steam Pack",
          price: "28,00 MAD",
        },
        {
          img: "https://zoneplay.ma/wp-content/uploads/2021/10/5-300x400.jpg",
          description: "Google Play Credit",
          price: "35,00 MAD",
        },
      ],
    };
  },
};
</script>

<style scoped>
.align-center {
  text-align: center;
}

.v-card {
  border: 0.5px solid rgb(238, 238, 238);
  border-radius: 20px !important;
  box-shadow: -3px -4px 17px 4px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: -3px -4px 17px 4px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -3px -4px 17px 4px rgba(0, 0, 0, 0.16);
}

.container {
  border-radius: 50px !important;
}
</style>
