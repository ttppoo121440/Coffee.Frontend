import { getProduct, getSingleProducts } from '@/utils/api';
import Category from '@/utils/Adapter/Product/Category';
import HotProduct from '@/utils/Adapter/Product/HotProduct';

export default {
  namespaced: true,
  state: {
    productList: [],
    product: {},
    hotProduct: [],
    category: [],
  },
  actions: {
    async getProduct({ commit }) {
      commit('Loading/LOADING', true, {
        root: true,
      });

      let result = null;
      try {
        result = await getProduct();
      } finally {
        commit('Loading/LOADING', false, {
          root: true,
        });
      }

      commit('SET_DATA', result.data);

      const adapter = new Category(result.data);
      commit('SET_CATEGORY', adapter.transform());

      return result;
    },
    async getHotProduct({ commit }) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      let result = null;
      try {
        result = await getProduct();
      } finally {
        commit('Loading/LOADING', false, {
          root: true,
        });
      }

      const adapter = new HotProduct(result.data);
      commit('SET_HOT_PRODUCT', adapter.transform());

      return result;
    },
    async getSingleProducts({ commit }, id) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      let result = null;
      try {
        result = await getSingleProducts(id);
      } finally {
        commit('Loading/LOADING', false, {
          root: true,
        });
      }
      commit('SET_PRODUCT', result.data);

      return result;
    },
  },
  mutations: {
    SET_DATA(state, status) {
      state.productList = Object.freeze(status);
    },
    SET_PRODUCT(state, status) {
      state.product = Object.freeze(status);
    },
    SET_HOT_PRODUCT(state, status) {
      state.hotProduct = Object.freeze(status);
    },
    SET_CATEGORY(state, status) {
      state.category = Object.freeze(status);
    },
    CLEAR_DATA(state) {
      state.productList = [];
      state.product = {};
      state.category = [];
      state.hotProduct = [];
    },
  },
};
