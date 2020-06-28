<template>
 <div>
     <div class="title f-a-j">分类</div>
 </div>
</template>

<script>
 export default {
     inject: ["reload"],
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
this.reload()
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