<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: '',
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
        console.log(res.data.slides);
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