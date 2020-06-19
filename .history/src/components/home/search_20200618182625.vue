<template>
  <div class="top f-a">
    <div>
      <div>重庆</div>
    </div>
    <div>
      <form action="/">
        <van-search
          v-model="value"
          error
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        >
        <template #action>
    <div @click="onSearch">搜索</div>
  </template>
  </van-search>
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
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
}
</style>