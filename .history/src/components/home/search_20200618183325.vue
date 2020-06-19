<template>
  <div class="top f-a">
    <div>
      <div>重庆</div>
    </div>
    <div>
        <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
   
  />
</form>
        <!-- <input type="text" :v-model="value" placeholder=""> -->
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