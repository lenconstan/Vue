import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Books from '../components/Books.vue';
import Ping from '../components/Ping.vue';
import Pong from '../components/Pong.vue';
import Usermanagement from '../components/Usermanagement.vue';
import ProfileLanding from '../components/ProfileLanding.vue';
import Houses from '../components/Houses.vue';
import StreetArt from '../components/streetart/StreetArt.vue';

Vue.use(Router);

const tokenIsValid = (new Date(localStorage.getItem('validTill')) > new Date());

const ifNotAuthenticated = (to, from, next) => {
  if (tokenIsValid === false || !localStorage.getItem('token')) {
    // console.log('token is null');
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem('token') && tokenIsValid) {
    console.log(tokenIsValid);
    next();
    return;
  }
  next('/login');
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Landing page
    {
      path: '/wandeling',
      name: 'Streetart',
      component: StreetArt,
    },
    // Auth routes
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    // Profile routes
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileLanding,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/houses',
      name: 'Houses',
      component: Houses,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/',
      name: 'Home',
      component: Pong,
    },
    {
      path: '/usermanagement',
      name: 'Usermanagement',
      component: Usermanagement,
      beforeEnter: ifAuthenticated,
    },
  ],
});
