<template>
  <div>
    <div class="flexd z-index">
      <top>
        <template v-slot:title>订单结算</template>
      </top>
      <div class="address" v-if="!this.$route.query.item">
        <van-cell-group>
          <van-cell center>
            <template #title>
              <div class="f-j-bw">
                <div>收货人: {{name}}</div>
                <div class="f-color-b">{{tel}}</div>
              </div>
            </template>
            <template #icon>
              <div class="address-icon f-a">
                <van-icon name="location-o" size="28px" class="m-r-1" />
              </div>
            </template>
            <template #right-icon>
              <div class="address-icon f-a">
                <van-icon name="arrow" size="18px" @click="clickItem" />
              </div>
            </template>
            <template #label>
              <div class="f-color-b">收货地址: {{address}}</div>
              <div class="label">(收货不便时,可选择免费待收货服务)</div>
            </template>
          </van-cell>
        </van-cell-group>
        <img src="../../assets/caitiao.jpg" alt class="line" />
      </div>
      <div class="address" v-if="this.$route.query.item">
        <van-cell-group>
          <van-cell center>
            <template #title>
              <div class="f-j-bw">
                <div>收货人: {{name1}}</div>
                <div class="f-color-b">{{tel1}}</div>
              </div>
            </template>
            <template #icon>
              <div class="address-icon f-a">
                <van-icon name="location-o" size="28px" class="m-r-1" />
              </div>
            </template>
            <template #right-icon>
              <div class="address-icon f-a">
                <van-icon name="arrow" size="18px" @click="clickItem" />
              </div>
            </template>
            <template #label>
              <div class="f-color-b">收货地址: {{address1}}</div>
              <div class="label">(收货不便时,可选择免费待收货服务)</div>
            </template>
          </van-cell>
        </van-cell-group>
        <img src="../../assets/caitiao.jpg" alt class="line" />
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-if="this.$route.query.arr">
          <van-cell-group v-for="(item,index) in arr" :key="index">
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
          </van-cell-group>
        </div>
        <div v-if="this.$route.query.Detail">
          <van-cell-group v-for="(item,index) in detail" :key="index">
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
          </van-cell-group>
        </div>
      </div>
    </div>
    <van-submit-bar
      v-if="this.$route.query.arr"
      :price="total"
      button-text="提交订单"
      @submit="onShopp"
    />
    <van-submit-bar
      v-if="this.$route.query.Detail"
      :price="num"
      button-text="提交订单"
      @submit="onDetail"
    />
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
      arr: [],
      arr1: [],
      list: {},
      name: "",
      tel: "",
      address: "",
      name1: "",
      tel1: "",
      address1: "",
      idDirect: "",
      detail: [],
      detail1: [],
      count:""
      // address: {}
    };
  },
  methods: {
    onShopp() {
      this.idDirect = false;
      this.$api
        .getOrder({
          address: this.address,
          tel: this.tel,
          orderId: this.arr1,
          totalPrice: this.total,
          idDirect: this.idDirect,
          count: this.arr.length
        })
        .then(res => {
          console.log(res);
          this.$toast.success("结算成功");
          this.arr = [];
          localStorage.setItem("shopping", JSON.stringify(this.arr));
          // localStorage.removeItem("shopping");
          this.$router.push("/my")
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDetail() {
      this.idDirect = true;
      this.$api
        .getOrder({
          address: this.address,
          tel: this.tel,
          orderId: this.detail1,
          totalPrice: this.num,
          idDirect: this.idDirect,
          count: this.count
        })
        .then(res => {
          console.log(res);
          this.$toast.success("结算成功");
          this.detail = [];
          localStorage.setItem("detail", JSON.stringify(this.detail));
          // localStorage.removeItem("detail");
          this.$router.push("/my")
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickItem() {
      this.$router.push("/settlementAddress");
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    if (this.$route.query.arr) {
      this.arr = this.$route.query.arr;
      this.idDirect = this.$route.query.idDirect;
      this.arr = JSON.parse(localStorage.getItem("shopping"));
      // console.log(this.idDirect);
      if (localStorage.shopping) {
        this.arr.map(item => {
          this.arr1.push(item.cid);
        });
      }
    } else if (this.$route.query.Detail) {
      this.detail = this.$route.query.Detail;
      this.idDirect = this.$route.query.idDirect;
      console.log(this.detail);
      this.detail = JSON.parse(localStorage.getItem("detail"));
      // console.log(this.detail);
      if (localStorage.detail) {
        this.detail.map(item => {
          this.count = item.count
          this.detail1.push(item.id);
        });
      }
    }

    // 查询默认地址
    if (!this.$route.query.item) {
      this.$api
        .getDefaultAddress()
        .then(res => {
          this.list = res.defaultAdd;
          this.name = this.list.name;
          this.tel = this.list.tel;
          this.address = this.list.address;
          // console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (this.$route.query.item) {
      let address = this.$route.query.item;
      this.name1 = address.name;
      this.tel1 = address.tel;
      this.address1 = address.address;
      console.log(this.name1);
    }
  },
  watch: {},
  computed: {
    total() {
      let sum = 0;
      this.arr.map(item => {
        sum += item.count * item.present_price * 100;
      });
      return sum;
    },
    num() {
      let sum = 0;
      this.detail.map(item => {
        sum += item.count * item.present_price * 100;
      });
      return sum;
    }
  }
};
</script>

<style scoped lang='scss'>
.wrapper {
  // height: 100vh;
  // height: calc(100vh - 50px);
  overflow: hidden; //超出部分隐藏
  background: white;
  position: relative;
  top: 130px;
  height: calc(100vh - 180px);
}
.address {
  font-size: 0;
}
.line {
  width: 100%;
  height: 4px;
}
.van-cell {
  padding: 8px 10px;
}
.van-cell__value {
  width: 100% !important;
  position: absolute;
  top: 0;
  right: 34px;
}
.van-cell__label {
  width: 210px;
}
.label {
  color: rgb(249, 205, 159);
}
// .address-icon {
//   height: 80px;
// }
.van-card__thumb .content_img {
  border-radius: 0;
}
.van-card__content {
  justify-content: start;
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
}
.van-card__price {
  width: 100%;
}
.price {
  color: rgb(255, 0, 0);
}
</style>