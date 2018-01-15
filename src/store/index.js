import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Store({
  strict: debug,
  modules
})
