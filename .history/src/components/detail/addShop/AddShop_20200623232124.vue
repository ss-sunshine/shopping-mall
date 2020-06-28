<template>
 <div>
     <van-action-sheet v-model="show" :title="detail.name" :round="false">
        <div class="addShop f14 price">￥{{detail.present_price}}</div>
      </van-action-sheet>
 </div>
</template>

<script>
 export default {
   name: 'AddShop',
   props: {
       detail:{
           type:Object
       },
       show:{
           type:Boolean
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