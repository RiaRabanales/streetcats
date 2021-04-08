import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Donaciones from '../views/Donaciones.vue'
import Contacto from '../views/Contacto.vue'
import Login from '../views/auth/Login.vue'
import Registro from '../views/auth/Registro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donaciones',
    name: 'Donaciones',
    component: Donaciones
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
