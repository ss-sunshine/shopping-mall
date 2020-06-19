<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="rgb(255,136,85)">
      <van-swipe-item v-for="(item) in banner" :key="item.id">
        <img :src="item.image" />
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
img{
    width: 100%;
}
</style>