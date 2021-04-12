import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.use(Toasted);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
