<template>
  <div>
    <div class="f16 title m-t-2">商品推荐</div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
         <div class="d-f">
              <div v-for="(item,index) in recommend" :key="index">
             <div class="item">
                  <img :src="item.image" alt />
              <div class="f14 font">{{item.goodsName}}</div>
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
    new BScroll(this.$refs.wrapper,{
      scrollX:true,
      click:true
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
  border-bottom: 1px solid rgb(245,245,245);
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
  width: 110px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item{
    width: 110px;
    flex: 1;
    background: white;
    padding: 10px;
    border-right: 1px solid rgb(245,245,245);
}
img{
    width: 100%;
}
</style>