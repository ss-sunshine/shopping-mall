import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./http/api"
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);

// 全局注册
Vue.use(Dialog);
Vue.use(Vant);

//封装请求
Vue.prototype.$api = api
Vue.prototype.$checkLogin = (next) => {
  if(!sessionStorage.user){
    Dialog.confirm({
      title: "请登录",
      message: "当前状态未登录，是否立即登录？"
    }).then(()=>{
      router.push("/login");
    }).catch(()=>{})
    return false
  }else{
    next()
  }
}

//跨域
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
