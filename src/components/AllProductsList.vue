<template>
  <v-container class="transparent">
    <v-row no-gutters class="align-center pa-0">
      <v-col
        v-for="(NewProduct, index) in AllProducts"
        :key="index"
        cols="12"
        sm="3"
        class="pa-2"
      >
        <v-card
          class="pa-2 justify-center img--center"
          outlined
          tile
          max-width="374"
        >
          <v-img
            :lazy-src="NewProduct.img"
            max-height="200"
            :src="NewProduct.img"
          >
            <div v-if="AddBoxItems(NewProduct.description)">
              <v-btn class="align-end red--text pb-2" icon>
                <v-icon @click="Addtocard(NewProduct)"
                  >mdi-heart-outline</v-icon
                >
              </v-btn>
            </div>
            <div v-if="!AddBoxItems(NewProduct.description)">
              <v-btn class="align-end red--text pb-2" icon>
                <v-icon @click="Removetocard(NewProduct.id)">mdi-heart</v-icon>
              </v-btn>
            </div>
          </v-img>

          <div class="my-4 text-subtitle-1 text-center">
            {{ NewProduct.description }}
          </div>
          <h3 class="my-4 text-center">{{ NewProduct.price }}</h3>
          <v-card-actions>
            <v-btn
              class="mx-auto rounded-xl black white--text"
              @click="DetailsPage(NewProduct)"
              >View More</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store";
export default {
  props: {
    AllProducts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    DetailsPage(Product) {
      console.log(Product);
      this.$router.push({
        name: "ProductDetails",
        params: {
          id: Product,
          Product: Product,
        },
      });
    },
    Addtocard(Item) {
      console.log(Item);
      store.commit("ChangerCounter");
      store.commit("AddToList", Item);
    },
    Removetocard(Item) {
      store.commit("ReduceCounter");
      store.commit("RemoveToList", Item);
    },
    AddBoxItems(Item) {
      for (let i = 0; i < this.$store.getters.ListItemsbascket.length; i++) {
        if (this.$store.getters.ListItemsbascket[i].description === Item) {
          return false;
        }
      }
      return true;
    },
  },
  data() {
    return {};
  },
  computed: {
    BascketBox() {
      return this.$store.getters.ListItemsbascket;
    },
  },
};
</script>

<style scoped>
.align-center {
  display: flex;
  justify-content: center;
}

.v-card {
  border: 0.5px solid rgb(238, 238, 238);
  border-radius: 20px !important;
  box-shadow: -3px -4px 17px 4px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: -3px -4px 17px 4px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -3px -4px 17px 4px rgba(0, 0, 0, 0.16);
}

.container {
  border-radius: 50px !important;
  max-width: 90%;
  max-height: 90%;
}

@media only screen and (max-width: 600px) {
  .container {
    border-radius: 50px !important;
    max-width: 90%;
    max-height: 90%;
  }
}

.img--center {
  justify-content: center;
  align-self: center;
  align-content: center;
  margin-left: 25%;
  width: 100%;
}
</style>
