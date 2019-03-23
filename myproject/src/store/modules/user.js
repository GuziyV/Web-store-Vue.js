import userService from './../../services/userService';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

const state = {
  isLoggedIn: !!localStorage.getItem('user'),
  currentUser: JSON.parse(localStorage.getItem('user')),
};

const getters = {
  isLoggedIn: st => st.isLoggedIn,
  currentUser: st => st.currentUser,
};

const mutations = {
  [LOGIN](st) {
    // eslint-disable-next-line no-param-reassign
    st.pending = true;
  },
  [LOGIN_SUCCESS](st, user) {
    // eslint-disable-next-line no-param-reassign
    st.currentUser = user;
    // eslint-disable-next-line no-param-reassign
    st.isLoggedIn = true;
    // eslint-disable-next-line no-param-reassign
    st.pending = false;
  },
  [LOGOUT](st) {
    // eslint-disable-next-line no-param-reassign
    st.isLoggedIn = false;
    // eslint-disable-next-line no-param-reassign
    st.currentUser = null;
  },
};

const actions = {
  login({ commit }, user) {
    commit(LOGIN); // TODO show spinner
    return userService.login(user.login, user.password).then((u) => {
      commit(LOGIN_SUCCESS, u);
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
