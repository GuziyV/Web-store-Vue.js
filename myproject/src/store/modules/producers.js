import axios from 'axios';

const state = {
  all: [],
};

const getters = {
  allProducers: st => st.all,
};

const actions = {
  getAllProducers({ commit }) {
    axios.get('/producer').then((response) => {
      const producers = response.data;
      commit('setProducers', producers);
    });
  },
  addCategory({ commit }, producer) {
    axios.post('/producer', producer).then((response) => {
      const producerFromServer = response.data;
      commit('addCProducer', producerFromServer);
    });
  },
};

const mutations = {
  setProducers(st, producers) {
    // eslint-disable-next-line no-param-reassign
    st.all = producers;
  },
  addProducer(st, producer) {
    // eslint-disable-next-line no-param-reassign
    st.all.push(producer);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
