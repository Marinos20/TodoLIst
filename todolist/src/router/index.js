import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LogIn from '@/views/Auth/LogIn.vue'
import TodoList from '@/components/TodoList.vue'
import RegisterPage from '@/views/Auth/RegisterPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/Todo',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/Login',
      name: 'LoginIn',
      component: LogIn
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterPage
    },

  ]
})

export default router
