import Vue from 'vue'
import App from './App.vue'
import VueAWN from 'vue-awesome-notifications'
import VueRouter from 'vue-router'

// router setup
import routes from '../routes/routes'

// Global components
Vue.use(VueAWN)
Vue.use(VueRouter)
// CSS
// awesome notifications css
require("vue-awesome-notifications/dist/styles/style.css")


Vue.config.productionTip = false

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
