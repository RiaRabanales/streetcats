import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Help from '../views/Help.vue'
import Contact from '../views/Contact.vue'
import Cats from '../views/Cats.vue'
import Board from '../views/Board.vue'
import Login from '../views/Login.vue'
import LoginLanding from '../views/LoginLanding.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'

// Guardas de rutas:
import { projectAuth } from '../config/firebase'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'Login' }) //si no hay usuario redirecciono a login
  } else {
    next() //sigue adelante sin problemas
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: 'LoginLanding' })
  } else {
    next()
  }
}

// Rutas:
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: '/loginlanding',
    name: 'LoginLanding',
    component: LoginLanding,
    beforeEnter: requireAuth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
