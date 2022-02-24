import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import thwj from '@/views/Detail/Thwj'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Home
  },
  {
    path: '/thwj',
    component: thwj
  },
  {
    path: '/fwhyj',
    component: () => import('@/views/Detail/Fwhyj')
  }
]

const router = new VueRouter({
  routes
})

export default router
