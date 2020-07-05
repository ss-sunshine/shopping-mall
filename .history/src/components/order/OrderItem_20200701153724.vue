<template>
  <div>
    <top>
      <template v-slot:title>我的订单</template>
    </top>

    <van-tabs v-model="active" swipe-threshold="5">
      <van-tab title="全部">
        <div class="background"></div>
      </van-tab>
      <van-tab title="待支付">
        <div class="background"></div>
      </van-tab>
      <van-tab title="待发货">
        <div class="background"></div>
      </van-tab>
      <van-tab title="待收货">
        <div class="background"></div>
      </van-tab>
      <van-tab title="已完成">
          <div class="background1" v-for="(item,index) in order" :key="index">
            <van-cell-group>
              <van-cell>
                <template #title>
                  <div>订单编号：{{item.order_id}}</div>
                </template>
              </van-cell>
              <div class="card">
                  <div v-for="(item1,index1) in item.order_list" :key="index1">
                <van-card :title="item.name">
                  <template #thumb>
                    <img :src="item.image_path" class="content_img" />
                  </template>
                  <template #price>
                    <div class="m-t-2 f-j-bw">
                      <span class="price f14 f-w-7">￥{{item.present_price}}</span>
                      <span class="f14">x{{item.count}}</span>
                    </div>
                  </template>
                </van-card>
              </div>
              </div>
               <van-cell>
                <template #title>
                  <div>订单编号：{{item.order_id}}</div>
                </template>
              </van-cell>
            </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>

    <!-- <div class="wrapper" ref="wrapper">
      <div class="content"></div>
    </div>-->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../top/Top";
export default {
  name: "OrderItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      active: 0,
      order: []
    };
  },
  methods: {},
  mounted() {
    // new BScroll(this.$refs.wrapper, {
    //   click: true
    // });
    this.$api
      .getMyOrder()
      .then(res => {
        this.order = res.list;
        console.log(this.order);
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
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 46px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
.background {
  // height: 100%;
  height: calc(100vh - 90px);
  background: rgb(242, 242, 242);
}
.background1 {
    padding: 10px;
  height: 100%;
//   height: calc(100vh - 90px);
  background: rgb(242, 242, 242);
}
.van-card__thumb .content_img {
  border-radius: 0;
}
.content_img {
  border: 1px solid rgb(230, 230, 230);
  width: 80px;
  height: 80px;
}
.van-card {
  background: white;
  font-size: 14px;
  color: red;
  padding: 10px 0;
}
.card{
    border-top: 1px solid rgb(242, 242, 242);;
}
.van-tabs__content {
  padding: 10px;
}
.van-cell-group {
  margin-bottom: 10px;
  padding: 0 10px;
}
.van-cell:after {
  border: none;
}
.van-cell {
  padding: 0 10px;
}
</style>