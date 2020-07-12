import {
  createRouter,
  createWebHashHistory
} from 'vue-router';
// import Home from '../views/Home.vue'
// import Index from "../views/Index.vue"
import Music from '../views/Music.vue'

const routes = [{
    path: '/',
    name: 'Music',
    component: Music
  },
  {
    path: '/music',
    component: () => import('../views/Music.vue'),
    children: [
    {
      path: '/music/playList',
      name: 'PlayList',
      component: () => import( /* webpackChunkName: "PlayList" */ '../components/playList/playList.vue')
    },
    {
      path: '/music/recommend',
      name: 'Recommend',
      component: () => import( /* webpackChunkName: "Recommend" */ '../components/recommend/Recommend.vue')
    },
    {
      path: '/music/userList',
      name: 'UserList',
      component: () => import( /* webpackChunkName: "UserList" */ '../components/userList/UserList.vue')
    },
    {
      path: '/music/search',
      name: 'Search',
      component: () => import( /* webpackChunkName: "Search" */ '../components/search/Search.vue')
    },
    {
      path: '/music/historyList',
      name: 'HistoryList',
      component: () => import( /* webpackChunkName: "HistoryList" */ '../components/historyList/HistoryList.vue')
    }
  ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router