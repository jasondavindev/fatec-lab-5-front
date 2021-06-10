import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/polls',
      name: 'polls',
      component: () => import('./views/Polls.vue'),
    },
    {
      path: '/create-polls',
      name: 'create-polls',
      component: () => import('./views/CreatePolls.vue'),
    },
  ],
});
