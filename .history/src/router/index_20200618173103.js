import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      redirect:'/'
    },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
        }
      },
      {
        path: '/classification',
        name: 'Classification',
        component:()=>import('../views/classification/Classification'),
        meta:{
          title:'分类'
        }
      },
      {
        path: '/shopping',
        name: 'Shopping',
        component:()=>import('../views/shopping/Shopping'),
        meta:{
          title:'购物车'
        }
      },
      {
        path: '/my',
        name: 'My',
        component:()=>import('../views/my/My.vue'),
        meta:{
          title:'我的'
        }
      },
    ]
  },
]

//防止二次点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

export default router