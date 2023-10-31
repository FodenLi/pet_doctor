import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    props: true, // 启用路由参数接收
  },

  {
    path: '/',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
