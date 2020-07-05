<template>
  <div>
    <top>
      <template v-slot:title>我的订单</template>
    </top>

    <van-tabs v-model="active" swipe-threshold="5">
      <van-tab title="全部">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
        <div class="background1" v-for="(item,index) in order" :key="index">
            
          <van-cell-group>
            <van-cell>
              <template #title>
                <div class="f-j-bw">
                  <div>订单编号：{{item.order_id}}</div>
                  <div class="complete">交易完成</div>
                </div>
              </template>
            </van-cell>
            <div class="card">
              <div v-for="(item1,index1) in item.order_list" :key="index1">
                <van-card>
                  <template #thumb>
                    <img :src="item1.image_path" class="content_img" />
                  </template>
                  <template #title>
                    <div class="m-t-2 f-j-bw">
                      <div>{{item1.name}}</div>
                      <div>
                        <div class="f14">￥{{item1.present_price}}</div>
                        <div class="f14 title-right">x{{item1.count}}</div>
                      </div>
                    </div>
                  </template>
                </van-card>
              </div>
            </div>
            <van-cell>
              <template #default>
                <div class="text-right">
                  <div>创建时间：{{item.add_time}}</div>
                  <div>收货地址：{{item.address}}</div>
                  <div>
                      <span class="m-r-05">共{{item.order_list.length}}件商品</span>
                      <span>合计：{{item.mallPrice}}</span>
                  </div>
                </div>
              </template>
            </van-cell>
          </van-cell-group>
        </div>
        </van-pull-refresh>
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
        <div class="background"></div>
      </van-tab>
    </van-tabs>

    <!-- <div class="wrapper" ref="wrapper">
      <div class="content"></div>
    </div> -->
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
      order: [],
      isLoading: false,
    };
  },
  methods: {
      onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
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
  border-radius: 10px;
}
.content_img {
  border: 1px solid rgb(242, 242, 242);
  width: 80px;
  height: 80px;
}
.van-card {
  background: white;
  font-size: 14px;
  padding: 10px 0;
}
.card {
  border-top: 1px solid rgb(242, 242, 242);
  border-bottom: 1px solid rgb(242, 242, 242);
}
.van-tabs__content {
  padding: 10px;
}
.van-cell-group {
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
}
.van-cell:after {
  border: none;
}
.van-cell {
  padding: 10px 0;
}
.title-right {
  float: right;
}
.text-right {
  text-align: right;
}
.complete {
  color: red;
}
</style>