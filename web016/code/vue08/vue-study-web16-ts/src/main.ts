import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import './plugins/element.js'
import create from './utils/create'

import router from './router'
// import router from './krouter'

import store from './store'
// import store from './kstore'

import './test-ts'
import axios from 'axios'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios
// Vue.prototype.$create = create
Vue.use(create)

// 3.挂载router实例，why？
new Vue({
  // Vue.prototype.$router = router
  router,

  store,
  render: h => h(App)
}).$mount('#app')
