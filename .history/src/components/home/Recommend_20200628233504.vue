<template>
  <div class="recommend">
    <div class="f16 title m-t-2">商品推荐</div>
    <div class="container" ref="container">
      <div class="content d-f">
        <div v-for="(item,index) in recommend" :key="index">
          <div class="item">
            <div @click="detail(item)">
              <img :src="item.image" alt />
              <div class="f14 font">{{item.goodsName}}</div>
              <div class="f-a">
                <div class="f14 m-r-05">￥{{item.mallPrice}}</div>
                <div class="f12 price">￥{{item.price}}</div>
              </div>
            </div>
            <div class="f-a f-color-w m-t-1">
              <div class="iconfont icon-03f f-1 f-a-j" @click="shopping(item)"></div>
              <div class="f14 lookdetail f-a-j" @click="detail(item)">查看详情</div>
            </div>
          </div>
        </div>
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
  methods: {
    shopping(item){
      this.$api
        .getAddShop({ id: item.goodsId })
        .then(res => {
          // console.log(res);
          // this.$router.push({query:{value:this.value}})
          // console.log(this.value);
          this.$toast.success("添加成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    detail(item) {
      console.log(item);
      this.$router.push({ path: "/detail", query: { id: item.goodsId } });
    }
  },
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
.recommend {
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
  padding: 10px;
  border-right: 1px solid rgb(245, 245, 245);
}
img {
  width: 100%;
}
.price {
  color: rgb(153, 153, 153);
  text-decoration: line-through;
}
.iconfont {
  background: rgb(254, 202, 58);
  height: 30px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.lookdetail {
  background: rgb(255, 76, 56);
  height: 30px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  flex: 2.5;
}
</style>