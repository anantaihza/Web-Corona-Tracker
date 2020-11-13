import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import DataIndonesia from '../views/DataIndonesia.vue'
import DataProvinsi from '../views/DataProvinsi.vue'
import Protokol from '../views/Protokol.vue'
import Faq from '../views/Faq.vue'
import Kontak from '../views/Kontak.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
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
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: Kontak
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router
