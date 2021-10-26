import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    layout: 'defaultLayout'
  },
  {
    path: '/product/pfizer',
    component: () => import('../views/ProductDetail.vue'),
    // children: [
    //   {
    //     path: 'detail',
    //     component: () => import('')
    //   }
    // ]
  },
  // {
  //   path: '/product/tracking/:id',
  //   component: () => import('../views/ProductDetail.vue'),
  // },
  {
    path: '/product/tracking',
    component: () => import('../views/Tracking.vue'),
  }, 
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: { layout: 'unauth'}
  },
  {
    path: '/signup',
    component: () => import('../views/SignUp.vue'),
    meta: { layout: 'unauth'}
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue'),
    meta: { layout: 'unauth'}
  },
  // {
  //   path: '/dashboard',
  //   component: () => import('../views/Dashboard.vue'),
  //   meta: { layout: 'secret'}
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
