import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './styles/element-vars.scss'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './styles/main.scss'

Vue.use(ElementUI, { locale });
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
