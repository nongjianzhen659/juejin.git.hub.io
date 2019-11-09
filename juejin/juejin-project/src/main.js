import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
