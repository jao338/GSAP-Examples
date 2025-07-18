import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/fade',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Fade/FadePage.vue') }],
  },
  {
    path: '/zoom',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Zoom/ZoomPage.vue') }],
  },
  {
    path: '/flip',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Flip/FlipPage.vue') }],
  },
  {
    path: '/pulse',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Pulse/PulsePage.vue') }],
  },
  {
    path: '/shake',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Shake/ShakePage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
