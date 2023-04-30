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
        <v-card class="pa-2" outlined tile>
          <v-img
            :lazy-src="NewProduct.img"
            max-height="200"
            max-width="250"
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
          img: "https://yozimarket.com/1342-home_default/anneaux-de-calamar-500g-islamar-.jpg",
          description: "ANNEAUX DE CALAMAR 500g ISLAMAR",
          price: "45,00 MAD",
        },
        {
          img: "https://yozimarket.com/1340-home_default/feta-cheese-rolls-12-480g.jpg",
          description: "FETA CHEESE ROLLS *12 480g",
          price: "60,00 MAD",
        },
        {
          img: "https://yozimarket.com/1338-home_default/spiral-pie-cheese-800g-lezza-.jpg",
          description: "SPIRAL PIE CHEESE 800g LEZZA",
          price: "56,00 MAD",
        },
        {
          img: "https://yozimarket.com/1337-home_default/street-fries-cheddar-crispy-onions-300g-mccain.jpg",
          description: "STREET FRIES CHEDDAR CRISPY ONIONS...",
          price: "45,00 MAD",
        },
        {
          img: "https://yozimarket.com/1336-home_default/potato-up-aux-herbes-2x90g-mccain.jpg",
          description: "POTATO'UP AUX HERBES 2X90g MCCAIN",
          price: "25,00 MAD",
        },
        {
          img: "https://yozimarket.com/1335-home_default/frit-up-mccain-180-g-2-90-g.jpg",
          description: " Frit up - McCain - 180 g (2 * 90 g)",
          price: "25,00 MAD",
        },
        {
          img: "https://yozimarket.com/1334-home_default/crispy-onion-rings-350g-mccain.jpg",
          description: "CRISPY ONION RINGS 350g MCCAIN",
          price: "28,00 MAD",
        },
        {
          img: "https://yozimarket.com/1333-home_default/nachos-triangles-230g-pickers-mccain-.jpg",
          description: " NACHOS TRIANGLES 230g PICKERS MCCAIN",
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
