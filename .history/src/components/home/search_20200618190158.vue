<template>
  <div class="top f-a">
    <div>
      <div>重庆</div>
      <van-icon name="arrow-down" />
    </div>
    <div class="ipt">
      <form action="/">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </form>
    </div>
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
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  height: 45px;
  background: rgb(242, 242, 242);
  .ipt {
    width: 100%;
  }
}
.van-search {
  background: none;
}
.van-search__content {
  background: white;
}
</style>