import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/getting-started',
      name: 'GettingStarted',
      component: () => import('../views/GettingStarted.vue'),
    },
    {
      path: '/installation',
      name: 'Installation',
      component: () => import('../views/Installation.vue'),
    },
    // {
    //   path: '/usage',
    //   name: 'Usage',
    //   component: () => import('../views/Usage.vue'),
    // },
    // {
    //   path: '/api',
    //   name: 'API',
    //   component: () => import('../views/API.vue'),
    // },
    // {
    //   path: '/examples',
    //   name: 'Examples',
    //   component: () => import('../views/Examples.vue'),
    // },
  ],
})

export default router
