import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/HomePage.vue';
import About from './views/AboutPage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/encrypt',
      name: 'encrypt',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EncryptionPage.vue'),
    },
    {
      path: '/decrypt',
      name: 'decrypt',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/DecryptionPage.vue'),
    },
  ],
});

export default router;
