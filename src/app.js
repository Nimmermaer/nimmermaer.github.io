import Vue from 'vue'
import App from './App.vue'
import M from 'materialize-css'

import './assets/app.styl'
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#nav',
  render
})

let options = [{
  edge: 'left'
}]
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav')
  /* eslint-disable-next-line no-unused-vars */
  let instances = M.Sidenav.init(elems, options)
})
