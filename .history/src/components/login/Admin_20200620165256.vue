<template>
 <div>
     <div class="arrow">
         <van-icon name="arrow-left" color="white"/>
     </div>
     <div class="login m-lr-1"></div>
 </div>
</template>

<script>
 export default {
   name: 'Admin',
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
.arrow{
    width: 40px;
    height: 40px;
    background: rgb(120,120,121);
    border-radius: 50%;
}
.login{
    flex: 1;
    height: 490px;
    background: white;
    margin-top: 130px;
}
</style>