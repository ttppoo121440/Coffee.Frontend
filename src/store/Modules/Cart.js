import vue from 'vue';
import {
  createCart, deleteCart, createOrder,
} from '@/utils/api';

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
      const result = await createOrder(data);
      commit('Loading/LOADING', false, {
        root: true,
      });
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
      const result = await deleteCart();
      commit('Loading/LOADING', false, {
        root: true,
      });
      dispatch('clearCart');
      return result;
    },
    addCart({ commit }, product) {
      commit('ADD_CART', product);
    },
    addProductCart({ commit }, data) {
      commit('PUSH_CART', data);
    },
    editCart({ commit }, { product, quantity }) {
      commit('EDIT_CART', { product, quantity });
    },
    cartDelete({ commit }, id) {
      commit('DELETE_CART', id);
    },
    calculation({ commit }, data) {
      commit('CALCULATION', data);
    },
    productCalculation({ state, dispatch }, data) {
      const list = state.goodsList.find((item) => item.product.id === data.product.id);
      if (!list) {
        dispatch('addProductCart', data);
      }
    },
    changeValue({ commit }, data) {
      commit('CHANGE_VALUE', data);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART', []);
      localStorage.removeItem('goodsList');
    },
  },
  mutations: {
    CHANGE_VALUE(state, status) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === status.product.id) {
          const product = item;
          product.quantity = status.quantity;
          state.goodsList.splice(index, 1, item);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    CALCULATION(state, status) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === status.product.id) {
          const product = item;
          product.quantity = status.quantity;
          state.goodsList.splice(index, 1, item);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    CLEAR_CART(state, status) {
      state.goodsList = status;
    },
    PUSH_CART(state, status) {
      state.goodsList.push({
        product: {
          id: status.product.id,
          title: status.product.title,
          category: status.product.category,
          content: status.product.content,
          enabled: status.product.enabled,
          imageUrl: status.product.imageUrl,
          origin_price: status.product.origin_price,
          price: status.product.price,
          unit: status.product.unit,
        },
        quantity: status.quantity,
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
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
        if (item.product.id === status.id) {
          const tempProduct = item;
          tempProduct.quantity = status;
          state.goodsList.splice(index, 1, tempProduct);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    ADD_CART(state, status) {
      const list = state.goodsList.find((item) => item.product.id === status.id);
      if (!list) {
        state.goodsList.push({ product: status, quantity: 1 });
      } else {
        list.quantity += 1;
      }
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
      vue.notify({
        group: 'foo',
        type: 'success',
        title: '提示',
        text: '加入購物車成功!',
      });
    },
    GET_QTY(state, status) {
      let qty = 0;
      state.goodsList.find((item, index) => {
        if (item.product.id === status.product.id) {
          const product = item;
          product.quantity = status.quantity;
          state.goodsList.splice(index, 1, item);
          localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
          qty = status.quantity;
        }
        return qty;
      });
    },
    ADD_QTY(state) {
      state.goodsList.quantity += 1;
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
      return state.goodsList.reduce((acc, current) => acc + current.quantity, 0) || 0;
    },
  },
};
