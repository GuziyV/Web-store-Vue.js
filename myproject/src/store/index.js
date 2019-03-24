import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import products from './modules/products';
import categories from './modules/categories';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    products,
    categories,
  },
});
