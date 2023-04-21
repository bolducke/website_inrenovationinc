import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify';
import firebase from './plugins/firebase'
import store from './store'
import './plugins'


Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$firebase = firebase

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
