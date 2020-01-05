import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
 * Vuexで管理する状態はアプリケーションの認証の状態を保持するAuthと
 * tasklistの状態を保持するBoard
 */
const state = {
  auth: {
    token: null,
    userId: null
  },
  board: {
    lists: []
  }
}

export default new Vuex.Store({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
