<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" @click="back" />
    </div>
    <div class="content">
      <van-swipe indicator-color="rgb(255,136,85)">
        <van-swipe-item>
          <img :src="detail.image" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="detail.image_path" alt />
        </van-swipe-item>
      </van-swipe>
      <div>
        <div class="title m-lr-15">
          <div>{{detail.name}}</div>
          <div class="f14 price">￥{{detail.present_price}}</div>
        </div>
        <div class="des f12 f-aj-bw">
          <div>运费：{{detail.__v}}</div>
          <div>剩余：{{detail.amount}}</div>
          <div class="f-a">
            取消收藏：
            <van-icon name="like-o" size="18px" @click="no" v-if="flag===false" />
            <van-icon name="like" size="18px" @click="yes" v-if="flag===true" color="rgb(255,0,0)" />
          </div>
        </div>
        <div class="shop f14 f-aj-bw">
          <div class="f-a">
            <van-icon name="shop-o" size="18px" class="shop-o"/>
            <div>有赞的店</div>
            <div class="f12 official">官方</div>
          </div>
          <div class="f-a">
            进入店铺
            <van-icon name="arrow" color="rgb(160, 160, 160)" class="shop-arrow"/>
          </div>
        </div>
        <div class="shop f14 f-aj-bw">
            <div>商品详情
            <div class="f12 official">商品详情</div>
            </div>
        </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-button color="rgb(255,136,85)" square text="加入购物车" size="large"/>
      <van-button color="rgb(255,68,68)" square  text="立即购买" size="large"/>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "DetailItem",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      detail: {},
      flag: false,
      item:[
        {name:'商品详情'}
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    no() {
      this.flag = true;
    },
    yes() {
      this.flag = false;
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    //   console.log(this.$route.query.id);
    this.$api
      .getGoods(this.id)
      .then(res => {
        console.log(res.goods.goodsOne);
        this.detail = res.goods.goodsOne;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.arrow {
  width: 36px;
  height: 36px;
  background: rgb(120, 120, 121);
  border-radius: 50%;
  position: fixed;
  z-index: 99;
}
.content{
  padding-top: 20px;
}
img {
  width: 100%;
  border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
.van-swipe__indicato {
  background-color: rgb(120, 120, 121) !important;
  opacity: 10 !important;
}
.title {
  margin-top: 6px;
  margin-bottom: 10px;
}
.price {
  color: red;
  margin-top: 6px;
}
.des {
  color: rgb(160, 160, 160);
  padding: 8px 15px;
  border-top: 1px solid rgba(242, 242, 242, 0.6);
  border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
.shop {
  margin: 15px 0;
  padding: 10px 15px;
  border-top: 1px solid rgba(242, 242, 242, 0.6);
  border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
.shop-o{
  margin-right: 4px;
}
.official{
  color: white;
  padding: 2px 6px;
  background: rgb(255,68,68);
  border-radius: 4px;
  margin-left: 4px;
}
.shop-arrow{
  margin-left: 4px;
}
</style>