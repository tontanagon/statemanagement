import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'  
import sugar from '../views/card.vue'
import cart from '../views/cart.vue'
import order from '../views/order.vue'




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
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
]
})

export default router
