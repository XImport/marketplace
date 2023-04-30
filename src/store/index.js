import Vue from "vue";
import Vuex from "vuex";
import DATA from "../DATA";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BaseProducts: DATA,
    products: [],
  },
  getters: {
    AllProducts(state) {
      return state.BaseProducts;
    },
    Allcategories(state) {
      const unique = {};
      let result = state.BaseProducts.filter((obj) => {
        if (!unique[obj.Categorie]) {
          unique[obj.Categorie] = true;
          return true;
        }
        return false;
      });
      return result;
    },
    FilteredProducts(state) {
      return state.products;
    },
  },
  mutations: {
    ChangeContent(state, payload) {
      state.Products = payload;
    },
    GetCategorie(state, Categorie) {
      // console.log(Categorie);
      let result = [];
      state.BaseProducts.filter((match) => {
        if (match.Categorie == Categorie) {
          // state.BaseProducts = match;
          result.push(match);
          // state.BaseProducts.length = 0;
          // state.BaseProducts.push(match);
          // console.log(state.BaseProducts);
        }
        // console.log(result);
        state.products = result;
      });
    },
  },
  actions: {},
  modules: {},
});
