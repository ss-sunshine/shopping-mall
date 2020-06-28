<template>
  <div>
    <div class="title f-a-j">商品分类</div>
    <div class="d-f">
        <div class="left">
      <van-sidebar v-model="activeKey">
        <div v-for="(item,index) in classification" :key="index">
          <van-sidebar-item :title="item.mallCategoryName"></van-sidebar-item>
        </div>
      </van-sidebar>
    </div>
    <div>
        <van-tabs v-model="active">
          <van-tab v-for="index in 8" :title="'标签 ' + index">内容 {{ index }}</van-tab>
        </van-tabs>
    </div>
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
        active: 0,
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
.left {
  height: 100vh;
  background: rgb(247, 248, 250);
}
</style>