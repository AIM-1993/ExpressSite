import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Scoreboard from '@/components/Scoreboard'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/scoreboard',
      name: 'Scoreboard',
      component: Scoreboard
    },
    {
      path:'/about',
      name: 'About',
      component: About
    }
  ]
})