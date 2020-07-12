import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue'
// import Index from "../views/Index.vue"
import Music from '../views/Music.vue'

const routes = [
{
  path: '/',
  name: 'Music',
  component: Music
},
{
  path: '/playList',
  name: 'PlayList',
  component: () => import(/* webpackChunkName: "PlayList" */ '../components/playList/playList.vue')
},
{
  path: '/recommend',
  name: 'Recommend',
  component: () => import(/* webpackChunkName: "Recommend" */ '../components/recommend/Recommend.vue')
},
{
  path: '/userList',
  name: 'UserList',
  component: () => import(/* webpackChunkName: "UserList" */ '../components/userList/UserList.vue')
},
{
  path: '/search',
  name: 'Search',
  component: () => import(/* webpackChunkName: "Search" */ '../components/search/Search.vue')
},
{
  path: '/historyList',
  name: 'HistoryList',
  component: () => import(/* webpackChunkName: "HistoryList" */ '../components/historyList/HistoryList.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
