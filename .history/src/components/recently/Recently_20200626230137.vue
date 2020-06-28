<template>
  <div>
    <top>
      <template v-slot:title>地址列表</template>
    </top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <van-cell-group v-for="(item,index) in list" :key="item.id">
          <van-card :title="item.name" @click-thumb="detail(item, index)">
            <template #thumb>
              <img :src="item.image_path" />
            </template>
            <template #price>
              <div class="price f14 f-w-7">￥{{item.present_price}}</div>
            </template>
            <template #num>
              <van-icon name="close" size="14" @click="del(item,index)" />
            </template>
          </van-card>
        </van-cell-group>
        <!-- <div class="f-j m-t-5 f16 no" v-if="list.length === 0">暂无收货地址</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../top/Top";
export default {
  name: "Recently",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      RecentlyArr: [],
      id: "",
      detail: {},
      list:[]
    };
  },
  methods: {},
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.recentlyArr = JSON.parse(localStorage.getItem("Looking"));
    console.log(this.recentlyArr);
    this.recentlyArr.map(item => {
      return (this.id = item);
    });
    console.log(this.id);

    this.$api
      .getGoods(this.id)
      .then(res => {
        // console.log(res.goods.goodsOne);
        this.detail = res.goods.goodsOne;
        this.list.push(this.detail)
        console.log(this.list);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 46px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
.van-card {
  background: white;
  font-size: 14px;
}
.van-card__thumb img {
  border-radius: 0;
}
img {
  border: 1px solid rgb(230, 230, 230);
  width: 80px;
  height: 80px;
}
.price {
  color: rgb(255, 0, 0);
}
.no {
  color: rgb(200, 200, 200);
  letter-spacing: 3px;
}
</style>