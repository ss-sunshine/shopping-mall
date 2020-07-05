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
          <van-button color="rgb(230,5,127)">删除</van-button>
          <van-button color="rgb(230,5,127)">去结算</van-button>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {},
  components: {},
  data() {
    return {
      checked: true
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  height: 40px;
  background: white;
}
.All{
    text-align: left;
    padding-left: 20px;
    color: black;
}
</style>