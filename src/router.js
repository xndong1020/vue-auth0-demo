import Vue from 'vue'
import Router from 'vue-router'
import { requireAuth } from './auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter: requireAuth,
      component: () => import('./views/About.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('./views/Callback.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/signout',
      name: 'signout',
      component: () => import('./views/Signout.vue')
    }
  ]
})
