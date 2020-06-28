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
         list:[]
     }
   },
   methods: {

   },
   mounted() {
       this.$api.getCollectionList().then(res=>{
        this.list=res.data.list
        console.log(this.list);
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