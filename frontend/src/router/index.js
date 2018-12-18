import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Scoreboard from '@/components/Scoreboard'
import Video from '@/components/Video'
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
      path:'/video',
      name: 'Video',
      component: Video
    }
  ]
})