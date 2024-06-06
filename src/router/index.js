import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          return '/login';
        } else {
          return '/dashboard';
        }
      },
    },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        { path: 'dashboard', component: () => import('../pages/dashboard.vue'), meta: { requiresAuth: true } },
        { path: 'configurar-cuenta', component: () => import('../pages/account-settings.vue'), meta: { requiresAuth: true } },
        { path: 'typography', component: () => import('../pages/typography.vue'), meta: { requiresAuth: true } },
        { path: 'icons', component: () => import('../pages/icons.vue'), meta: { requiresAuth: true } },
        { path: 'cards', component: () => import('../pages/cards.vue'), meta: { requiresAuth: true } },
        { path: 'tables', component: () => import('../pages/tables.vue'), meta: { requiresAuth: true } },
        { path: 'colores', component: () => import('../pages/colores.vue'), meta: { requiresAuth: true } },
        { path: 'form-layouts', component: () => import('../pages/form-layouts.vue'), meta: { requiresAuth: true } },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        { path: 'login', component: () => import('../pages/login.vue'), meta: { requiresAuth: false } },
        { path: 'register', component: () => import('../pages/register.vue') },
        { path: '/:pathMatch(.*)*', component: () => import('../pages/[...all].vue') },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('accessToken');
  const isAuthRoute = ['/login', '/register'].includes(to.path);

  if (to.meta.requiresAuth) {
    if (accessToken) {
      next();
    } else {
      next('/login');
    }
  } else {
    if (isAuthRoute && accessToken) {
      next('/dashboard');
    } else {
      next();
    }
  }
});

export default router;
