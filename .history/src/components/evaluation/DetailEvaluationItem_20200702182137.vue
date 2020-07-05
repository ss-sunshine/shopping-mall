<template>
  <div>
    <top class="top">
      <template v-slot:title>评价详情</template>
    </top>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "DetailEvaluationItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
        obj:{}
    };
  },
  methods: {},
  mounted() {
      this.obj = this.$route.query.item1
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>