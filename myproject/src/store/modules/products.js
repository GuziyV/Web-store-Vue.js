import axios from 'axios';
import Vue from 'vue';

const state = {
  all: [],
};

const getters = {
  allProducts: st => st.all,
};

const actions = {
  getAllProducts({ commit }, params) {
    let url = '';
    if (params) {
      url = `/products?page=${params.page || 1}&search=${params.search || ''}`;
    } else {
      url = '/products';
    }
    return axios.get(url).then((response) => {
      const products = response.data;
      commit('setProducts', products);
      return products;
    });
  },
  addProduct({ commit }, product) {
    return axios.post('/products', product).then((response) => {
      const productFromServer = response.data;
      commit('addProduct', productFromServer);
      Vue.$snotify.success('New product appears in the store');
    });
  },
  deleteProduct({ commit }, { id }) {
    return axios.delete(`/products/${id}`).then((response) => {
      if (response.data) {
        commit('deleteProduct', { id });
        Vue.$snotify.success('Product was removed the store');
      }
    });
  },
  updateProduct({ commit }, product) {
    return axios.put(`/products/${product.id}`, product).then((response) => {
      if (response.data) {
        commit('updateProduct', product);
        Vue.$snotify.success('Product was updated');
      }
    });
  },
};

const mutations = {
  setProducts(st, products) {
    // eslint-disable-next-line no-param-reassign
    st.all = products;
  },
  addProduct(st, product) {
    // eslint-disable-next-line no-param-reassign
    st.all.push(product);
  },
  deleteProduct(st, { id }) {
    // eslint-disable-next-line no-param-reassign
    st.all = st.all.filter(el => el.id !== id);
  },
  updateProduct(st, product) {
    // eslint-disable-next-line no-param-reassign
    st.all = st.all.filter(p => p.id !== product.id);
    // eslint-disable-next-line no-param-reassign
    product.fullName = `${product.producerName} ${product.model}`;
    st.all.push(product);
  },
  decrementProductInventory(st, { id }) {
    const product = st.all.find(pr => pr.id === id);
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
