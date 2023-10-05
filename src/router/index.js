import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import sugar from '../views/card.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component : Home  
   },
   {
    path: '/sugar',
    name: 'sugar',
    component: sugar
  },]
})

export default router
