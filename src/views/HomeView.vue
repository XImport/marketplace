<template>
  <v-app>
    <MiniBar />
    <SubMinibar />
    <NavBar />

    <div>
      <div class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus">
        Nos catégories
      </div>
      <v-container class="max-width pt-6">
        <v-container class="max-width pt-6">
          <CategoriesUi />
        </v-container>
      </v-container>
    </div>

    <div>
      <div class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus">
        Nouveautés
      </div>
      <v-container class="max-width pt-6">
        <ProductList />
      </v-container>
    </div>
    <div>
      <div class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus">
        Clients Review
      </div>
      <v-container class="max-width pt-6">
        <ClientsReview />
      </v-container>
    </div>
    <div>
      <div
        class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus"
      ></div>
      <v-container class="max-width pt-6">
        <BannerText />
      </v-container>
    </div>
    <div>
      <div
        class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus"
      ></div>
      <v-container class="max-width pt-6">
        <ServicePack />
      </v-container>
    </div>

    <div>
      <div class="text-h3 pb-6 text-center mt-9 text--custom pt-12 font--cus">
        Notre Localisation
      </div>
      <v-container class="max-width pt-6">
        <MapLocation />
      </v-container>
    </div>

    <div class="pt-12 mt-6">
      <FootTer />
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SubMinibar from "@/components/SubMinibar.vue";
import MiniBar from "@/components/MiniBar.vue";
import CategoriesUi from "@/components/CategoriesUi.vue";
import ProductList from "@/components/ProductsList.vue";
import ClientsReview from "@/components/ClientsReview.vue";
import BannerText from "@/components/BannerText.vue";
import ServicePack from "@/components/ServicePack.vue";
import MapLocation from "@/components/MapLocation.vue";
import FootTer from "@/components/FootTer.vue";
export default {
  name: "HomeView",

  components: {
    SubMinibar,
    MiniBar,
    NavBar,
    CategoriesUi,
    ProductList,
    ClientsReview,
    BannerText,
    ServicePack,
    MapLocation,
    FootTer,
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
</style>
