<template>
  <div>
    <top class="top">
      <template v-slot:title>评价详情</template>
    </top>
    <div>
      <div class="f-a m-l-2 p-tb-1">
        <div>
          <img src="../../assets/QQ.jpg" class="image" />
          <div class="m-l-2">
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
        <div>评价内容：{{obj.content}}</div>
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
      obj: {}
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
.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>