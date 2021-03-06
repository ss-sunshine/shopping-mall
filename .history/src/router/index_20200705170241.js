import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/classification',
        name: 'Classification',
        component: () => import('../views/classification/Classification'),
        meta: {
          title: '分类'
        }
      },
      {
        path: '/shopping',
        name: 'Shopping',
        component: () => import('../views/shopping/Shopping'),
        meta: {
          title: '购物车'
        }
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my/My'),
        meta: {
          title: '我的'
        }
      },
    ]
  },
  {
    path: '/settlement',
    name: 'Settlement',
    component:()=>import('../views/settlement/Settlement'),
    meta:{
      title:'订单结算'
    }
  },
  {
    path: '/city',
    name: 'City',
    component:()=>import('../views/city/City'),
    meta:{
      title:'城市定位'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component:()=>import('../views/detail/Detail'),
    meta:{
      title:'商品详情'
    }
  },
  {
    path: '/evaluation',
    name: 'Evaluation',
    component:()=>import('../views/evaluation/Evaluation'),
    meta:{
      title:'评价'
    }
  },
  {
    path: '/evaluationDetail',
    name: 'EvaluationDetail',
    component:()=>import('../views/evaluation/EvaluationDetail'),
    meta:{
      title:'评价中心'
    }
  },
  {
    path: '/detailEvaluation',
    name: 'DetailEvaluation',
    component:()=>import('../views/evaluation/DetailEvaluation.vue'),
    meta:{
      title:'评价详情'
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component:()=>import('../views/personal/Personal'),
    meta:{
      title:'个人资料'
    }
  },
  {
    path: '/collect',
    name: 'Collect',
    component:()=>import('../views/collect/Collect'),
    meta:{
      title:'收藏商品'
    }
  },
  {
    path: '/order',
    name: 'Order',
    component:()=>import('../views/order/Order'),
    meta:{
      title:'全部订单'
    }
  },
  {
    path: '/address',
    name: 'Address',
    component:()=>import('../views/address/Address'),
    meta:{
      title:'地址管理'
    }
  },
  {
    path: '/recentlyViewed',
    name: 'RecentlyViewed',
    component:()=>import('../views/recentlyViewed/RecentlyViewed'),
    meta:{
      title:'最近浏览'
    }
  },
  {
    path: '/editAddress',
    name: 'EditAddress',
    component:()=>import('../views/editAddress/EditAddress'),
    meta:{
      title:'新增地址'
    }
  },
  {
    path: '/editAdd',
    name: 'EditAdd',
    component:()=>import('../views/editAdd/EditAdd'),
    meta:{
      title:'编辑地址'
    }
  },
  {
    path: '/settlementAddress',
    name: 'SettlementAddress',
    component:()=>import('../views/settlement/SettlementAddress'),
    meta:{
      title:'地址管理'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/login/Login'),
    meta:{
      title:'登陆注册'
    }
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

// 路由守卫
// let whitePath = ['/login','/classification','/my','/','/detail']
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
//   let user = sessionStorage.getItem('user')
//   if(whitePath.includes(to.path)){
//     next()
//   }else{
//     user ? next() : next ('/login')
//   }
})

export default router