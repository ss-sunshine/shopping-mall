<template>
 <div>
     <div>商品推荐</div>
     <div class="wrapper">
    <ul class="content">
        <li><img src="./images/img1.jpg" alt=""></li>
        <li><img src="./images/img2.jpg" alt=""></li>
        <li><img src="./images/img3.jpg" alt=""></li>
    </ul>
</div>
 </div>
</template>

<script>
 export default {
   name: 'Recommend',
   props: {
       recommend:{
        type:Array
       }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>