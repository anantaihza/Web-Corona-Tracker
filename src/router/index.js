import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import DataIndonesia from '../views/DataIndonesia.vue'
import DataProvinsi from '../views/DataProvinsi.vue'
import Protokol from '../views/Protokol.vue'
import Faq from '../views/Faq.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/data-indonesia',
    name: 'DataIndonesia',
    component: DataIndonesia
  },
  {
    path: '/data-provinsi',
    name: 'DataProvinsi',
    component: DataProvinsi
  },
  {
    path: '/protokol',
    name: 'Protokol',
    component: Protokol
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
