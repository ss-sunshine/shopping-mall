<template>
 <div>
     <div class="f-j p-tb-1">
         <div class="num">
           <slot name='num'></slot>
         </div>
         <slot name='title'></slot>
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
}
</style>