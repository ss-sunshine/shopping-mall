<template>
  <div>
    <top>
      <template v-slot:title>个人资料</template>
    </top>
    <!-- <van-nav-bar title="个人资料">
      <template #left>
        <van-icon name="arrow-left" size="18" color="black" @click="onClickLeft" />
      </template>
    </van-nav-bar>-->
    <van-cell-group>
      <van-cell title="头像" is-link :center="true">
        <template #default>
          <img src="../../assets/QQ.jpg" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <!-- 输入任意文本 -->
      <van-field v-model="name" label="用户名" readonly/>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" />
    </van-cell-group>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "Information",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      name: "",
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    };
  },
  methods: {},
  mounted() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    //   console.log(user.userInfo.nickname);
    if (user !== null) {
      this.name = user.userInfo.nickname;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 100px;
}
.van-cell__value {
  display: flex;
  align-items: center;
}
</style>