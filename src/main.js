import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'animate.css/animate.min.css'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
