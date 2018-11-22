import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import DataView from './views/data-view'
import Add from './views/add'
import Remove from './views/remove'
import About from './views/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/data',
      name: 'data',
      component: DataView
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/remove',
      name: 'remove',
      component: Remove
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
