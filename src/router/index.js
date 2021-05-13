import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import { useStore } from 'vuex';

/* Rutas */
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home   //No debo hacer lazyloading al primero
  },
  {
    path: '/cats',
    name: 'Cats',
    component: () => import('@/views/Cats.vue')
  },
  {
    path: '/cats/new',
    name: 'NewCat',
    component: () => import('@/views/components/cats/NewCat.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/cats/:id',
    name: 'SingleCat',
    component: () => import('@/views/components/cats/SingleCat.vue'),
    props: true,
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('@/views/Board.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/contracts',
    name: 'Contracts',
    component: () => import('@/views/Contracts.vue'),
    meta: { requiresAdmin: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresNoAuth: true }
  },
  {
    path: '/loginlanding',
    name: 'LoginLanding',
    component: () => import('@/views/LoginLanding.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/views/Docs.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    meta: { requiresNoAuth: true }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* Guarda-rutas */
import { store } from '../store'
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth && !store.getters.isAuthenticated )) {
    next('/login');
  } else if (to.matched.some(record => record.meta.requiresNoAuth && store.getters.isAuthenticated )) {
    next('/loginlanding');
  } else {
    next();
  }
});

export default router
