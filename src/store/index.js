import Vue from 'vue';
import Vuex from 'vuex';
import Loading from './Modules/Loading';
import Cart from './Modules/Cart';
import Product from './Modules/Product';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Loading,
    Cart,
    Product,
  },
});
