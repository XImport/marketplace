<template>
  <div>
    <v-app-bar
      color="black"
      class="pa-12"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <div class="d-flex align-right ml-12 mb-12">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="d-lg-none white--text"
        ></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          :class="`shrink mr-2 ${Logo}`"
          contain
          src="https://yozimarket.com/img/my-shop-logo-1641397311.jpg"
          transition="scale-transition"
          width="120"
        />
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div
        v-for="(btn, index) in NavButtons"
        :key="index"
        class="text-danger d-none d-lg-block justify-center mb-12 custom-link text-center"
      >
        <div class="text-center">
          <v-menu
            transition="scale-transition"
            origin="center center"
            open-on-hover
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="links-nav"
                target="_blank"
                text
                v-bind="attrs"
                v-on="on"
              >
                <router-link
                  :class="`mr-2 justify-center custom-link ${links}`"
                  :to="btn.link"
                >
                  {{ btn.text }}
                </router-link>

                <!-- <v-icon>mdi-open-in-new</v-icon> -->
              </v-btn>
            </template>
            <v-list class="mt-12 mt-12 max--width" v-if="btn.dropdown">
              <div v-if="btn.categories">
                <v-container class="grey lighten-5">
                  <v-row no-gutters>
                    <v-col
                      v-for="(categorie, index) in btn.categories"
                      :key="index"
                      cols="12"
                      sm="3"
                    >
                      <h3>
                        {{ categorie.name }}
                      </h3>
                      <div
                        v-for="(product, indedx) in categorie.products"
                        :key="indedx"
                      >
                        <v-list-item-title
                          class="pb-2"
                          v-text="product.name"
                        ></v-list-item-title>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NavButtons: [
        {
          text: "Accueil",
          icon: "mdi-home",
          link: "/",
          dropdown: false,
        },
        {
          text: "Nos produits",
          link: "/produits",
          icon: "mdi-greenhouse",
          categories: [
            {
              name: "Electronics",
              products: [
                { name: "Computers & Tablets" },
                { name: "Smartphones & Accessories" },
                { name: "TVs & Home Theater" },
                { name: "Cameras & Camcorders" },
              ],
            },
            {
              name: "Clothing",
              products: [
                { name: "Women's Clothing" },
                { name: "Men's Clothing" },
                { name: "Kids & Baby Clothing" },
              ],
            },
            {
              name: "Home & Garden",
              products: [
                { name: "Furniture & Decor" },
                { name: "Bedding & Bath" },
                { name: "Kitchen & Dining" },
              ],
            },
            {
              name: "Beauty",
              products: [
                { name: "Makeup & Cosmetics" },
                { name: "Fragrance" },
                { name: "Bath & Body" },
                { name: "Men's Grooming" },
                { name: "Oral Care" },
              ],
            },
          ],

          dropdown: false,
        },
        {
          text: "Promotions",
          icon: "mdi-cast",
          link: "/",
          dropdown: false,
        },

        {
          text: "Livraison",
          icon: "mdi-text-box-multiple-outline",
          link: "/",
          dropdown: false,
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap");
.custom-link {
  color: rgb(255, 255, 255) !important; /* your desired color */
  text-decoration: none !important; /* remove underline */
  cursor: pointer !important; /* optional: add cursor style */
  font-family: "Lato", sans-serif;
}

.max--width {
  width: 800px !important;
}
.v-menu__content.theme--light.menuable__content__active {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 30% !important;
}
</style>
