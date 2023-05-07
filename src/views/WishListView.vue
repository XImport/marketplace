<template>
  <v-app>
    <MiniBar />
    <SubMinibar />
    <NavBar />
    <div class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus">
      My Wishlist
    </div>
    <div>
      <v-container class="max-width2">
        <WishLIst />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SubMinibar from "@/components/SubMinibar.vue";
import MiniBar from "@/components/MiniBar.vue";
import WishLIst from "@/components/WishListTable.vue";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    SubMinibar,
    MiniBar,
    NavBar,
    WishLIst,
  },
  computed: {
    AllProducts() {
      return this.$store.getters.AllProducts;
    },
  },
  methods: {},
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
  max-width: 60%;
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
