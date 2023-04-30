<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters class="align-center">
      <v-col
        v-for="(NewProduct, index) in AllProducts"
        :key="index"
        cols="12"
        sm="3"
        class="pa-2"
      >
        <v-card class="pa-2 justify-center" outlined tile>
          <v-img
            :lazy-src="NewProduct.img"
            max-height="200"
            max-width="250"
            :src="NewProduct.img"
          >
            <v-btn class="align-end red--text pb-2" icon
              ><v-icon>mdi-heart-outline</v-icon></v-btn
            >
          </v-img>

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
  props: {
    AllProducts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.align-center {
  display: flex;
  justify-content: center;
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
  max-width: 90%;
  max-height: 90%;
}

@media only screen and (max-width: 600px) {
  .container {
    border-radius: 50px !important;
    max-width: 90%;
    max-height: 90%;
  }
}
</style>
