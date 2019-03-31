// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import VueSweetAlert from 'vue-sweetalert2'

import showRowGenerator from './components/showScreen/showRowGenerator.vue';
import showColGenerator from './components/showScreen/showColGenerator.vue';
import showContentGenerator from './components/showScreen/showContentGenerator.vue';
Vue.component('show-row-component', showRowGenerator);
Vue.component('show-col-component', showColGenerator);
Vue.component('show-content-component', showContentGenerator);

Vue.use(VueMaterial)
Vue.use(VueSweetAlert)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
