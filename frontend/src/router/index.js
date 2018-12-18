import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ScoreboardPage from '@/components/ScoreboardPage'
import VideoPage from '@/components/VideoPage'
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
      name: 'scoreBoardPage',
      component: ScoreboardPage
    },
    {
      path:'/video',
      name: 'VideoPage',
      component: VideoPage
    }
  ]
})