import { getProduct, getSingleProducts } from '@/utils/api';

export default {
  namespaced: true,
  state: () => ({
    productList: [],
    product: {},
  }),

  actions: {
    async getProduct({ commit, rootState }) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      const result = await getProduct(`page=${rootState.Pagination.current}&paged=${rootState.Pagination.paged}`);
      commit('Pagination/SET_TOTAL', result.meta.pagination.total, {
        root: true,
      });
      commit('Pagination/SET_TOTAL_PAGES', result.meta.pagination.total_pages, {
        root: true,
      });
      commit('SET_DATA', result.data);
      commit('Loading/LOADING', false, {
        root: true,
      });
      console.log(result);
      return result;
    },
    async getSingleProducts({ commit }, id) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      const result = await getSingleProducts(id);
      commit('SET_PRODUCT', result.data);
      commit('Loading/LOADING', false, {
        root: true,
      });
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
  },
};
