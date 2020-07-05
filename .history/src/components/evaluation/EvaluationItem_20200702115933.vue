<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
      <img src="../../assets/evaluate.jpg" alt class="image" />
    </div>
    <!-- <div class="f-j"> -->
      <div class="btn">
        <van-tabs v-model="activeName">
          <van-tab title="待评价" name="a"></van-tab>
          <van-tab title="已评价" name="b"></van-tab>
        </van-tabs>
        <!-- <div class="one p-tb-1 f-j" @click="clickItem" :class="{border:flag===false}">待评价</div>
        <div class="one p-tb-1 f-j" @click="clickItem1" :class="{border:flag===true}">已评价</div> -->
      </div>
    <!-- </div> -->
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
      activeName:'a'
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
  mounted() {},
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
.btn {
  font-size: 14px;
  width: 340px;
  position: relative;
  top: -20px;
  background: white;
  border-radius: 4px;
  color: rgb(150, 150, 150);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.one {
  width: 80px;
}
.border {
  border-bottom: 3px solid rgb(255, 68, 68);
  color: black;
}
</style>