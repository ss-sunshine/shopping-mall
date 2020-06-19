<template>
  <div>
    <div class="f-a-j p-tb-1">
      <div class="title f16">
        <slot name="title"></slot>
      </div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in hotGoods" :key="item.id">
        <van-image :src="item.image"/>
        <div>{{item.name}}</div>
        <div>
          <div>{{item.mallPrice}}</div>
          <div>{{item.price}}</div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    hotGoods: {
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
.f-1 {
  font-size: 0;
}
.num {
  width: 20px;
  height: 20px;
  background: rgb(224, 50, 43);
  border-radius: 50%;
}
.title {
  color: rgb(224, 50, 43);
}
img {
  width: 100%;
}
</style>