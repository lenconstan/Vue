import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import VueGtag from 'vue-gtag';
import Toasted from 'vue-toasted';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueGtag, {
  config: { id: 'G-VG1LJTW34B' },
}, router);

// const firebaseConfig = (process.env.VUE_APP_FIREBASECONFIG);

const firebaseConfig = {
  apiKey: 'AIzaSyD4V1m_MpVmp67fZJvL7QUD0GeZ2DR5XRo',
  authDomain: 'vuejs-25790.firebaseapp.com',
  projectId: 'vuejs-25790',
  storageBucket: 'vuejs-25790.appspot.com',
  messagingSenderId: '173223217624',
  appId: '1:173223217624:web:85ef6a3003faa14a35caad',
  measurementId: 'G-DR8DRXDTZ6',
};

firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue);
Vue.use(Toasted);
Vue.use(firebase);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
