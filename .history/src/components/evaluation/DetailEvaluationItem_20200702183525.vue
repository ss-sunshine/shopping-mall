<template>
  <div>
    <top class="top">
      <template v-slot:title>评价详情</template>
    </top>
    <div>
      <div class="f-a m-l-3 p-tb-1">
        <van-image round width="40px" height="40px" src="../../assets/QQ.jpg" />
        <div class="m-l-4">
          <div class="f14 m-b-15">商品评分</div>
          <van-rate
            v-model="obj.rate"
            :size="25"
            color="#ee0a24"
            void-icon="star"
            void-color="#eee"
          />
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
      obj: {},
      userInfo: {}
    };
  },
  methods: {},
  mounted() {
    this.obj = this.$route.query.item;
    this.obj = JSON.parse(localStorage.getItem("detailEvaluation"));
    console.log(this.obj);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>