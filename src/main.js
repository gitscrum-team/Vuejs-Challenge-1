import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-free/css/all.css";

import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
