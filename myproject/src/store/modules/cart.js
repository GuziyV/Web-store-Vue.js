import axios from 'axios';

const state = {
  items: [],
  checkoutStatus: null,
};

const getters = {
  cartProducts: st => st.items,
};

const actions = {
  getAllProducts({ commit }) {
    axios.get('/products').then((response) => {
      const products = response.data;
      commit('setProducts', products);
    });
  },
  addProductToCart({ st, commit }, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = st.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', product);
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true });
    }
  },
};

// mutations
const mutations = {
  pushProductToCart(st, product) {
    st.items.push(product);
  },

  incrementItemQuantity(st, product) {
    const cartItem = st.items.find(item => item.id === product.id);
    // eslint-disable-next-line no-plusplus
    cartItem.numberOfItems++;
  },

  setCartItems(st, { items }) {
    // eslint-disable-next-line no-param-reassign
    st.items = items;
  },

  setCheckoutStatus(st, status) {
    // eslint-disable-next-line no-param-reassign
    st.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
