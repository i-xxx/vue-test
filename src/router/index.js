import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/login.vue'
import homeChildren from './home-children'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/home',
    name: "Home",
    component: () => import('@/views/home/home.vue'),
    children: homeChildren
  }
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
