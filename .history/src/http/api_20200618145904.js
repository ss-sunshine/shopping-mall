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
        return service.post('/isCollection',{id})
    },

    // 加入购物车
    getAddShop({id}){
        return service.post('/addShop',{id})
    },

    // 退出登录
    getLoginOut(){
        return service.post('/loginOut')
    },

    // 获取用户信息
    getQueryUser(){
        return service.post('/queryUser')
    },

    // 修改保存用户信息
    getSaveUser({gender,year,month,day,id,nickname}){
        return service.post('/saveUser',{gender,year,month,day,id,nickname})
    },

    // 查询用户订单数量
    getOrderNum(){
        return service.get('/myOrder/orderNum')
    },

    // 商品评论
    getComment({id,rate,content,anonymous,_id,order_id,image}){
        return service.post('/goodsOne/comment',{id,rate,content,anonymous,_id,order_id,image})
    },
    
    // 获取登录注册默认验证码
    getVerify(){
        return service.get('/verify')
    },

    // 查询用户收货地址
    getAddress(){
        return service.get('/getAddress')
    },

    // 查询默认收货地址
    getDefaultAddress(){
        return service.get('/getDefaultAddress')
    },

    // 设置默认收货地址
    getSetDefaultAddress({id}){
        return service.post('/setDefaultAddress',{id})
    },

    // 增加收货地址
    getAddress({name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id}){
        return service.post('/address',{name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id})
    },

    // 删除地址
    getDeleteAddress({id}){
        return service.post('/address',{id})
    },
}