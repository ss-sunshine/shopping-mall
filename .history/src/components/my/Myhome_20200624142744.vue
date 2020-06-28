<template>
  <div>
    <div class="title f-a-j">会员中心</div>
    <div class="ip f-c-a-j p-r">
      <van-icon name="setting" color="rgb(238,238,238)" class="right m-1" size="20px" />
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
      <van-tabbar-item icon="records" badge="5">评价</van-tabbar-item>
      <van-tabbar-item icon="points" badge="10">已完成</van-tabbar-item>
    </van-tabbar>
    <div class="f14">
      <div class="p-tb-1 f-aj-bw item-one">
        <div class="f-a m-lr-15">
          <van-icon name="orders-o" size="18px" />
          <div class="m-l-04">全部订单</div>
        </div>
        <div class="f-a m-lr-15">
          <van-icon name="arrow" size="14px" color="rgb(102,102,102)" />
        </div>
      </div>
      <div>
          <van-cell title="单元格" is-link />
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      name: "",
      text: "",
      flag: false,
      show: false
    };
  },
  methods: {
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
            this.$router.push("/login");
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
    let user = JSON.parse(sessionStorage.getItem("user"));
    //   console.log(user.userInfo.nickname);
    if (user !== null) {
      this.flag = true;
      this.name = user.userInfo.nickname;
      this.text = "退出登录";
      //   console.log(this.name);
    } else {
      this.show = true;
      // this.name=""
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