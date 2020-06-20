<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" @click="back"/>
    </div>
    <div class="login m-lr-1">
      <div class="login-title">登录 / 注册</div>
      <div class="m-r-1">
        <van-form>
          <van-field
            class="ipt"
            v-model="nickname"
            placeholder="USERNAME"
            height="max"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            class="ipt"
            v-model="password"
            type="password"
            placeholder="PASSWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field type="number" v-model="phone" name="手机号" label="手机号码" placeholder="仅注册需要" />
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="仅注册需要">
            <template #button>
              <van-button
                size="small"
                type="primary"
                @click="clickTime"
                :disabled="disabled"
              >{{text}}</van-button>
            </template>
          </van-field>
          <div class="ipt">
            <div class="captcha">验证码</div>
            <van-field
              v-model="verify"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            ></van-field>
            <div class="m-l-15" v-html="code" @click="getCode"></div>
          </div>
          <div class="d-f m-l-15 m-t-3">
            <div class="m-r-1">
              <van-button type="primary" @click="login">
                <div class="p-lr-2">登录</div>
              </van-button>
            </div>
            <div>
              <van-button type="danger" @click="registered">
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
      nickname: "",
      password: "",
      verify: "",
      phone: "",
      sms: "",
      code: "",
      text: "发送验证码",
      disabled: false
    };
  },
  methods: {
      back(){
          this.$router.go(-1)
      },
    clickTime() {
      let time = 60;
      this.disabled = true;
      let timer = setInterval(() => {
        time--;
        this.text = `${time}s后重新发送`;
        if (time === 0) {
          this.disabled = false;
          this.text = "重新发送";
          clearInterval(timer);
        }
      }, 1000);
    },
    registered() {
      this.$api
        .getRegister(this.nickname, this.password, this.verify)
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$toast("注册成功");
            sessionStorage.setItem('user',JSON.stringify(res))
            let timer = setTimeout(() => {
              this.nickname = "";
              this.password = "";
              this.verify = "";
              this.$router.go(-1);
              clearTimeout(timer);
            }, 800);
          } else {
            this.$toast(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    login() {},
    getCode() {
      this.$api
        .getVerify()
        .then(res => {
          this.code = res;
          //   console.log(res);
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