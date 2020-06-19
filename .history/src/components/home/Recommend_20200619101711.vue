<template>
  <div>
    <div>商品推荐</div>
    <div class="wrapper">
      <ul class="content">
        <div v-for="(item,index) in recommend.splice(0,3)" :key="index">
          <li>
            <van-grid>
              <van-grid-item icon="photo-o" text="文字" />
              <van-grid-item icon="photo-o" text="文字" />
              <van-grid-item icon="photo-o" text="文字" />
              <van-grid-item icon="photo-o" text="文字" />
            </van-grid>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array
    }
  },
  components: {},
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
</style>