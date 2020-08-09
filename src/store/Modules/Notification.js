export default {
  namespaced: true,
  state: {
    show: false,
    content: [],
  },
  mutations: {
    NEW_NOTICE(state, status) {
      state.show = true;
      state.content.push(status);
    },
  },
  getters: {
    show: (state) => state.show,
    options: (state) => state.options,
  },
};
