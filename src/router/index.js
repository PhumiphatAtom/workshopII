import Vue from 'vue'
import VueRouter from 'vue-router'
// import student from '../components/Student.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Home from '../views/Home.vue'

import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from "axios"
import Vueaxios from 'vue-axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)
Vue.use(axios, Vueaxios)

const routes = [
  // {
  //   path: '/',
  //   name: 'Student',
  //   component: student
  // },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page1/:id',
    name: 'Page1',
    component: Page1,
  },
  {
    path: '/page2/',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homework',
    name: 'homework',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Homework.vue')
  },
  {
    path: '/homeworkResult',
    name: 'homeworkResult',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeworkResult.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router