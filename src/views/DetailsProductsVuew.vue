<template>
  <v-app>
    <MiniBar />
    <SubMinibar />
    <NavBar />
    <div
      class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus"
    ></div>
    <v-container class="max-width">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-container class="max-width2">
            <v-img :src="Product.img" contain />
          </v-container>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <div class="text-h3 pb-6 text-left mt-9 text--custom font--cus">
            {{ Product.description }}
          </div>

          <h2>Price : {{ Product.price }}</h2>

          <p>{{ Product.description }}</p>
          <v-btn color="success"
            ><v-icon>mdi-whatsapp</v-icon> Contact Us Via Whatsapp</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SubMinibar from "@/components/SubMinibar.vue";
import MiniBar from "@/components/MiniBar.vue";

export default {
  name: "HomeView",
  computed: {
    Product() {
      return this.$route.params.Product;
    },
  },
  data() {
    return {
      Proooduct: {
        id: 1,
        name: "Product Name",
        price: "$100",
        description: "This is a product description.",
        imageUrl: "https://via.placeholder.com/350x350",
      },
    };
  },
  methods: {
    addToCart() {
      // Implement the logic to add the product to the cart
    },
  },
  // props: {
  //   filteredProducts: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  components: {
    SubMinibar,
    MiniBar,
    NavBar,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");

.font--cus {
  font-family: "Lato", sans-serif;
}

.max-width {
  max-width: 70%;
}

.max-width2 {
  max-width: 80%;
}
@media screen and (max-width: 600px) {
  .v-carousel {
    margin-top: -25%;
  }
  .max-width2 {
    max-width: 100%;
  }
  .max-width {
    max-width: 100%;
  }
  .text--custom {
    font-size: 3rem !important;
  }
}

.reset--router {
  cursor: pointer !important;
  transition: all ease-in 0.1s;
}
.reset--router:hover {
  color: red;
}
</style>
