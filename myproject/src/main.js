import axios from 'axios';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import authHeader from './helpers/authHeader';

axios.defaults.baseURL = 'https://localhost:44354/api';
axios.defaults.headers.common = authHeader();

export * from './services/userService';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
