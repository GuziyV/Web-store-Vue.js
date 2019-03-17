import axios from 'axios';

const state = {
  all: [],
};

const getters = {
  allProducts: st => st.allProducts,
};

const actions = {
  getAllProducts({ commit }) {
    axios.get('/products').then((response) => {
      const products = response.data;
      commit('setProducts', products);
    });
  },
};

const mutations = {
  setProducts(st, products) {
    // eslint-disable-next-line no-param-reassign
    st.all = products;
  },
  decrementProductInventory(st, { id }) {
    const product = state.all.find(pr => pr.id === id);
    // eslint-disable-next-line no-plusplus
    product.numberOfItems--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
