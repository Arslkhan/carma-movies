import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false
axios.defaults.baseURL = "https://api.themoviedb.org/3";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
