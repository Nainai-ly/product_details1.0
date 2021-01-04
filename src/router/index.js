import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../components/Details';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/details' /*自动重定向*/
  },
  {
    path: '/details',
    component: Details  /*注意不是字符串*/
  }
]

const router = new VueRouter({
  routes
})

export default router
