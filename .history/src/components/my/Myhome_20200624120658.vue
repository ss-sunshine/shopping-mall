<template>
  <div>
    <div class="title f-a-j">会员中心</div>
    <div class="ip f-c-a-j">
      <van-image
        round
        width="70px"
        height="70px"
        :src="require('../../assets/QQ20200624104224.jpg')"
      />
      <div class="f-color-w f-w-9 f18" v-if="flag===true">欢迎您：{{name}}</div>
      <div @click="login" class="f-color-w m-t-1 f14" :class="{loginA:show===true}">{{text}}</div>
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
      flag:false,
      show:false
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
        this.flag=true
      this.name = user.userInfo.nickname;
      this.text = "退出登录";
      //   console.log(this.name);
    }else{
        this.show=true
        // this.name=""
        this.text = "登录";
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
.loginA{
    font-size: 18px;
    font-weight: 900;
}
</style>