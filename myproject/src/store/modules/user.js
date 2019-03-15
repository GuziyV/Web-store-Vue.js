import userService from './../../services/userService';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

const state = {
  isLoggedIn: !!localStorage.getItem('user'),
};

const getters = {
  isLoggedIn: st => st.isLoggedIn,
};

const mutations = {
  [LOGIN](st) {
    // eslint-disable-next-line no-param-reassign
    st.pending = true;
  },
  [LOGIN_SUCCESS](st) {
    // eslint-disable-next-line no-param-reassign
    st.isLoggedIn = true;
    // eslint-disable-next-line no-param-reassign
    st.pending = false;
  },
  [LOGOUT](st) {
    // eslint-disable-next-line no-param-reassign
    st.isLoggedIn = false;
  },
};

const actions = {
  login({ commit }, user) {
    commit(LOGIN); // show spinner
    return userService.login(user.login, user.password).then(() => {
      commit(LOGIN_SUCCESS);
    });
  },
  logout({ commit }) {
    userService.logout();
    commit(LOGOUT);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
