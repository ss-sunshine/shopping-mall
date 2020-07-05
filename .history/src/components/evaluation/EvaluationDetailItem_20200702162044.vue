<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
      <div class="f-a m-l-3 p-tb-1">
        <img :src="obj.image_path" alt class="image" />
        <div class="m-l-4">
          <div>商品评分</div>
          <van-rate v-model="value" :size="25" color="#ee0a24" void-icon="star" void-color="#eee" />
        </div>
      </div>
      <van-cell-group>
         <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "EvaluationDetailItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      obj: {},
      value: 5
    };
  },
  methods: {},
  mounted() {
    this.obj = this.$route.query.item;
    //   console.log(this.obj);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.image {
  width: 80px;
}
</style>