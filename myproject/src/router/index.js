import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout';
import Products from '@/components/Products';
import Orders from '@/components/Orders';

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
      ],
    },
  ],
});
