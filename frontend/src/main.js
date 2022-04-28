import Vue from 'vue'
import App from './App.vue'
import router from './router'
// axios 모듈 불러오기
import axios from 'axios'

// axios 모듈 할당해주기
Vue.prototype.$http = axios;

Vue.config.productionTip = false


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
