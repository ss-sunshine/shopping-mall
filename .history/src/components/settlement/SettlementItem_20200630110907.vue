<template>
  <div>
    <top>
      <template v-slot:title>订单结算</template>
    </top>
    <div class="address">
      <van-cell-group>
        <van-cell>
          <template #title>
            <div>收货人: {{name}}</div>
          </template>
          <template #default>
            <div class="f-color-b">{{tel}}</div>
          </template>
          <template #icon>
            <van-icon name="location-o" size="26px" />
          </template>
          <template #label>
            <div>收货地址: {{name}}</div>
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
      list: [],
      name:'',
      tel:'',
      address:''
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
        this.list = res.defaultAdd;
        this.name = this.list.name
        this.tel = this.list.tel
        console.log(this.list);
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