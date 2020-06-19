<template>
  <div>
    <div>商品推荐</div>
    <div class="wrapper">
      <ul class="content">
        <li>
          <div class="d-f img">
              <van-grid>
                <van-grid-item
                class="img"
                  v-for="(item,index) in recommend"
                  :key="index"
                >
                <div class="imgItem">
                    <van-image :src="item.image" alt=""/>
                  <div class="f14 font">{{item.goodsName}}</div>
                </div>
                </van-grid-item>
                
                <!-- <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />-->
              </van-grid>
          </div>
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
.img{
    white-space: nowrap;
    overflow: hidden;
}
.font{
    width: 108px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
van-grid-item{
    width: 125px;
}
// .img {
//   overflow: hidden;
//   display: flex;
// }
</style>