<template>
  <div>
    <top>
      <template v-slot:title>我的订单</template>
    </top>
    <div class="background">
      <van-tabs v-model="active" swipe-threshold="5">
        <van-tab title="全部"></van-tab>
        <van-tab title="待支付"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
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
      active: 0
    };
  },
  methods: {},
  mounted() {
    // new BScroll(this.$refs.wrapper, {
    //   click: true
    // });
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
  height: calc(100vh - 90px);
  background: rgb(242, 242, 242);
}
</style>