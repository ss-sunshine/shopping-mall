<template>
 <div class="classification">
     <div v-for="(item) in classification" :key="item.id">
         <div>
             <div>
                 <img :src="item.image" alt="">
             </div>
             <div>{{item.mallCategoryName}}</div>
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
}
</style>