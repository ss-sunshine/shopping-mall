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
            <van-icon name="location-o" size="28px" class="m-r-1 address-icon"/>
          </template>
          <template #label>
            <div class="f-color-b">收货地址: {{address}}</div>
            <div class="label">(收货不便时,可选择免费待收货服务)</div>
          </template>
        </van-cell>
      </van-cell-group>
      <img src="../../assets/caitiao.jpg" alt class="line" />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <van-cell-group v-for="(item,index) in bxMallSubDtoItem" :key="index">
                <van-card :title="item1.name" @click-thumb="detail(item, index)">
                  <template #thumb>
                    <img :src="item.image" />
                  </template>
                  <template #price>
                    <div class="m-t-2">
                        <span class="price f14 f-w-7 m-r-1">￥{{item.present_price}}</span>
                    <span class="f14 text-line">￥{{item.present_price}}</span>
                    </div>
                  </template>
                </van-card>
              </van-cell-group>
      </div>
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
      arr:[],
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
    this.arr = this.$route.query.arr
    console.log(this.arr);
    // 查询默认
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.list = res.defaultAdd;
        this.name = this.list.name
        this.tel = this.list.tel
        this.address = this.list.address
        // console.log(this.list);
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
.van-cell{
  padding: 8px 10px;
}
.van-cell__value{
  width: 100% !important;
}
.van-cell__label{
  width: 230px;
}
.label{
  color: rgb(249,205,159);
}
.address-icon{
  margin-top: 28px;
}
</style>