// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/font-awesome.min.css';
import '../public/css/nice-select.css';
import '../public/css/body.css';
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue ({
  render: h => h (App),
}).$mount('#app')