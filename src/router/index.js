import Vue from 'vue'
import VueRouter from 'vue-router'
import KortMaskine from '../views/KortMaskine.vue'
import Kort from '../views/Kort'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'KortMaskine',
    component: KortMaskine
  },
  {
    path: '/kort',
    name: 'Kort',
    component: Kort
  }
]

const router = new VueRouter({
  routes
})

export default router
