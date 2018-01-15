import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../theme/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
}).$mount('#app')
