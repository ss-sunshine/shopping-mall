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
.van-action-sheet__header{
  font-size: 14px;
}
.addShop[data-v-6923027c]{
  padding: 0;
}
.price {
  color: red;
//   margin-top: 6px;
}
</style>