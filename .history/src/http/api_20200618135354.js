import service from "./index"

export default{
    // 登录
    // login(params){    //传形参
    //     //所有的方法必须return
    //     return service.post('./user/login',{username,password})
    // },
    login({nickname,password}){    //也可传实际参数
        //所有的方法必须return
        console.log(nickname);
        console.log(password);
        return service.post('./user/login',{nickname,password})
    },

    //首页
    getRecommend(){
        return service.get('/recommend')
    },

    // 搜索
    grtSearch(){
        return service.get('/search')
    },

    // 分类查询
    getClassification(id){
        return service.get(`/classification?id=${id}`)
    },

    // 查询获取购物车数据
    getCard(){
        return service.get('/getCard')
    },

    // 
}