<template>
  <div>
    <div class="title f-a-j">商品分类</div>
    <div>
      <van-sidebar v-model="activeKey">
        <div v-for="(item,index) in classification" :key="item.id">
          <van-sidebar-item :title="item.mallCategoryName"></van-sidebar-item>
        </div>
      </van-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassificationItem",
  props: {},
  components: {},
  data() {
    return {
      activeKey: 0,
      classification: [],
      num: ""
    };
  },
  methods: {},
  mounted() {
    this.classification = JSON.parse(localStorage.getItem("classification"));
    this.num = this.$route.query.index;
    console.log(this.classification);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  height: 40px;
  background: white;
  border-bottom: 1px solid rgb(246, 246, 246);
}
</style>