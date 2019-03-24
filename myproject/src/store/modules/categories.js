import axios from 'axios';

const state = {
  all: [],
};

const getters = {
  allCategories: st => st.all,
};

const actions = {
  getAllCategories({ commit }) {
    axios.get('/category').then((response) => {
      const categories = response.data;
      commit('setCategories', categories);
    });
  },
  addCategory({ commit }, category) {
    axios.post('/category', category).then((response) => {
      const categoryFromServer = response.data;
      commit('addCategory', categoryFromServer);
    });
  },
};

const mutations = {
  setCategories(st, category) {
    // eslint-disable-next-line no-param-reassign
    st.all = category;
  },
  addCategory(st, category) {
    // eslint-disable-next-line no-param-reassign
    st.all.push(category);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
