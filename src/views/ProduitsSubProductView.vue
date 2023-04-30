<template>
  <v-app>
    <MiniBar />
    <SubMinibar />
    <NavBar />
    <div class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus">
      {{ $route.params.id }}
    </div>
    <div class="text-center text-h6 reset--router">
      <span class="text-center text-h6 reset--router" @click="resetlink"
        ><v-icon class="reset--router">mdi-arrow-left</v-icon> Tout
        Categories</span
      >
    </div>

    <div class="d-flex">
      <v-container>
        <v-container>
          <AllProductsList :AllProducts="$route.params.items" />
        </v-container>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SubMinibar from "@/components/SubMinibar.vue";
import MiniBar from "@/components/MiniBar.vue";

import AllProductsList from "@/components/AllProductsList.vue";

export default {
  name: "HomeView",
  data() {
    return {
      items: this.$router.params.items,
    };
  },
  methods: {
    resetlink() {
      this.$router.push({ name: "produits" });
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

    AllProductsList,
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
