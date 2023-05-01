import Vue from "vue";
import Vuex from "vuex";
import DATA from "../DATA";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BaseProducts: DATA,
    products: [],
    AddToListCounter: 0,
    AddToList: [],
  },
  getters: {
    AllProducts(state) {
      return state.BaseProducts;
    },
    ListItemsCounter(state) {
      return state.AddToListCounter;
    },

    ListItemsbascket(state) {
      return state.AddToList;
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
    ChangerCounter(state) {
      state.AddToListCounter = state.AddToListCounter + 1;
    },
    ReduceCounter(state) {
      state.AddToListCounter = state.AddToListCounter - 1;
    },
    AddToList(state, payload) {
      state.AddToList = state.AddToList.concat(payload);
    },
    RemoveToList(state, payload) {
      state.AddToList = state.AddToList.filter((obj) => {
        return obj.id !== payload;
      });
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
