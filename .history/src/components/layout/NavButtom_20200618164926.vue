<template>
  <div>
    <div v-for="item in nav" :key="item.id">
      <div class="nav"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
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
      ]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>