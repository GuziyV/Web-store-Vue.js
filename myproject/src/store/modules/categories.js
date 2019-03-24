import axios from 'axios';

const state = {
  all: [],
};

const getters = {
  allCategories: st => st.allProducts,
};

const actions = {
  getAllCategories({ commit }) {
    axios.get('/categories').then((response) => {
      const categories = response.data;
      commit('setCategories', categories);
    });
  },
  addCategory({ commit }, category) {
    axios.post('/categories', category).then((response) => {
      const categoryFromServer = response.data;
      commit('addCategory', categoryFromServer);
    });
  },
};

const mutations = {
  setCategories(st, products) {
    // eslint-disable-next-line no-param-reassign
    st.all = products;
  },
  addCategory(st, product) {
    // eslint-disable-next-line no-param-reassign
    st.all.push(product);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
