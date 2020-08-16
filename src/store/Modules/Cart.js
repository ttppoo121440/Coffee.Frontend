import vue from 'vue';
import {
  createCart, deleteCart, cartList, createOrder,
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
    async cartList({ commit }) {
      commit('Loading/LOADING', true, {
        root: true,
      });
      const result = await cartList();
      commit('Loading/LOADING', false, {
        root: true,
      });
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
    addCart({ state }, product) {
      const list = state.goodsList.find((item) => item.product.id === product.id);
      if (!list) {
        state.goodsList.push({ product, quantity: 1 });
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
    addProductCart({ state }, data) {
      state.goodsList.push({
        product: {
          id: data.product.id,
          title: data.product.title,
          category: data.product.category,
          content: data.product.content,
          enabled: data.product.enabled,
          imageUrl: data.product.imageUrl,
          origin_price: data.product.origin_price,
          price: data.product.price,
          unit: data.product.unit,
        },
        quantity: data.quantity,
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    editCart({ state }, { product, quantity }) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === product.id) {
          const tempProduct = item;
          tempProduct.quantity = quantity;
          state.goodsList.splice(index, 1, tempProduct);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    cartDelete({ state }, id) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === id) {
          state.goodsList.splice(index, 1);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    calculation({ state }, data) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === data.product.id) {
          const product = item;
          product.quantity = data.quantity;
          state.goodsList.splice(index, 1, item);
        }
      });
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    productCalculation({ state, dispatch, getters }, data) {
      const list = state.goodsList.find((item) => item.product.id === data.product.id);
      if (!list) {
        dispatch('addProductCart', data);
      }
      return getters.getQty(data) === undefined ? 2 : getters.getQty(data).quantity;
    },
    changeValue({ state }, data) {
      state.goodsList.forEach((item, index) => {
        if (item.product.id === data.product.id) {
          const product = item;
          product.quantity = data.quantity;
          state.goodsList.splice(index, 1, item);
        }
      });
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
  },
  getters: {
    getCart(state) {
      return state.goodsList;
    },
    getQty: (state) => (data) => state.goodsList.find((item, index) => {
      let qty = {};
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
