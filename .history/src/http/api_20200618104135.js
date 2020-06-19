import service from "./index"

export default{
    // 登录
    // login(params){    //传形参
    //     //所有的方法必须return
    //     return service.post('./user/login',{username,password})
    // },
    login({nickname,password}){    //也可传实际参数
        //所有的方法必须return
        return service.post('./user/login',{nickname,password})
    }
}