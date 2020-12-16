import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },



  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        component: () => import('@/views/home/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/PlaceHolder',
    name: 'PlaceHolder',
    component: Layout,
    redirect: '/PlaceHolder',
    children: [
      {
        path: 'PlaceHolder',
        component: () => import('@/views/placeHolder/index'),
        name: '占位页面',
        meta: { title: '占位页面', icon: 'form' }
      }
    ]
  },
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()


export default router
