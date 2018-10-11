import Vue from 'vue'
import router from 'src/router/index'
import store from 'src/store/index'
import App from 'src/App'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
