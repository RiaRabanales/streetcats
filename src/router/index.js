import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import { useStore } from "vuex";

/* Guarda-rutas 
const requireAuth = (to, from, next) => {
  let store = useStore();
  let logged = store.state.logged;
  if (!logged) {
    next({ name: 'Login' }) //si no hay usuario redirecciono a login
  } else {
    next() //sigue adelante sin problemas
  }
}

/*
const requireNoAuth = (to, from, next) => {
  let store = useStore();
  let logged = store.state.user.logged;
  if (!logged) {
    next({ name: 'LoginLanding' })
  } else {
    next()
  }
}
*/

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
    //beforeEnter: requireAuth
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
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    //beforeEnter: requireNoAuth
  },
  {
    path: '/loginlanding',
    name: 'LoginLanding',
    component: () => import('@/views/LoginLanding.vue'),
    //beforeEnter: requireAuth
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    //beforeEnter: requireNoAuth
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

export default router
