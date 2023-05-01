<template>
  <v-container class="grey lighten-5 pa-12 rounded-xl">
    <v-row no-gutters>
      <v-col
        v-for="(review, index) in ClientReview"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-card class="mr-5 rounded-xl">
          <v-card-text>
            <v-row align="center">
              <v-avatar size="60">
                <img alt="Avatar" :src="review.userimg" />
              </v-avatar>
              <v-col class="ml-2">
                <v-card-title>{{ review.title }}</v-card-title>
                <v-rating
                  v-model="review.rating"
                  :readonly="true"
                  color="yellow"
                  half-increments
                ></v-rating>
              </v-col>
            </v-row>
            <v-card-text>{{ review.review }}</v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ClientReview: [
        {
          title: "hamza nwn",
          userimg:
            "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
          review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          rating: 5,
        },
        {
          title: "Mohammed Tagi",
          userimg:
            "https://nickfinck.com/images/mentoring/Mentoring_persona_new.jpg",
          review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          rating: 4,
        },
        {
          title: "Meryem Jati",
          userimg:
            "https://nickfinck.com/images/mentoring/Mentoring_persona_grad.jpg",
          review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          rating: 3.5,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
