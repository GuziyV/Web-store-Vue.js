import axios from 'axios';
import Vue from 'vue';

const state = {
  all: [],
};

const getters = {
  allOrders: st => st.all,
};

const actions = {
  getAllOrders({ commit }, id) {
    axios.get(`/order/${id}`).then((response) => {
      commit('setOrders', response.data);
    });
  },
  addOrder({ commit }, userId) {
    axios.post(`/order/${userId}`).then((response) => {
      const order = response.data;
      commit('addOrder', order);
      Vue.$snotify.success('You just add a new order. Please wait for a call');
    });
  },
};

const mutations = {
  setOrders(st, orders) {
    // eslint-disable-next-line no-param-reassign
    st.all = orders;
  },
  addOrder(st, order) {
    // eslint-disable-next-line no-param-reassign
    st.all.push(order);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
