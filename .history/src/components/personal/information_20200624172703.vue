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
          <img src="avatar" alt="">
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <!-- 输入任意文本 -->
      <van-field v-model="username" label="用户名" readonly/>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="name" label="昵称" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="gender" label="性别" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="email" type="number" label="邮箱" />
      <!-- 输入密码 -->
      <van-field v-model="date" label="出生年月" />
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
      avatar:'',
      username:'',
      name: "",
      gender: '',
      email: '',
      date:''
    };
  },
  methods: {},
  mounted() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    //   console.log(user.userInfo.nickname);
    if (user !== null) {
      this.username = user.userInfo.username;
      this.name = user.userInfo.nickname;
      this.gender = user.userInfo.gender;
      this.avatar = user.userInfo.avatar;
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