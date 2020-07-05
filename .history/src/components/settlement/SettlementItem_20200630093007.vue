<template>
  <div>
    <top>
      <template v-slot:title>订单结算</template>
    </top>
    <van-cell-group>
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <img src="../../assets/caitiao.jpg" alt="">
    <div class="wrapper" ref="wrapper">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../top/Top";
export default {
  name: "SettlementItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      list: []
    };
  },
  methods: {},
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.list = this.$route.query.arr;
    console.log(this.list);
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
</style>