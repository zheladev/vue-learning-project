import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Images from '../views/Images.vue'
import Todos from '../views/Todos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/images',
    name: 'Images',
    component: Images,
  },
  {
      path: '/todos',
      name: 'Todos',
      component: Todos
  }
]

const router = new VueRouter({
  routes
})

export default router
