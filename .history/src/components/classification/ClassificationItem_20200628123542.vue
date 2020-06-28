<template>
  <div>
    <div class="title f-a-j">商品分类</div>
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item>
            <template #title>
                <div v-for="(item) in classification" :key="item.id">
                    <div>{{item.mallCategoryName}}</div>
                </div>
            </template>
        </van-sidebar-item>
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
}
</style>