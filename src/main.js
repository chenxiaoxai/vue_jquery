// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

// import '../src/assets/libs/jquery-1.11.3.js'
// import '../src/assets/libs/pinchzomm.js'
import '../src/assets/css/font.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
