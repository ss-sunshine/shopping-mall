<template>
  <div class="top f-a">
    <div>
      <div>重庆</div>
    </div>
    <div class="f-a">
        <van-icon name="search" />
        <input type="text" :v-model="value" placeholder="请输入搜索关键字">
    </div>
  </div>
</template>

<script>
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