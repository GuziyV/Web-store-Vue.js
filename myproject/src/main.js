import axios from 'axios';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import authHeader from './helpers/authHeader';
import store from './store';


axios.defaults.baseURL = 'https://localhost:44354/api';
axios.defaults.headers.common = authHeader();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
