<template>
 <div class="classification f-aj-around">
     <div v-for="(item,index) in classification" :key="item.id">
         <div class="f-c-a" @click="goClassification(index)">
            <img :src="item.image" alt="">
             <div class="f14 title">{{item.mallCategoryName}}</div>
         </div>
     </div>
 </div>
</template>

<script>
 export default {
     inject: ["reload"],
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
       goClassification(index){
           this.$router.push({path:'/classification',query:{index:index}})
           this.reload()
       }
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
    margin: 12px 10px;
    border-radius: 10px;
    background: white;
    padding-top: 15px;
    img{
        width: 50px;
        height: 50px;
    }
    .title{
        padding: 5px 0;
    }
}
</style>