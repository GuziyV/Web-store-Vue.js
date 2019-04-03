import axios from 'axios';
import Vue from 'vue';

const state = {
  items: [],
};

const getters = {
  cartProducts: st => st.items,
};

const actions = {
  getAllProducts({ commit }, id) {
    axios.get(`/cart/${id}`).then((response) => {
      const products = response.data.products;
      commit('setCartItems', products);
    });
  },
  buyItemsFromCart({ commit }, userId) {  //transfer user cart to order
    axios.post(`/order/${userId}`).then((response) => {
      commit('cleanCart');
      commit('orders/addOrder', response.data,  { root: true });
    });
  },
  // eslint-disable-next-line no-shadow
  addProductToCart({ state, commit, rootState }, product) {
    if(!rootState.user.currentUser) {
      Vue.$snotify.error('You need to register or log in first');
      return;
    }
    axios.post(`/cart/${rootState.user.currentUser.id}`, product).then((response) => {
      if (product.numberOfItems > 0) {
        const cartItem = state.items.find(item => item.id === product.id);
        if (!cartItem) {
          commit('setCartItems', response.data.products);
        } else {
          cartItem.numbuerOfProductsInCart++;
        }
        Vue.$snotify.success('New product was add to your cart');
        // remove 1 item from stock
        commit('products/decrementProductInventory', { id: product.id },  { root: true });
      }
    });
  },
};

// mutations
const mutations = {
  pushProductToCart(st, product) {
    st.items.push(product);
  },

  cleanCart(st) {
    // eslint-disable-next-line no-param-reassign
    st.items = [];
  },

  incrementItemQuantity(st, product) {
    const cartItem = st.items.find(item => item.id === product.id);
    // eslint-disable-next-line no-plusplus
    cartItem.numberOfItems++;
  },

  setCartItems(st, items) {
    if(!items) {
      st.items = [];
      return;
    } 
    // eslint-disable-next-line no-param-reassign
    st.items = items;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
