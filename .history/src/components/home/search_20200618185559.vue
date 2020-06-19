<template>
  <div class="top f-a">
    <!-- <div>
      <div>重庆</div>
    </div> -->
    <div class="ipt">
      <form action="/">
        <van-search
          v-model="value"
          label='重庆'
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "Search",
  props: {},
  components: {},
  data() {
    return {
        value: '',
    };
  },
  methods: {
      onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('搜索');
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top{
    height: 45px;
    background: rgb(242,242,242);
    .ipt{
        width: 100%;
    }
}
.van-search{
    background: none;
}
.van-search__content{
    background: white;
}
</style>