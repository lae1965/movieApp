import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/MovieListPage.vue'),
    },
    {
      path: '/single/:id?',
      name: 'workspace',
      component: () => import('../pages/SingleMoviePage.vue'),
    },
  ],
});
