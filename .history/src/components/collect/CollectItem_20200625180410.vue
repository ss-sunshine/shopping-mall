<template>
 <div>
     <top>
      <template v-slot:title>我的收藏</template>
    </top>
 </div>
</template>

<script>
import Top from "../top/Top"
 export default {
   name: 'CollectItem',
   props: {
   },
   components: {
       Top
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
       this.$api.getCollectionList().then(res=>{
           console.log(res);
       }).catch(err=>{
           console.log(err);
       })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>