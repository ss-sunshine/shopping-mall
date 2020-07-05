<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
        <div>
            <img :src="obj.image_path" alt="" class="image">
        </div>
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
        obj:{}
    };
  },
  methods: {},
  mounted() {
      this.obj = this.$route.query.item
    //   console.log(this.obj);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.image{
    width: 80px;
}
</style>