<template>
  <div>
    <div>商品推荐</div>
    <div class="wrapper">
      <ul class="content">
        <div v-for="(item,index) in recommend" :key="index">
          <li>
            <van-grid>
              <van-grid-item>
                <van-image :src="item.image" />
                <div>{{item.goodsName}}</div>
              </van-grid-item>
              <!-- <van-grid-item icon="photo-o" text="文字" />
              <van-grid-item icon="photo-o" text="文字" />-->
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
  mounted() {
      new BScroll('.wrapper', {
  scrollX: true,
  scrollY: false,
  snap: {  // 滑动切换的一些配置
    speed: 800,  // 滑动切换的速度
    easing: {  // 滑动切换的动画效果
      style: 'ease-in'
    },
    threshold: 0.5,  // 滑动切换到超过一半时切换到下一屏
    stepX: 600,  // 横向切换距离为轮播图宽度
  }
});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>