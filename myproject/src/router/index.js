import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout';
import SignIn from '@/components/SignIn';
import Products from '@/components/Products';
import Orders from '@/components/Orders';
import SignUp from '@/components/SignUp';
import Admin from '@/components/admin/Admin';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/products',
      children: [
        {
          path: 'products',
          name: 'products',
          component: Products,
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders,
        },
        {
          path: 'signin',
          name: 'signin',
          component: SignIn,
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignUp,
        },
        {
          path: 'admin',
          name: 'admin',
          component: Admin,
        },
      ],
    },
  ],
});
