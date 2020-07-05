<template>
  <div>
    <top class="top">
      <template v-slot:title>评价详情</template>
    </top>
    <div>
        <div class="f-a m-l-3 p-tb-1">
        <img :src="obj.image_path" alt class="image" />
        <div class="m-l-4">
          <div class="f14 m-b-15">商品评分</div>
          <van-rate v-model="num" :size="25" color="#ee0a24" void-icon="star" void-color="#eee" />
        </div>
      </div>
    </div>
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