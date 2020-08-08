export default {
  namespaced: true,
  state: {
    goodsList: localStorage.goodsList ? JSON.parse(localStorage.goodsList) : [],
  },
  actions: {
    addCart({ state }, product) {
      const list = state.goodsList.find((item) => item.product.id === product.id);
      if (!list) {
        state.goodsList.push({ product, quantity: 1 });
      } else {
        list.quantity += 1;
      }
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
    },
    addProductCart({ state }, { product, quantity }) {
      state.goodsList.push({
        product: {
          id: product.id,
          title: product.title,
          category: product.category,
          content: product.content,
          enabled: product.enabled,
          imageUrl: product.imageUrl,
          origin_price: product.origin_price,
          price: product.price,
          unit: product.unit,
        },
        quantity,
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
    productCalculation({ state, dispatch }, data) {
      const qty = state.goodsList.find((item, index) => {
        if (item.product.id === data.product.id) {
          const product = item;
          product.quantity = data.quantity;
          state.goodsList.splice(index, 1, item);
          localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
          return data.quantity;
        }
        return false;
      });
      const list = state.goodsList.find((item) => item.product.id === data.product.id);
      if (!list) {
        dispatch('addProductCart', data.product);
      }
      return qty.quantity;
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
