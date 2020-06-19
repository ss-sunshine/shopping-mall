<template>
  <div class="top f-a">
    <div>
      <div>重庆</div>
    </div>
    <div>
        <van-icon name="search" />
      <input class="ipt" type="text" :v-model="value" placeholder="请输入搜索关键词">
    </div>
  </div>
</template>

<script>
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
        height: 30px;
        outline: none;
        border-radius: 6px;
        border: none;
    }
}
</style>