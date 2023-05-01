<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(carousel, index) in Carousel" :key="index" class="pa-2">
        <v-container>
          <v-img
            :lazy-src="carousel.img"
            max-height="250"
            :src="carousel.img"
          ></v-img>
          <v-list-item-title class="text-center text-h3">{{
            carousel.title
          }}</v-list-item-title>
        </v-container>
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
        img: "https://cdn-icons-png.flaticon.com/512/732/732228.png?w=826&t=st=1682903456~exp=1682904056~hmac=d20c528f44094571f4f964f1820dcaba9402d652dafb652dc39cf66f072baee9",
        title: "Netflix",
      },
      {
        img: "https://cdn-icons-png.flaticon.com/512/174/174872.png?w=826&t=st=1682903513~exp=1682904113~hmac=3741e87a617c5bb8ee6aca263aaaae9243546e9366af6ffdd686668a3d3b629b",
        title: "Spotify ",
      },
      {
        img: "https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png",
        title: "Steam",
      },
      {
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dd9yfg2-c86771be-cb45-4f93-8d91-2df621e3f52a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGQ5eWZnMi1jODY3NzFiZS1jYjQ1LTRmOTMtOGQ5MS0yZGY2MjFlM2Y1MmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.80RK6sxXlaTglWbZkh8Nn4-z1kxSANVqOtAZNWRrfPU",
        title: "UPLAY",
      },
      {
        img: "data:image/png;base64,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",
        title: "HULU",
      },
      {
        img: "https://img.freepik.com/free-icon/google-play_318-674232.jpg",
        title: "GOOGLE",
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
