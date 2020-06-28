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
      <van-field label="昵称" v-model="username" readonly />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="name" label="昵称" placeholder="请输入用户名" />
      <van-field v-model="gender" label="性别" placeholder="请输入用户名" />
      <van-field v-model="email" type="number" label="邮箱" placeholder="请输入邮箱" />
      <van-field @focus="focusDate" v-model="date" label="出生年月" placeholder="请输入出生年月" />
    </van-cell-group>
    <van-popup v-model="show" position="bottom" round>
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="yes"
        @cancel="no"
      />
    </van-popup>
    <div class="f-j m-t-5">
      <div class="btn">
        <div class="m-b-1">
          <van-button type="primary" size="large" @click="save">保存</van-button>
        </div>
        <div>
          <van-button type="default" size="large">取消</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import Top from "../top/Top";
export default {
  name: "Information",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      username: "",
      name: "",
      gender: "",
      email: "",
      password: "",
      date: "",
      minDate: new Date(1, 1, 1),
      maxDate: new Date(10000, 12, 31),
      currentDate: new Date(),
      show: false,
      year: "",
      month: "",
      day: "",
      id: ""
    };
  },
  methods: {
    focusDate() {
      this.show = true;
    },
    no() {
      this.show = false;
    },
    yes() {
      this.show = false;
      // this.date = dayjs(this.currentDate).format("YYYY年MM月DD日");
      this.year = this.currentDate.getFullYear();
      // console.log(this.year);
      this.month = this.currentDate.getMonth() + 1;
      // console.log(this.month);
      this.day = this.currentDate.getDate();
      // console.log(this.day);
      this.date = this.year + "年" + this.month + "月" + this.day + "日";
    },
    save() {
      this.$api
        .getSaveUser({
          gender,
          nickname,
          year,
          month,
          day,
          id
          })
        .then(res => {
          // console.log(res);
          this.$toast(res.msg);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$api
      .getQueryUser()
      .then(res => {
        // console.log(res);
        this.username = res.userInfo.username;
        this.name = res.userInfo.nickname;
        this.gender = res.userInfo.gender;
        this.year = res.userInfo.year;
        this.month = res.userInfo.month;
        this.day = res.userInfo.day;
        this.date = this.year + "年" + this.month + "月" + this.day + "日";
      })
      .catch(err => {
        console.log(err);
      });
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
.btn {
  width: 300px;
}
</style>