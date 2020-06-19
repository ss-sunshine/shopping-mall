<template>
 <div>
     <router-view></router-view>
     <navButtom></navButtom>
 </div>
</template>

<script>
import NavButtom from '../../components/layout/NavButtom'
 export default {
   name: 'Layout',
   props: {
   },
   components: {
       NavButtom
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

</style>