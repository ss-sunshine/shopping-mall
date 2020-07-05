<template>
  <div>
    <div class="title f-a-j">购物车</div>
    <van-cell-group>
      <van-cell center>
        <template #title>
          <van-checkbox v-model="checked" shape="square" checked-color="rgb(225,54,47">全选</van-checkbox>
        </template>
        <template #default>
          <div class="All">
            <div>合计：</div>
            <div>请确认订单</div>
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template #default>
          <span class="m-r-1">
            <van-button color="rgb(230,5,127)" size="small">删除</van-button>
          </span>
          <van-button color="rgb(230,5,127)" size="small">去结算</van-button>
        </template>
      </van-cell>
    </van-cell-group>
    <div v-for="(item,index) in shopList" :key="item.id">
       <van-checkbox v-model="checked" shape="square" checked-color="rgb(225,54,47)"></van-checkbox>
      <van-card :title="item.name" @click-thumb="detail(item, index)">
        <template #thumb>
          <img :src="item.image_path" />
        </template>
        <template #price>
          <div class="m-t-2">
            <span class="price f14 f-w-7 m-r-1">￥{{item.present_price}}</span>
          </div>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {},
  components: {},
  data() {
    return {
      checked: true,
      value: "",
      shopList: []
    };
  },
  methods: {
    detail(item, index) {
      this.$router.push({ path: "/detail", query: { id: item.cid } });
    }
  },
  mounted() {
    // this.value = this.$route.query.value;
    this.$api
      .getCard()
      .then(res => {
        console.log(res);
        this.shopList = res.shopList;
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
.title {
  height: 40px;
  background: white;
}
.All {
  text-align: left;
  padding-left: 20px;
  color: black;
}
.van-cell__value--alone {
  text-align: right;
}
.van-card__content {
  justify-content: start;
}
.van-card {
  background: white;
  font-size: 14px;
  color: red;
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
</style>