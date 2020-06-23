<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="rgb(255,136,85)">
      <van-swipe-item v-for="(item) in banner" :key="item.id">
        <img :src="item.image" @click="detail"/>
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
  methods: {},
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