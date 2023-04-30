<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(carousel, index) in Carousel" :key="index" class="pa-2">
        <v-img
          :lazy-src="carousel.img"
          max-height="150"
          :src="carousel.img"
        ></v-img>
        <v-list-item-title class="text-center">{{
          carousel.title
        }}</v-list-item-title>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      touchThreshold: 5,
    },
    Carousel: [
      {
        img: "https://yozimarket.com/modules/anthemeblocks/images/60659f710e2f0.jpg",
        title: "Produits de la mer",
      },
      {
        img: "https://yozimarket.com/modules/anthemeblocks/images/60659f211468a.jpg",
        title: "Épicerie ",
      },
      {
        img: "https://yozimarket.com/modules/anthemeblocks/images/62077d5bc4d25.jpg",
        title: "Produits traiteur",
      },
      {
        img: "https://yozimarket.com/modules/anthemeblocks/images/60659fca5aa6e.jpg",
        title: "Desserts",
      },
      {
        img: "https://yozimarket.com/modules/anthemeblocks/images/60659e20f1fe2.jpg",
        title: "Surgelés",
      },
      {
        img: "https://yozimarket.com/modules/anthemeblocks/images/62077ae53ce40.jpg",
        title: "Produits sans gluten",
      },
    ],
  }),
};
</script>
<style scoped>
button.slick-prev:before,
button.slick-next:before {
  background-color: red !important;
}
</style>
