<template>
  <div>
    <div class="title f-a-j">会员中心</div>
    <div class="ip f-c-a-j">
          <van-image round width="70px" height="70px" :src="require('../../assets/QQ20200624104224.jpg')" />
          <div class="f-color-w f-w-9 f18">欢迎您：{{name}}</div>
          <div>{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        name:'',
        text:''
    };
  },
  methods: {},
  mounted() {
      let user=JSON.parse(sessionStorage.getItem('user'))
    //   console.log(user.userInfo.nickname);
      this.name=user.userInfo.nickname
      if(user!==null){
          this.text="退出登录"
      }else{
          this.text="请登录"
      }
    //   console.log(this.name);
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
</style>