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
        id:'',
        detail:{}
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
      this.id = this.$route.query.id;
    //   console.log(this.$route.query.id);
      this.$api. getGoods(this.id).then(res=>{
          console.log(res.goods.goodsOne);
          this.detail=res.goods.goodsOne
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