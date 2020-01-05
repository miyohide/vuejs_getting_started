import * as types from './mutation-types'

export default {
  /*
   * mutation handlerの定義方法については以下を参照するとよい。
   * https://vuex.vuejs.org/ja/guide/mutations.html#%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%BB%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AB%E5%AE%9A%E6%95%B0%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B
   */
  [types.AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutation should be implemented')
  },
  [types.FETCH_ALL_TASKLIST] (state, payload) {
    throw new Error('FETCH_ALL_TASKLIST mutation should be implemented')
  },
  [types.ADD_TASK] (state, payload) {
    throw new Error('ADD_TASK mutation should be implemented')
  },
  [types.UPDATE_TASK] (state, payload) {
    throw new Error('UPDATE_TASK mutation should be implemented')
  },
  [types.REMOVE_TASK] (state, payload) {
    throw new Error('REMOVE_TASK mutation should be implemented')
  },
  [types.AUTH_LOGOUT] (state, payload) {
    throw new Error('AUTH_LOGOUT mutation should be implemented')
  }
}
