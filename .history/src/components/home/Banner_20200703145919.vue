<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="rgb(255,136,85)" stop-propagation="false">
      <van-swipe-item v-for="(item) in banner" :key="item.id">
        <img :src="item.image" @click="detail(item)"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banner:{
      type:Array
    }
  },
  components: {},
  data() {
    return {
      
    };
  },
  methods: {
    detail(item){
      // console.log(item.goodsId);
      this.$router.push({path:"/detail",query:{id:item.goodsId}})
      // this.$recently(item)
    }
  },
  mounted() {
   
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