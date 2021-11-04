import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

library.add(
  faUserSecret,
  faSearch,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

import { BFormFile } from 'bootstrap-vue'
Vue.component('b-form-file', BFormFile)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')