import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import oferta from '../views/Oferta.vue'
//import car from '../views/car.vue'
import Detalles from '../components/Detalles.vue'
import Oferta from '../components/Oferta.vue'
import marca from '../components/marca.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Oferta',
    name: 'Oferta',
    component: Oferta
  },
  {
    path: '/Detalles/:codcoche',
    name: 'Detalles',
    component: Detalles,
    props: true
  },
  {
    path: '/marca/:cifm',
    name: 'marca',
    component: marca,
    props: true
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
