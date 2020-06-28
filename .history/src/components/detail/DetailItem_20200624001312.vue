<template>
  <div class="detail">
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" @click="back" />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <van-swipe indicator-color="rgb(255,136,85)">
          <van-swipe-item>
            <img :src="detail.image" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="detail.image_path" alt />
          </van-swipe-item>
        </van-swipe>
        <div>
          <div class="title m-lr-15">
            <div>{{detail.name}}</div>
            <div class="f14 price">￥{{detail.present_price}}</div>
          </div>
          <div class="des f12 f-aj-bw">
            <div>运费：{{detail.__v}}</div>
            <div>剩余：{{detail.amount}}</div>
            <div class="f-a">
              <div class="collect">{{text}}</div>
              <van-icon name="like-o" size="18px" @click="no" v-if="flag===false" />
              <van-icon
                name="like"
                size="18px"
                @click="yes"
                v-if="flag===true"
                color="rgb(255,0,0)"
              />
            </div>
          </div>
          <div class="shop f14 f-aj-bw">
            <div class="f-a">
              <van-icon name="shop-o" size="18px" class="shop-o" />
              <div>有赞的店</div>
              <div class="f12 official">官方</div>
            </div>
            <div class="f-a">
              进入店铺
              <van-icon name="arrow" color="rgb(160, 160, 160)" class="shop-arrow" />
            </div>
          </div>
          <div class="item f14 f-aj-around">
            <div v-for="(item,index) in item" :key="index">
              <div @click="clickItem(item,index)" :class="{red:num===index}">{{item.name}}</div>
            </div>
          </div>
          <detailComment v-if="num === 1"></detailComment>
          <div v-if="num === 0" v-html="detail.detail" class="detail-detail"></div>
        </div>
      </div>
    </div>
    <van-goods-action class="shop-icon">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="check" />

      <van-button color="rgb(255,136,85)" square text="加入购物车" size="large" @click="addShop" />

      <van-action-sheet v-model="show" :title="detail.name" :round="false">
        <div class="addShop">
          <div class="f14 addShop-price">￥{{detail.present_price}}</div>
          <img :src="detail.image" alt class="addShop-img" />
        <div class="line"></div>
        </div>
      </van-action-sheet>
      <!-- <addShop :show="show" :detail="detail"></addShop> -->
      <van-button color="rgb(255,68,68)" square text="立即购买" size="large" @click="checkSettlement" />
    </van-goods-action>
  </div>
</template>

<script>
import AddShop from "./addShop/AddShop";
import { Dialog } from "vant";
import BScroll from "better-scroll";
import DetailComment from "../../components/detail/DetailComment";
export default {
  name: "DetailItem",
  props: {},
  components: {
    DetailComment,
    AddShop
  },
  data() {
    return {
      id: "",
      detail: {},
      flag: false,
      show: false,
      item: [{ name: "商品详情" }, { name: "商品评论" }],
      num: 0,
      text: "收藏："
    };
  },
  methods: {
    addShop() {
      (this.show = true),
        this.$api
          .getAddShop({ id: this.id })
          .then(res => {
            console.log(res);
            this.$toast.success("添加成功");
          })
          .catch(err => {
            console.log(err);
          });
    },
    settlement() {
      this.$router.push("/settlement");
    },
    checkSettlement() {
      this.$checkLogin(this.settlement);
    },
    //购物车
    shop() {
      // console.log("object");
      this.$router.push("/shopping");
      // let user = sessionStorage.getItem("user");
      // // console.log(user);
      // if (user !== null) {
      //   this.$router.push('/shopping')
      // } else {
      //   Dialog.confirm({
      //     title: "请登录",
      //     message: "当前状态未登录，是否立即登录？"
      //   })
      //     .then(res => {
      //       this.$router.push("/login");
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // }
    },
    check() {
      this.$checkLogin(this.shop);
    },
    back() {
      this.$router.go(-1);
    },
    no() {
      let user = sessionStorage.getItem("user");
      // console.log(user);
      if (user !== null) {
        this.flag = true;
        this.text = "取消收藏：";

        this.$api
          .getCollection(this.detail)
          .then(res => {
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        Dialog.confirm({
          title: "请登录",
          message: "当前状态未登录，是否立即登录？"
        })
          .then(res => {
            this.$router.push("/login");
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    yes() {
      this.flag = false;
      this.text = "收藏：";
      this.$api
        .getCancelCollection({ id: this.id })
        .then(res => {
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickItem(item, index) {
      this.num = index;
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.id = this.$route.query.id;
    // console.log(this.$route.query.id);
    this.$api
      .getGoods(this.id)
      .then(res => {
        // console.log(res.goods.goodsOne);
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
.detail-detail {
  font-size: 0;
}
.wrapper {
  // height: 100vh;
  height: calc(100vh - 50px);
  overflow: hidden; //超出部分隐藏
  // background: rgb(242, 242, 242);
}
// .content {
//   // height: 100%;
//   overflow: hidden;
// }
.detail {
  margin-bottom: 50px;
}
.arrow {
  width: 36px;
  height: 36px;
  background: rgb(120, 120, 121);
  border-radius: 50%;
  position: fixed;
  z-index: 99;
}
.content {
  padding-top: 20px;
}
img {
  width: 100%;
  border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
.van-swipe__indicato {
  background-color: rgb(120, 120, 121) !important;
  opacity: 10 !important;
}
.title {
  margin-top: 8px;
  margin-bottom: 12px;
}
.price {
  color: red;
  margin-top: 6px;
}
.des {
  color: rgb(160, 160, 160);
  padding: 8px 15px;
  border-top: 1px solid rgba(242, 242, 242, 0.6);
  border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
.shop {
  margin: 15px 0;
  padding: 10px 15px;
  border-top: 1px solid rgba(242, 242, 242, 0.6);
  border-bottom: 1px solid rgba(242, 242, 242, 0.6);
}
.item {
  margin: 15px 0;
  padding: 10px 15px;
  border-top: 1px solid rgba(242, 242, 242, 0.6);
}
.shop-o {
  margin-right: 4px;
}
.official {
  color: white;
  padding: 2px 6px;
  background: rgb(255, 68, 68);
  border-radius: 4px;
  margin-left: 4px;
}
.shop-arrow {
  margin-left: 4px;
}
.shop-icon {
  border-top: 1px solid rgba(242, 242, 242, 0.6);
}
.red {
  color: red;
}
.collect {
  width: 60px;
  text-align: right;
}
// .addShop {
//   padding: 16px 16px 160px;
// }
.addShop-price{
  color: red;
  margin-left: 95px;
  line-height: 0.5;
}
.addShop-img {
  width: 80px;
  height: 80px;
  margin: 0 15px 15px 15px;
  position: relative;
  top: -60px;
  border: 1px solid rgb(230, 230, 230);
}
.line{
  background: rgb(230,230,230);
  width: 100%;
  height: 1px;
}
.van-action-sheet__header {
  font-size: 14px;
}
.addShop[data-v-6923027c] {
  padding: 0 15px;
}
</style>