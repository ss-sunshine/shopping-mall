<template>
  <div class="f-aj-around nav">
    <div v-for="(item,index) in nav" :key="item.id">
      <div class="f-c-a color" @click="clickItem(item,index)" :class="{red:title===item.page}">
        <i class="iconfont" :class="item.icon"></i>
        <div class="f12">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "NavButtom",
  props: {},
  components: {},
  data() {
    return {
      nav: [
        {
          icon: "icon-jurassic_home",
          title: "商城",
          page: "/"
        },
        {
          icon: "icon-gengduo",
          title: "分类",
          page: "/classification"
        },
        {
          icon: "icon-03f",
          title: "购物车",
          page: "/shopping"
        },
        {
          icon: "icon-wode",
          title: "我的",
          page: "/my"
        }
      ],
      title: ""
    };
  },
  methods: {
    clickItem(item,index) {
      this.title = item.page;
      // this.$router.push(item.page);
      if(index===2){
        let user = sessionStorage.getItem("user");
      // console.log(user);
      if (user !== null) {
        this.$router.push('/shopping');
      } else {
        Dialog.confirm({
          title: "请登录",
          message: "当前状态未登录，是否立即登录？"
        })
          .then(res => {
            this.$router.push("/login");
          })
          .catch(err => {
            console.log(err);
          });
      }
      }else{
        this.title = item.page;
      }
    }
  },
  mounted() {
    this.title = this.$route.path; //默认选中当前路由
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  width: 100%;
  height: 50px;
  background: white;
  position: fixed;
  bottom: 0;
  .color {
    color: rgb(102, 102, 102);
  }
  .red {
    color: rgb(225, 54, 47);
  }
  .iconfont {
    font-size: 22px !important;
  }
}
</style>