<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" />
    </div>
    <div class="login m-lr-1">
      <div class="login-title">登录 / 注册</div>
      <div>
        <van-form @submit="onSubmit">
          <van-field
            v-model="from.nickname"
            name="用户名"
            placeholder="USERNAME"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="from.password"
            type="password"
            name="密码"
            placeholder="PASSWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  props: {},
  components: {},
  data() {
    return {
      from: {
        nickname: "",
        password: ""
      }
    };
  },
  methods: {
      onSubmit(values) {
      console.log('submit', values);
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.arrow {
  width: 36px;
  height: 36px;
  background: rgb(120, 120, 121);
  border-radius: 50%;
}
.login {
  flex: 1;
  height: 480px;
  background: white;
  margin-top: 90px;
  .login-title {
    font-size: 20px;
    padding: 10px 0 0 15px;
  }
}
</style>