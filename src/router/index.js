import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/index.vue';
import Layout from '@/views/Layout';
import ShoppingSteps from '@/views/ShoppingSteps';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Products" */ '@/views/Products').then(
          (m) => m.default,
        ),
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import(
          /* webpackChunkName: "Product" */ '@/views/Products/Product'
        ).then((m) => m.default),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '@/views/About').then(
          (m) => m.default,
        ),
      },
      {
        path: '/success',
        name: 'Success',
        component: () => import(/* webpackChunkName: "Success" */ '@/views/Success').then(
          (m) => m.default,
        ),
      },
      {
        path: '/cart',
        component: ShoppingSteps,
        children: [
          {
            path: '',
            name: 'Cart',
            component: () => import(
              /* webpackChunkName: "Cart" */ '@/views/ShoppingSteps/Cart'
            ).then((m) => m.default),
          },
        ],
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
