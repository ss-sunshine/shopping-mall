<template>
  <div>
    <top>
      <template v-slot:title>评价中心</template>
    </top>
    <div>
        <img src="../../assets/evaluate.jpg" alt="" class="image">
    </div>
    <div>
        <div>待评价</div>
        <div>已评价</div>
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
</style>