import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProduitsView from "../views/ProduitsView";
import ProduitsSubProducts from "../views/ProduitsSubProductView.vue";
import WishLIst from "../views/WishListView.vue";
import DetailsProducts from "../views/DetailsProductsVuew.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produits",
    name: "produits",
    component: ProduitsView,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishLIst,
  },
  {
    path: "/produits/:id",
    name: "ProductDetails",
    component: DetailsProducts,
    props: true,
  },
  {
    path: "/Categories/:id",
    name: "Subproduits",
    component: ProduitsSubProducts,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
