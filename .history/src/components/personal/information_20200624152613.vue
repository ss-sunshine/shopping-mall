<template>
 <div>
<van-nav-bar
  title="标题"
  left-arrow
  @click-left="onClickLeft"
/>
 </div>
</template>

<script>
 export default {
   name: 'Information',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     onClickLeft(){
       this.$router.go(-1)
     }
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