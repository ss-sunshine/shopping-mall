<template>
 <div class="classification f-aj-around">
     <div v-for="(item) in classification" :key="item.id">
         <div class="f-c-a">
            <img :src="item.image" alt="">
             <div class="f14">{{item.mallCategoryName}}</div>
         </div>
     </div>
 </div>
</template>

<script>
 export default {
   name: 'Classification',
   props: {
       classification:{
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
.classification{
    margin: 15px 10px;
    border-radius: 10px;
    background: white;
    padding-top: 15px;
    img{
        width: 50px;
        height: 50px;
    }
}
</style>