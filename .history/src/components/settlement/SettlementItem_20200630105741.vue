<template>
  <div>
    <top>
      <template v-slot:title>订单结算</template>
    </top>
    <div class="address">
      <van-cell-group>
        <van-cell title="单元格" value="内容" label="描述信息">
          <template #icon>
            <van-icon name="location-o" size="26px" />
          </template>
        </van-cell>
      </van-cell-group>
      <img src="../../assets/caitiao.jpg" alt class="line" />
    </div>
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
    // 查询默认
    this.$api
      .getDefaultAddress()
      .then(res => {
        console.log(res);
        // this.list = res.defaultAdd._id;
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
.address {
  font-size: 0;
}
.line {
  width: 100%;
  height: 4px;
}
</style>