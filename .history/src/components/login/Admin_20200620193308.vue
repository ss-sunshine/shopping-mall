<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" />
    </div>
    <div class="login m-lr-1">
      <div class="login-title">登录 / 注册</div>
      <div>
        <van-form @submit="onSubmit" class="m-r-1">
          <van-field
            class="m-t-3"
            v-model="from.nickname"
            name="用户名"
            placeholder="USERNAME"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="from.password"
            class="m-t-3"
            type="password"
            name="密码"
            placeholder="PASSWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field class="m-t-3" type="number" name="手机号" label="手机号码" placeholder="仅注册需要" />
          <van-field center clearable label="短信验证码" placeholder="仅注册需要">
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
          <van-field>
              <div>lkhh</div>
            <van-field
              v-model="from.code"
              label="验证码"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            >
              
            </van-field>
                <div v-html="code" @click="getCode"></div>
              
          </van-field>
          <div class="d-f m-l-15 m-t-3">
            <div class="m-r-1">
              <van-button type="primary" to="/">
                <div class="p-lr-2">登录</div>
              </van-button>
            </div>
            <div>
              <van-button type="danger" to="/">
                <div class="p-lr-2">注册</div>
              </van-button>
            </div>
          </div>
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
        password: "",
        code: ""
      },
      code: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    getCode() {
      this.$api
        .getVerify()
        .then(res => {
          this.code = res;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCode();
  },
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