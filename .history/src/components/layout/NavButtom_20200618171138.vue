<template>
  <div class="f-a">
    <div v-for="item in nav" :key="item.id">
      <div class="nav f-1">
        <div>
          <i class="iconfont" :class="item.icon"></i>
          <div>{{item.title}}</div>
        </div>
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
  height: 50px;
  background: white;
}
</style>