import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')

