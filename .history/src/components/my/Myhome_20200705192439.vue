<template>
  <div>
    <div class="title f-a-j">会员中心</div>
    <div class="ip f-c-a-j p-r">
      <van-icon
        name="setting"
        color="rgb(238,238,238)"
        class="right m-1"
        size="20px"
        @click="checksetting"
      />
      <van-image round width="80px" height="80px" :src="require('../../assets/QQ.jpg')" />
      <div class="f-color-w f-w-9 f18 m-t-1" v-if="flag===true">欢迎您：{{name}}</div>
      <div @click="login" class="f-color-w m-t-1 f14" :class="{loginA:show===true}">{{text}}</div>
    </div>
    <van-tabbar
      :fixed="false"
      class="nav"
      active-color="rgb(102,102,102)"
      inactive-color="rgb(102,102,102)"
    >
      <van-tabbar-item icon="pending-payment">待付款</van-tabbar-item>
      <van-tabbar-item icon="tosend">待发货</van-tabbar-item>
      <van-tabbar-item icon="logistics">待收货</van-tabbar-item>
      <van-tabbar-item icon="records" :badge="count" @click="clickItem">评价</van-tabbar-item>
      <van-tabbar-item icon="points" :badge="num" @click="complete">已完成</van-tabbar-item>
    </van-tabbar>
    <div class="f14">
      <van-cell-group class="m-b-15">
        <van-cell icon="orders-o" title="全部订单" is-link @click="checkorder" />
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="star-o" title="收藏商品" is-link @click="checkcollect" />
        <van-cell icon="home-o" title="地址管理" is-link @click="checkaddress" />
        <van-cell icon="browsing-history-o" title="最近浏览" is-link @click="checkrecentlyViewed" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  inject: ["reload"],
  name: "",
  props: {},
  components: {},
  data() {
    return {
      name: "",
      text: "",
      flag: false,
      show: false,
      count: "",
      num: ""
    };
  },
  methods: {
    clickItem() {
      this.$router.push("/evaluation");
    },
    complete() {
      this.$router.push({ path: "/order", query: { activeName: "e" } });
    },
    recentlyViewed() {
      this.$router.push("/recentlyViewed");
    },
    checkrecentlyViewed() {
      this.$checkLogin(this.recentlyViewed);
    },
    address() {
      this.$router.push("/address");
    },
    checkaddress() {
      this.$checkLogin(this.address);
    },
    order() {
      this.$router.push("/order");
    },
    checkorder() {
      this.$checkLogin(this.order);
    },
    collect() {
      this.$router.push("/collect");
    },
    checkcollect() {
      this.$checkLogin(this.collect);
    },
    setting() {
      this.$router.push("/personal");
    },
    checksetting() {
      this.$checkLogin(this.setting);
    },
    login() {
      let user = JSON.parse(sessionStorage.getItem("user"));
      //   console.log(user.userInfo.nickname);
      //   this.name = user.userInfo.nickname;
      if (user !== null) {
        Dialog.confirm({
          title: "退出登录",
          message: "确定要退出登录吗？"
        })
          .then(res => {
            this.$api
              .getLoginOut()
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
            localStorage.removeItem("searchCity");
            sessionStorage.clear();
            this.reload();
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
    }
  },
  mounted() {
    //未评价
    this.$api
      .getTobeEvaluated()
      .then(res => {
        console.log(res.data);
        if (sessionStorage.user) {
          this.count = res.data.count;
          if (this.count === 0) {
            this.count = "";
          }
        } else {
          this.count = "";
        }
      })
      .catch(err => {
        console.log(err);
      });
    //已评价
    this.$api
      .getAlreadyEvaluated()
      .then(res => {
        console.log(res.data);
        if (sessionStorage.user) {
          this.num = res.data.count;
          if (this.num === 0) {
            this.num = "";
          }
        } else {
          this.num = "";
        }
      })
      .catch(err => {
        console.log(err);
      });

let user = JSON.parse(localStorage.getItem("personal"));
    let user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(user);
    if (user !== null) {
      this.flag = true;
      this.name = user.userInfo.nickname;
      this.text = "退出登录";
      //   console.log(this.name);
    } else {
      this.show = true;
      //   this.name=""
      this.text = "请登录";
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  height: 40px;
  background: white;
}
.ip {
  height: 220px;
  background: linear-gradient(to bottom, rgb(233, 13, 126), rgb(204, 16, 113));
}
.loginA {
  font-size: 18px;
  font-weight: 900;
}
.right {
  position: absolute;
  right: 0;
  top: 0;
}
.nav {
  height: 70px;
}
.van-tabbar-item {
  font-size: 14px;
}
.item-one {
  border-bottom: 1px solid rgb(248, 248, 248);
  margin-bottom: 15px;
}
</style>