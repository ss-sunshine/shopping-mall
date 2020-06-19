<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'Banner',
   props: {
   },
   components: {

   },
   data () {
     return {
        banner:[]
     }
   },
   methods: {

   },
   mounted() {
        this.$api
      .getRecommend()
      .then(res => {
        // console.log(res.data.slides);
        this.banner = res.data.slides
      })
      .catch(err => {
        console.log(err);
      });
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>