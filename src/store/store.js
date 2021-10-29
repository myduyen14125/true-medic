import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: {
        name: null, 
        avt: null,
    },
  },
  getters: {},
  mutations: {},
  actions: {
    async getCurrentUser() {

    }
  },
});
