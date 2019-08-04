import Vue from 'vue'
import App from './App.vue'
import VueAWN from 'vue-awesome-notifications'

// Global components
Vue.use(VueAWN)

// CSS
// awesome notifications css
require("vue-awesome-notifications/dist/styles/style.css")


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
