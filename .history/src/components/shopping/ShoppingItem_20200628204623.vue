<template>
  <div>
    <div class="title f-a-j">购物车</div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="bottom">
          <van-cell-group>
            <van-cell center>
              <template #title>
                <van-checkbox
                  shape="square"
                  v-model="checked"
                  @click="checkAll"
                  checked-color="rgb(225,54,47)"
                >{{text}}</van-checkbox>
              </template>
              <template #default>
                <div class="All">
                  <div>
                    合计：
                    <span class="price f14 f-w-7">￥{{total | fixed}}</span>
                  </div>
                  <div>请确认订单</div>
                </div>
              </template>
            </van-cell>
            <van-cell>
              <template #default>
                <span class="m-r-1">
                  <van-button color="rgb(230,5,127)" size="small">删除</van-button>
                </span>
                <van-button color="rgb(230,5,127)" size="small">去结算</van-button>
              </template>
            </van-cell>
          </van-cell-group>
          <van-cell-group v-for="(item,index) in shopList" :key="item.id">
            <div class="f-a">
              <van-checkbox
                v-model="item.check"
                shape="square"
                checked-color="rgb(225,54,47)"
                class="p-l-16"
                @click="changeItem"
              ></van-checkbox>
              <van-card :title="item.name" @click-thumb="detail(item, index)">
                <template #thumb>
                  <img :src="item.image_path" />
                </template>
                <template #price>
                  <span class="price f14">￥{{item.present_price}}</span>
                </template>
                <template #num>
                  <van-stepper v-model="item.count" theme="round" button-size="22" disable-input />
                </template>
              </van-card>
            </div>
          </van-cell-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "ShoppingItem",
  props: {},
  components: {},
  data() {
    return {
      checked: false,
      value: "",
      shopList: [],
      text: "全选"
    };
  },
  methods: {
    checkAll() {
      // 全选按钮的状态决定所有选项的状态
      if (this.checked === true) {
        this.text = "取消全选";
      } else {
        this.text = "全选";
      }

      this.shopList.map(item => {
        item.check = this.checked;
      });
    },
    changeItem() {
      // every
      this.checked = this.shopList.every(item => {
        return item.check === true;
      });
    },
    detail(item, index) {
      this.$router.push({ path: "/detail", query: { id: item.cid } });
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    // this.value = this.$route.query.value;
    this.$api
      .getCard()
      .then(res => {
        console.log(res);
        this.shopList = res.shopList;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    total() {
      let sum = 0;
      this.shopList.map(item => {
        if (item.check) {
          sum += item.count * item.present_price;
        }
      });
      return sum;
    }
  },
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 50px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
.title {
  height: 40px;
  background: white;
  border-bottom: 1px solid rgb(246, 246, 246);
  position: fixed;
  width: 100%;
  z-index: 99;
}
.bottom {
  padding-top: 40px;
}
.All {
  text-align: left;
  padding-left: 20px;
  color: black;
}
.van-cell__value--alone {
  text-align: right;
}
.van-card {
  background: white;
  font-size: 14px;
  color: red;
}
.van-card__thumb img {
  border-radius: 0;
}
img {
  border: 1px solid rgb(230, 230, 230);
  width: 80px;
  height: 80px;
}
.price {
  color: rgb(255, 0, 0);
}
.p-l-16 {
  padding-left: 16px;
}
</style>