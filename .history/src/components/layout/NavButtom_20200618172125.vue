<template>
  <div class="f-aj-around nav">
    <div v-for="item in nav" :key="item.id">
      <div class="f-c-a color">
          <i class="iconfont" :class="item.icon"></i>
          <div class="f12">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavButtom",
  props: {},
  components: {},
  data() {
    return {
      nav: [
        {
          icon: "icon-jurassic_home",
          title: "商城"
        },
        {
          icon: "icon-gengduo",
          title: "分类"
        },
        {
          icon: "icon-03f",
          title: "购物车"
        },
        {
          icon: "icon-wode",
          title: "我的"
        }
      ],
      title: ""
    };
  },
  methods: {},
  mounted() {},
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
  .color{
      color: rgb(102,102,102);
  }
  .iconfont{
      font-size: 24px !important;
  }
}
</style>