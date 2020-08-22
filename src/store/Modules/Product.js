import { getProduct, getSingleProducts } from '@/utils/api';

export default {
  namespaced: true,
  state: {
    productList: [],
    product: {},
    hotProduct: [],
    category: [],
  },
  actions: {
    async getProduct({ commit, rootState }) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      let result = null;
      try {
        result = await getProduct(`page=${rootState.Pagination.current}&paged=${rootState.Pagination.paged}`);
      } finally {
        commit('Loading/LOADING', false, {
          root: true,
        });
      }

      commit('Pagination/SET_TOTAL', result.meta.pagination.total, {
        root: true,
      });
      commit('Pagination/SET_TOTAL_PAGES', result.meta.pagination.total_pages, {
        root: true,
      });
      commit('SET_DATA', result.data);

      const category = new Set();
      result.data.forEach((item) => (category.has(item.category)
        ? false : category.add(item.category)));
      commit('SET_CATEGORY', Array.from(category));

      return result;
    },
    async getHotProduct({ commit, rootState }) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      let result = null;
      try {
        result = await getProduct(`page=${rootState.Pagination.current}&paged=${rootState.Pagination.paged}`);
      } finally {
        commit('Loading/LOADING', false, {
          root: true,
        });
      }
      commit('Pagination/SET_TOTAL', result.meta.pagination.total, {
        root: true,
      });
      commit('Pagination/SET_TOTAL_PAGES', result.meta.pagination.total_pages, {
        root: true,
      });
      const temp = [];
      result.data.map((item) => {
        if (item.category === '熱門') {
          temp.push(item);
        }
        return temp;
      });
      commit('SET_HOT_PRODUCT', temp);

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
