import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/index.vue';
import Page from '@/views/Page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '',
    component: Page,
    children: [
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Products" */ '@/views/Products'),
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import(/* webpackChunkName: "Product" */ '@/views/Products/Product'),
      },
      {
        path: '/news',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '@/views/News'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '@/views/About'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Cart" */ '@/views/Cart'),
      },
    ],
  },

];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
