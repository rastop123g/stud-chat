export default {
  namespaced: true,
  state: () => ({
    username: null,
    password: null,
  }),

  getters: {
    user(state) {
      return {
        username: state.username,
        password: state.password,
      };
    },
  },

  mutations: {
    setuser(state, user) {
      state.username = user.username;
      state.password = user.password;
    },
  },
};
