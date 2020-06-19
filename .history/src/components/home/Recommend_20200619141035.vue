<template>
  <div class="recommend">
    <div class="f16 title m-t-2">商品推荐</div>
    <div class="container" ref="container">
      <div class="content d-f">
        <div v-for="(item,index) in recommend" :key="index">
          <div class="item">
            <img :src="item.image" alt />
            <div class="f14 font">{{item.goodsName}}</div>
            <div class="f-a">
                <div class="f14 m-r-05">￥{{item.mallPrice}}</div>
                <div class="f12 price">￥{{item.price}}</div>
            </div>
            <div class="f-a f-color-w m-t-1">
                <div class="iconfont icon-03f f-1 f-a-j"></div>
                <div class="f14 f-3 lookdetail f-a-j">查看详情</div>
            </div>
          </div>
        </div>
        <!-- <van-grid :column-num="3">
              <van-grid-item class="img" v-for="(item,index) in recommend" :key="index">
                <van-image :src="item.image" alt />
                <div class="f14 font">{{item.goodsName}}</div>
        </van-grid-item>-->
        <!-- <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />-->
        <!-- </van-grid> -->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
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
  mounted() {
    new BScroll(this.$refs.container, {
      scrollX: true,
      click: true
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.recommend{
    background: white;
}
.title {
  background: white;
  padding: 4px 15px;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.font {
  width: 105px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item {
  width: 105px;
  flex: 1;
  padding: 10px;
  border-right: 1px solid rgb(245, 245, 245);
}
img {
  width: 100%;
}
.price{
    color: rgb(153,153,153);
    text-decoration: line-through;
}
.iconfont{
    background: rgb(254,202,58);
    height: 30px;
}
.lookdetail{
    background: rgb(255,76,56);
    height: 30px;
}
</style>