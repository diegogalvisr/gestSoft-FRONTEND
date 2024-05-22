import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          alert('Ha ocurrido un problema, logeate nuevamente');
          return '/login'; 
        } else {
          return '/dashboard'; // Redirige al dashboard si hay accessToken
        }
      },
    },

    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },        
        {
          path: 'configurar-cuenta',
          component: () => import('../pages/account-settings.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },
        {
          path: 'colores',
          component: () => import('../pages/colores.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
          beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
              alert('Ha ocurrido un problema, logeate nuevamente');
              next('/login'); 
            } else {
              next();
            }
          },
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },

    
  ],
})

export default router
