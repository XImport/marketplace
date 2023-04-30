<template>
  <div class="d-none d-lg-block">
    <v-container class="pt-6">
      <v-container class="pt-6">
        <v-card height="600" width="256" class="mx-12">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Nos Categories
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item
                v-for="item in Allcategories"
                :key="item.title"
                link
                @click="changeLink(item.Categorie)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.Categorie }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {},
  computed: {
    Allcategories() {
      return this.$store.getters.Allcategories;
    },
  },
  methods: {
    changeLink(categorieName) {
      this.$store.commit("GetCategorie", categorieName);

      console.log("this result", this.$store.getters.FilteredProducts);
      this.$router.push({
        name: "Subproduits",
        params: {
          id: categorieName,
          items: this.$store.getters.FilteredProducts,
        },
      });
      // console.log(this.$store.getters.filteredItems);
    },
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
