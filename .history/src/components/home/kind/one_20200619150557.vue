<template>
 <div>
     <div class="f-j p-tb-1">
         <div class="num f-color-w">
           <slot name='num'></slot>
         </div>
         <div class="title f16">
           <slot name='title'></slot>
         </div>
     </div>
     <div>
         
     </div>
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
.num{
  width: 20px;
  height: 20px;
  background: rgb(224,50,43);
  border-radius: 50%;
}
.title{
  color: rgb(224,50,43);
}
</style>