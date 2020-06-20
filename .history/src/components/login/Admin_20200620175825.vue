<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" />
    </div>
    <div class="login m-lr-1">
      <div class="login-title">登录 / 注册</div>
      <div>
        <van-cell-group>
          <van-field v-model="nickname" border error placeholder="USERNAME" />
          <van-field
            v-model="password"
            placeholder="PASSWORD"
            error
            type="password"
          />
        </van-cell-group>
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
    return {};
  },
  methods: {},
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