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
export default {
  name: "SettlementItem",
  props: {},
  components: {},
  data() {
    return {};
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
</style>