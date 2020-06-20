<template>
 <div>
     <div class="arrow f-a-j m-1">
         <van-icon name="arrow-left" color="white"/>
     </div>
     <div class="login m-lr-1">
         <div class="f20">登录 / 注册</div>
     </div>
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
    width: 36px;
    height: 36px;
    background: rgb(120,120,121);
    border-radius: 50%;
}
.login{
    flex: 1;
    height: 480px;
    background: white;
    margin-top: 90px;
}
</style>