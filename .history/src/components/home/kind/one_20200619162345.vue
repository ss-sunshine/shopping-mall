<template>
  <div>
    <div class="f-a-j p-tb-1">
      <div class="num f-color-w f-a-j f14 m-r-05">
        <slot name="num"></slot>
      </div>
      <div class="title f16">
        <slot name="title"></slot>
      </div>
    </div>
      <van-grid :column-num="2">
        <van-grid-item v-for="(item,index) in floor1.splice(0,1)" :key="index">
          <van-image :src="item.image"></van-image>
        </van-grid-item>
      </van-grid>
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    floor1: {
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
.num {
  width: 20px;
  height: 20px;
  background: rgb(224, 50, 43);
  border-radius: 50%;
}
.title {
  color: rgb(224, 50, 43);
}
</style>