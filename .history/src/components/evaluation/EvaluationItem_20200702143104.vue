<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
      <img src="../../assets/evaluate.jpg" alt class="image" />
    </div>
    <div class="f-j btn1">
      <div class="btn">
        <van-tabs v-model="activeName">
          <van-tab title="待评价" name="a"></van-tab>
          <van-tab title="已评价" name="b"></van-tab>
        </van-tabs>
        <!-- <div class="one p-tb-1 f-j" @click="clickItem" :class="{border:flag===false}">待评价</div>
        <div class="one p-tb-1 f-j" @click="clickItem1" :class="{border:flag===true}">已评价</div>-->
      </div>
    </div>
    <div>
      <div v-for="(item,index) in list" :key="item.id">
        <van-card :title="item.name" @click-thumb="detail(item, index)">
          <template #thumb>
            <img :src="item.image_path" class="image1" />
          </template>
          <template #price>
            <span class="price f14">￥{{item.present_price}}</span>
          </template>
          <template #num>
              <div>123456</div>
          </template>
        </van-card>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "EvaluationItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      flag: false,
      activeName: "a",
      list:[]
    };
  },
  methods: {
    clickItem() {
      this.flag = false;
    },
    clickItem1() {
      this.flag = true;
    }
  },
  mounted() {
    //   console.log(this.activeName);
    this.$api
      .getTobeEvaluated()
      .then(res => {
        // console.log(res.data);
        this.list = res.data;
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
.top {
  position: fixed;
  z-index: 99;
  width: 100%;
}
.image {
  width: 100%;
}
.btn1 {
  position: relative;
  top: -20px;
}
.btn {
  font-size: 14px;
  width: 340px;
  background: white;
  //   border-radius: 4px;
  //   color: rgb(150, 150, 150);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.van-card {
  background: white;
  font-size: 14px;
}
</style>