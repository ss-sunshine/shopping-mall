<template>
  <div>
    <div class="arrow f-a-j m-1">
      <van-icon name="arrow-left" color="white" @click="back" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItem",
  props: {},
  components: {},
  data() {
    return {
        goodsId:''
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
      this.id = this.$route.query.id;
      console.log(this.$route.query.goodsId);
      this.$api. getGoods().then(res=>{
          console.log(res);
      }).catch(err=>{
          console.log(err);
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.arrow {
  width: 36px;
  height: 36px;
  background: rgb(120, 120, 121);
  border-radius: 50%;
}
</style>