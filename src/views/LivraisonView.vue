<template>
  <v-app>
    <MiniBar />
    <SubMinibar />
    <NavBar />
    <div class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus">
      Livraison
    </div>
    <v-container v-for="(img, index) in Livraison" :key="index">
      <v-img :src="img.src" />
    </v-container>
    <div class="pt-12 mt-6">
      <FootTer />
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SubMinibar from "@/components/SubMinibar.vue";
import MiniBar from "@/components/MiniBar.vue";

import FootTer from "@/components/FootTer.vue";
export default {
  name: "HomeView",
  data() {
    return {
      Livraison: [
        {
          src: "https://yozimarket.com/img/cms/livraison%20modifier-1_1.jpg",
        },
        {
          src: "https://yozimarket.com/img/cms/livraison%20modifier-2.jpg",
        },
        {
          src: "https://yozimarket.com/img/cms/livraison%20modifier-3.jpg",
        },
        {
          src: "https://yozimarket.com/img/cms/livraison%20modifier-4.jpg",
        },
        {
          src: "https://yozimarket.com/img/cms/livraison%20modifier-5.jpg",
        },
      ],
    };
  },
  components: {
    SubMinibar,
    MiniBar,
    NavBar,

    FootTer,
  },
  computed: {
    AllProducts() {
      return this.$store.getters.AllProducts;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");

.cont--position {
  margin-left: -3%;
}

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
</style>
