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
            class="ipt"
            v-model="from.nickname"
            name="用户名"
            placeholder="USERNAME"
            height="max"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            class="ipt"
            v-model="from.password"
            type="password"
            name="密码"
            placeholder="PASSWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field type="number" name="手机号" label="手机号码" placeholder="仅注册需要" />
          <van-field center clearable label="短信验证码" placeholder="仅注册需要">
            <template #button>
              <van-button size="small" type="primary" @click="clickTime">发送验证码</van-button>
            </template>
          </van-field>
          <div class="ipt">
            <div class="captcha">验证码</div>
            <van-field
              v-model="from.code"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            ></van-field>
            <div class="m-l-15" v-html="code" @click="getCode"></div>
          </div>
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
.ipt {
  height: 68px;
  display: flex;
  align-items: flex-end;
}
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
  .captcha {
    width: 120px;
    margin-left: 15px;
    margin-bottom: 12px;
  }
}
</style>