<template>
  <div class="ipt">
    <!-- <form action="/"> -->
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
        <template #left>
          <div class="f-a p-lr-15">
            <div class="f13 m-r-05">{{city}}</div>
            <van-icon name="arrow-down" size="14px" />
          </div>
        </template>
      </van-search>
    <!-- </form> -->
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Search",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      city: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    }
  },
  mounted() {
    
    // this.$api
    //   .grtSearch(value)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.ipt {
  width: 100%;
}
.van-search {
  height: 45px;
  background: rgb(242, 242, 242);
  padding: 0;
}
.van-search__content {
  background: white;
  border-radius: 4px;
}
</style>