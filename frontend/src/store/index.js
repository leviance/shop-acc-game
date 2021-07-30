import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    user_data: {},
  },
  mutations: {
    get_user_data(state) {
      Vue.axios
        .get(`${process.env.VUE_APP_URL}/get-home-page-user-data`)
        .then((res) => {
          if (res.data) {
            state.user_data = { ...res.data };
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  actions: {},
  modules: {},
});
