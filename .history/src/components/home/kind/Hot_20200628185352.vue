<template>
  <div>
    <div class="f-a-j p-tb-1">
      <div class="title f16">
        <slot name="title"></slot>
      </div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in hotGoods" :key="item.id">
        <div @click="detail(item)">
          <van-image :src="item.image"/>
        <div class="f14 name">{{item.name}}</div>
        <div class="f-a-j">
          <div class="f16 mallPrice m-r-05">￥{{item.mallPrice}}</div>
          <div class="f14 price">￥{{item.price}}</div>
        </div>
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
  methods: {
    detail(item) {
      console.log(item.goodsId);
      this.$router.push({ path: "/detail", query: { id: item.goodsId } });
    }
  },
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
.title , .name ,.mallPrice{
  color: rgb(224, 50, 43);
}
img {
  width: 100%;
}
.name{
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mallPrice{
  font-weight: 600;
}
.price{
    color: rgb(153,153,153);
    text-decoration: line-through;
}
</style>