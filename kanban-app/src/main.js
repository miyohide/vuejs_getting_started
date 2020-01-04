import Vue from 'vue'
/*
 * プロミスをポリフィルする。
 * ポリフィルという用語はこちらを参照。
 * https://developer.mozilla.org/ja/docs/Glossary/Polyfill
*/
import 'es6-promise/auto'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
