<template>
  <div>
    <div class="title f-a-j">会员中心</div>
    <div class="ip f-c-a-j p-r">
      <van-icon name="setting" color="rgb(238,238,238)" class="right m-1" size="20px" />
      <van-image round width="80px" height="80px" :src="require('../../assets/QQ.jpg')" />
      <div class="f-color-w f-w-9 f18 m-t-1" v-if="flag===true">欢迎您：{{name}}</div>
      <div @click="login" class="f-color-w m-t-1 f14" :class="{loginA:show===true}">{{text}}</div>
    </div>
    <van-tabbar :fixed="false">
      <div class="m-tb-1">
          <van-tabbar-item icon="home-o">待付款</van-tabbar-item>
      <van-tabbar-item icon="search">待发货</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">待收货</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">评价</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">已完成</van-tabbar-item>
      </div>
    </van-tabbar>
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
      show: false,
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
</style>