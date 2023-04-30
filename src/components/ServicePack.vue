<template>
  <v-container class="justify-center align-center pa-12 bg rounded-xl">
    <v-row class="justify-center align-center">
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="rounded-xl pa-6">
          <v-img :src="service.image" height="200px" contain></v-img>
          <v-card-title class="justify-center">{{
            service.title
          }}</v-card-title>
          <v-card-text class="text-center">{{
            service.description
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Confirmation ",
          description: "Contactez le 06 61 30 67 35 (9:00 à 18:00). ",
          image:
            "https://icons-for-free.com/iconfiles/png/512/support+icon-1320184287573814018.png",
          link: "#",
        },
        {
          title: "Livraison",
          description: "Livraison gratuite à partir de 300dh d'achat. ",
          image: "https://cdn-icons-png.flaticon.com/512/1067/1067555.png",
          link: "#",
        },
        {
          title: "Heureuse",
          description: "Happy Client Means Happy Bussniess",
          image: "https://cdn-icons-png.flaticon.com/512/2190/2190516.png",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.bg {
  background-color: #f6f6f6c5;
}
</style>
