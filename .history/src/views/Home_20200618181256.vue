<template>
  <div>
    <search></search>
  </div>
</template>

<script>
import Search from "../components/home/Search"
export default {
  name: "Home",
  props: {},
  components: {
    Search
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$api
      .getRecommend()
      .then(res => {
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.a{
  width: 100px;
  height: 100px;
  background: skyblue;
}
</style>