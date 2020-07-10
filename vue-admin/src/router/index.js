import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Index from "../views/Index.vue";

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
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
  path: '/index',
  name: 'Index',
  component: Index
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
