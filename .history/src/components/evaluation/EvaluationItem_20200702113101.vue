<template>
  <div>
    <top>
      <template v-slot:title>评价中心</template>
    </top>
    <div>
        <img src="../../assets/pingjia.jpg" alt="" class="image">
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
.image{
    width: 100%;
}
</style>