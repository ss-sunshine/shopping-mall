<template>
  <div>
    <top>
      <template v-slot:title>我的收藏</template>
    </top>
    <div class="wrapper" ref="wrapper">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../top/Top";
export default {
  name: "SettlementItem",
  props: {},
  components: {
      Top
  },
  data() {
    return {
        list:[]
    };
  },
  methods: {},
  mounted() {
      new BScroll(this.$refs.wrapper, {
      click: true
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 46px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
</style>