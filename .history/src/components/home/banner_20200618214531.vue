<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img v-lazy="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {},
  components: {},
  data() {
    return {
      banner: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getRecommend()
      .then(res => {
        // console.log(res.data.slides);
        this.banner = res.data.slides;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>