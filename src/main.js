import Vue from 'vue'
import router from 'src/router/index'
import store from 'src/store/store'
import App from 'src/App'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})