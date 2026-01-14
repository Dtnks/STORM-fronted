import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/tutorials',
      component: () => import('../views/tutorials/TutorialLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/tutorials/visium',
        },
        {
          path: 'visium',
          name: 'Visum',
          component: () => import('../views/tutorials/Visium.vue'),
        },
        {
          path: 'gt',
          name: 'TutorialGT',
          component: () => import('../views/tutorials/gt.vue'),
        },
      ],
    },
    {
      path: '/contributors',
      name: 'Contributors',
      component: () => import('../views/Contributors.vue'),
    },
    {
      path: '/api',
      component: () => import('../views/api/ApiLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/api/overview',
        },
        {
          path: 'overview',
          name: 'ApiOverview',
          component: () => import('../views/api/Overview.vue'),
        },
        {
          path: 'hdreader',
          name: 'HDReader',
          component: () => import('../views/api/HDReader.vue'),
        },
        {
          path: 'visiumreader',
          name: 'VisiumReader',
          component: () => import('../views/api/VisiumReader.vue'),
        },
        {
          path: 'pp',
          name: 'PP',
          component: () => import('../views/api/PP.vue'),
        },
        {
          path: 'gt',
          name: 'GT',
          component: () => import('../views/api/GT.vue'),
        },
      ],
    },
  ],
})

export default router
