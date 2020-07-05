<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="rgb(255,136,85)">
      <van-swipe-item v-for="(item) in banner" :key="item.id" @click="detail(item)">
        <img :src="item.image"/>
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