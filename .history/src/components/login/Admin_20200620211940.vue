<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" />
    </div>
    <div class="login m-lr-1">
      <div class="login-title">登录 / 注册</div>
      <div>
        <van-form :model="form" :rules="rules" class="m-r-1">
          <van-field
            class="ipt"
            v-model="from.nickname"
            name="用户名"
            placeholder="USERNAME"
            height="max"
          />
          <van-field
            class="ipt"
            v-model="from.password"
            type="password"
            name="密码"
            placeholder="PASSWORD"
          />
          <van-field type="number" name="手机号" label="手机号码" placeholder="仅注册需要" />
          <van-field center clearable label="短信验证码" placeholder="仅注册需要">
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
              v-model="from.code"
              placeholder="请输入验证码"
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
      rules: {
        //表单属性prop的值
        //每一个验证都是数组
        //数组里面放验证规则，验证规则又是一个对象
        //required:是否必填  message：错误提示  trigger：触发方式（通常都是blur，失去焦点之后做验证）
        //最小和最大输入长度  min和 max
        username: [
          {
            required: true,
            message: "用户名不能为空"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间"
          }
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空"
          },
        ]
      },
      code: "",
      text: "发送验证码",
      disabled: false
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
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