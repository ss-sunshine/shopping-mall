<template>
  <div>
    <top>
      <template v-slot:title>地址列表</template>
    </top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- <div class="f-j m-t-5 f16 no" v-if="list.length === 0">暂无收货地址</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "Recently",
  props: {},
  components: {
    Top
  },
  data() {
    return {
        RecentlyArr:[]
    };
  },
  methods: {},
  mounted() {
      this.recentlyArr = JSON.parse(localStorage.getItem("Looking"));
      console.log(this.recentlyArr);
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
</style>