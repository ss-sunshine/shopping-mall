<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
        <img src="../../assets/evaluate.jpg" alt="" class="image">
    </div>
    <div class="f-j">
        <div class="btn f-aj-around">
        <div class="one  p-tb-1">待评价</div>
        <div>已评价</div>
    </div>
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
    font-size: 14px;
    width: 340px;
    position: relative;
    top: -20px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.one{
    width: 76px;
    border-bottom: 4px solid rgb(255,68,68);
}
</style>