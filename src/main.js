import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
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

const firebaseConfig = {
  apiKey: (process.env.VUE_APP_FIREBASE_AUTHDOMAIN),
  authDomain: (process.env.VUE_APP_FIREBASE_APIKEY),
  projectId: (process.env.VUE_APP_FIREBASE_PROJECTID),
  storageBucket: (process.env.VUE_APP_FIREBASE_STORAGEBUCKET),
  messagingSenderId: (process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID),
  appId: (process.env.VUE_APP_FIREBASE_APPID),
  measurementId: (process.env.VUE_APP_FIREBASE_MEASUREMENTID),
};

firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Toasted);
Vue.use(firebase);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
