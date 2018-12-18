import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ScoreboardPage from '@/components/ScoreboardPage'
import VideoPage from '@/components/VideoPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
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