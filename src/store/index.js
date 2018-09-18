import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import articles from './article/store'
import base from './base/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    base,
    articles
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

