import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-snotify/styles/material.css';

import BootstrapVue from 'bootstrap-vue';
import Snotify from 'vue-snotify';
import InfiniteLoading from 'vue-infinite-loading';
import vSelect from 'vue-select';
import lineClamp from 'vue-line-clamp';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import authHeader from './helpers/authHeader';
import store from './store';

Vue.use(Snotify);
Vue.use(BootstrapVue);
Vue.use(InfiniteLoading);
Vue.use(lineClamp);
Vue.component('v-select', vSelect);


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
  beforeCreate() {
    Vue.$snotify = this.$snotify;
  },
});
