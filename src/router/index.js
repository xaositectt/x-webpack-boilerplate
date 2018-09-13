import Vue from 'vue'
import Router from 'vue-router'

import Home from 'src/views/Home'
import About from 'src/views/About'
import Connect from 'src/views/Connect'
import NotFound from 'src/views/NotFound'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
