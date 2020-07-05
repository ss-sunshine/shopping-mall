<template>
  <div>
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
            <van-tabs v-model="active">
              <van-tab title="商品详情">
                <div v-html="detail.detail" class="detail-detail"></div>
              </van-tab>
              <van-tab title="商品评价">
                <!-- <detailComment></detailComment> -->
                <div class="p-tb-1">
                  <div class="f-a p-l-2" v-for="item in arr" :key="item.id">
                    <img src="../../assets/QQ.jpg" class="image" />
                    <div class="m-l-2">
                      <div class="f-a f14 m-b-1">
                        <div>{{nickname}}</div>
                        <div class="right">{{item.comment_time}}</div>
                      </div>
                      <van-rate
                        v-model="item.rate"
                        :size="14"
                        color="#ee0a24"
                        void-icon="star"
                        void-color="#eee"
                      />
                      <div>{{item.content}}</div>
                    </div>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
      <van-goods-action class="shop-icon">
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="check" :badge="shopList.length" />

        <van-button
          color="rgb(255,136,85)"
          square
          text="加入购物车"
          size="large"
          @click="checkSettlement"
        />
        <van-button color="rgb(255,68,68)" square text="立即购买" size="large" @click="checkaddShop" />
        <!-- <addShop :show="show" :detail="detail"></addShop> -->
      </van-goods-action>
    </div>
    <van-popup v-model="show" closeable close-icon="close" position="bottom">
      <div class="d-f">
        <img :src="detail.image" alt class="addShop-img" />
        <div class="title">
          <div class="f14">{{detail.name}}</div>
          <div class="f14 addShop-price">￥{{detail.present_price}}</div>
        </div>
      </div>

      <div class="p-15 remain m-b-4 d-f">
        <div class="m-r-4">
          <div class="f14">购买数量：</div>
          <div class="f12 f-a m-t-1">
            <div class="remaining m-r-2">剩余：{{detail.amount}}件</div>
            <div class="limit">每人限购50件</div>
          </div>
        </div>
        <van-stepper v-model="value" integer @change="change" />
      </div>
      <van-button color="rgb(255,68,68)" size="large" @click="addShopping">确定</van-button>
    </van-popup>
  </div>
</template>

<script>
import AddShop from "./addShop/AddShop";
import { Dialog } from "vant";
import BScroll from "better-scroll";
import DetailComment from "../../components/detail/DetailComment";
export default {
  inject: ["reload"],
  name: "DetailItem",
  props: {},
  components: {
    DetailComment,
    AddShop
  },
  data() {
    return {
      active: 0,
      id: "",
      id_: "",
      detail: {},
      flag: false,
      show: false,
      item: [{ name: "商品详情" }, { name: "商品评论" }],
      // num: 0,
      text: "收藏：",
      value: "",
      recently: [],
      recentlyArr: [],
      shopList: [],
      obj: {},
      nickname: "",
      anonymous: "",
      arr: []
    };
  },
  methods: {
    change() {
      this.$api
        .getEditCart({
          count: this.value,
          id: this.id,
          mallPrice: this.detail.present_price
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addShopping() {
      this.$set(this.detail, "count", this.value);
      this.$set(this.detail, "mallPrice", this.detail.present_price);
      let Detail = [];
      Detail.push(this.detail);
      localStorage.setItem("detail", JSON.stringify(Detail));
      this.$router.push({
        path: "/settlement",
        query: { Detail, idDirect: true }
      });
    },
    addShop() {
      this.show = true;
    },
    checkaddShop() {
      this.$checkLogin(this.addShop);
    },
    settlement() {
      // this.$router.push("settlement");
      this.$api
        .getAddShop({ id: this.id })
        .then(res => {
          // console.log(res);
          // this.$router.push({query:{value:this.value}})
          // console.log(this.value);
          this.$toast.success("添加成功");
          this.reload();
        })
        .catch(err => {
          console.log(err);
        });
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
          console.log(res);
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
    // 购物车数量
    this.$api
      .getCard()
      .then(res => {
        // console.log(res);
        this.shopList = res.shopList;
      })
      .catch(err => {
        console.log(err);
      });

    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.id = this.$route.query.id;
    // console.log(this.$route.query.id);

    //调用本地储存请求（main.js）
    this.$recently(this.id);

    this.$api
      .getGoods(this.id)
      .then(res => {
        // console.log(res.goods.goodsOne);
        this.detail = res.goods.goodsOne;
      })
      .catch(err => {
        console.log(err);
      });
    this.$api
      .getIsCollection({ id: this.id })
      .then(res => {
        console.log(res);
        if (res.isCollection === 1) {
          this.flag = true;
        } else {
          this.flag = false;
        }
      })
      .catch(err => {
        console.log(err);
      });

    //商品评论
    //已评价
    this.$api
      .getAlreadyEvaluated()
      .then(res => {
        // console.log(res.data.list);
        let arr = res.data.list;
        this.arr = arr.filter(item => {
          return this.id !== item.cid;
        });
        console.log(this.arr);
        this.arr.map(item=>{
          this.anonymous = item.anonymous
        })
      })
      .catch(err => {
        console.log(err);
      });

    if (this.anonymous === false) {
      this.$api
        .getQueryUser()
        .then(res => {
          this.nickname = res.userInfo.nickname;
          console.log(this.nickname);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (this.anonymous === true) {
      this.nickname = "匿名用户";
    }
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
  margin-top: 15px;
  padding: 12px 15px;
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
.title {
  width: 230px;
}
.addShop-price {
  color: red;
  // margin-left: 95px;
  // line-height: 0;
}
.addShop-img {
  width: 80px;
  height: 80px;
  margin: 0 15px 15px 15px;
  margin-top: 10px;
  border: 1px solid rgb(230, 230, 230);
}
.van-action-sheet__header {
  font-size: 14px;
}
.addShop[data-v-6923027c] {
  padding: 0;
}
.remain {
  border-top: 1px solid rgb(242, 242, 242);
  border-bottom: 1px solid rgb(242, 242, 242);
}
.remaining {
  color: rgb(150, 150, 150);
}
.limit {
  color: red;
}
.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.right {
  // padding-right: 100px;
  position: relative;
  left: 100px;
}
</style>