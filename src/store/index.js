import Vue from 'vue';
import Vuex from 'vuex';
import Pagination from './Modules/Pagination';
import Loading from './Modules/Loading';
import Cart from './Modules/Cart';
import Product from './Modules/Product';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Pagination,
    Loading,
    Cart,
    Product,
  },
});
