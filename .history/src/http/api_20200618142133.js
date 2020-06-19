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
        return service.post('/user/login',{nickname,password})
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
        return service.get(`/classification?mallSubId=${id}`)
    },

    // 查询获取购物车数据
    getCard(){
        return service.get('/getCard')
    },

    // 购物车加减商品
    getEditCart({count,id,mallPrice}){
        return service.post('/editCart',{count,id,mallPrice})
    },

    // 购物车商品删除
    getDeleteShop({id}){
        return service.post('/deleteShop',{id})
    },

    // 购物车支付页面
    getOrder({address,tel,orderId,totalPrice,idDirect,count}){
        return service.post('/order',{address,tel,orderId,totalPrice,idDirect,count})
    },

    // 单个商品详情
    getGoods(id){
        return service.get(`/goods/one?id=${id}`)
    },

    // 收藏单个商品
    getCollection({goods}){
        return service.post('/collection',{goods})
    },

    // 取消收藏
    getCancelCollection({id}){
        return service.post('/cancelCollection',{id})
    },

    // 查询商品是否已收藏
    getIsCollection({id}){
        return service.post('/cancelCollection',{id})
    },
}