<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" @click="back" />
    </div>
    <div>
      <van-swipe indicator-color="rgb(255,136,85)">
        <van-swipe-item>
          <img :src="detail.image" alt />
        </van-swipe-item>
         <van-swipe-item>
          <img :src="detail.image_path" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="m-lr-15">
          <div class="title">
              <div>{{detail.name}}</div>
          <div class="f14 price">￥{{detail.present_price}}</div>
          </div>
          <div class="des f12 f-aj-bw">
              <div>运费：{{detail.__v}}</div>
              <div>剩余：{{detail.amount}}</div>
              <div>取消收藏：</div>
          </div>
      </div>
    </div>
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
      detail: {}
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
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
img{
    width: 100%;
    border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
.van-swipe__indicato{
    background-color: rgb(120, 120, 121) !important;
    opacity: 10 !important;
}
.title{
    margin-top: 6px;
    margin-bottom: 10px;
}
.price{
    color: red;
    margin-top: 6px;
}
.des{
    color: rgb(160, 160, 160);
    padding: 5px 0;
    border-top: 1px solid rgba(242, 242, 242, 0.6);
    border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
</style>