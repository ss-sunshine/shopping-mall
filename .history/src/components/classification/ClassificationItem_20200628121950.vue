<template>
 <div>
     <div class="title f-a-j">商品分类</div>
     <div>
         <van-sidebar v-model="activeKey">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
</van-sidebar>
     </div>
 </div>
</template>

<script>
 export default {
   name: 'ClassificationItem',
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
.title {
  height: 40px;
  background: white;
}
</style>