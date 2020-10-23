import Vue from 'vue'
import VueRouter from 'vue-router'
import KortMaskine from '../views/KortMaskine.vue'
import MapView from '../components/MapView'

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
    component: MapView
  }
]

const router = new VueRouter({
  routes
})

export default router
