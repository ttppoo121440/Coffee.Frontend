import { createCart, deleteCart, createOrder } from '@/utils/api';

export default {
  namespaced: true,
  state: {
    goodsList: localStorage.goodsList ? JSON.parse(localStorage.goodsList) : [],
  },
  actions: {
    async createOrder({ commit, dispatch }, data) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      let result = null;
      try {
        result = await createOrder(data);
      } finally {
        commit('Loading/LOADING', false, {
          root: true,
        });
      }
      dispatch('deleteCart');
      return result;
    },
    async createCart({ commit }, data) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      const result = await createCart(data);
      return result;
    },
    async deleteCart({ commit, dispatch }) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      let result = null;
      try {
        result = await deleteCart();
      } finally {
        commit('Loading/LOADING', false, {
          root: true,
        });
      }
      dispatch('clearCart');
      return result;
    },
    addCart({ commit }, product) {
      commit('ADD_CART', product);
    },
    editCart({ commit }, { product, quantity }) {
      commit('EDIT_CART', { product, quantity });
    },
    cartDelete({ commit }, id) {
      commit('DELETE_CART', id);
    },
    changeValue({ commit, state }, data) {
      const id = data.id ?? data.product.id;
      const list = state.goodsList.find((item) => item.product.id === id);
      if (!list) {
        commit('ADD CART', data);
      } else {
        commit('EDIT_CART', data);
      }
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    clearCart({ commit }) {
      commit('CLEAR_CART', []);
      localStorage.removeItem('goodsList');
    },
  },
  mutations: {
    CLEAR_CART(state, status) {
      state.goodsList = status;
    },
    DELETE_CART(state, status) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === status) {
          state.goodsList.splice(index, 1);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    EDIT_CART(state, status) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === status.product.id) {
          const tempProduct = item;
          tempProduct.quantity = status.quantity;
          state.goodsList.splice(index, 1, tempProduct);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    ADD_CART(state, status) {
      const id = status.id ?? status.product.id;
      const list = state.goodsList.find((item) => item.product.id === id);
      if (!list) {
        state.goodsList.push({ product: status, quantity: 1 });
      } else {
        list.quantity += 1;
      }
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
  },
  getters: {
    getCart(state) {
      return state.goodsList;
    },
    getQty: (state) => (data) => state.goodsList.find((item, index) => {
      let qty = 0;
      if (item.product.id === data.product.id) {
        const product = item;
        product.quantity = data.quantity;
        state.goodsList.splice(index, 1, item);
        localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
        qty = data.quantity;
      }
      return qty;
    }),
    cartPriceTotal(state) {
      return state.goodsList.reduce(
        (acc, current) => acc + current.product.price * current.quantity,
        0,
      );
    },
    cartItemTotal(state) {
      return (
        state.goodsList.reduce((acc, current) => acc + current.quantity, 0) || 0
      );
    },
  },
};
