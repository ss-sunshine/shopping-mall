<template>
  <div>
    <div class="f16 title m-t-2">商品推荐</div>
    <div class="wrapper">
      <ul class="content">
        <li>
          <div v-for="(item,index) in recommend" :key="index">
              <img :src="item.image" alt />
              <div class="f14 font">{{item.goodsName}}</div>
          </div>
          <!-- <van-grid :column-num="3">
              <van-grid-item class="img" v-for="(item,index) in recommend" :key="index">
                <van-image :src="item.image" alt />
                <div class="f14 font">{{item.goodsName}}</div>
          </van-grid-item>-->
          <!-- <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />-->
          <!-- </van-grid> -->
        </li>
      </ul>
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
    new BScroll(".wrapper", {
      scrollX: true,
      scrollY: false,
      snap: {
        // 滑动切换的一些配置
        speed: 800, // 滑动切换的速度
        easing: {
          // 滑动切换的动画效果
          style: "ease-in"
        },
        threshold: 0.5, // 滑动切换到超过一半时切换到下一屏
        stepX: 600 // 横向切换距离为轮播图宽度
      }
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  background: white;
  padding: 4px 15px;
}
.wrapper {
  width: 100%;
  //   height: 320px;
  overflow: hidden;
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.content li {
  float: left;
  width: 100%;
  list-style: none;
}
.content li van-grid {
  display: block;
  width: 100%;
}
.font {
  width: 108px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
img{
    width: 125px;
}
</style>