<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
        <img src="../../assets/evaluate.jpg" alt="" class="image">
    </div>
    <div class="btn">
        <span>待评价</span>
        <span>已评价</span>
    </div>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "EvaluationItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  position: fixed;
  z-index: 99;
  width: 100%;
}
.image{
    width: 100%;
}
.btn{
    width: 100%;
    margin: 0 20px;
}
</style>