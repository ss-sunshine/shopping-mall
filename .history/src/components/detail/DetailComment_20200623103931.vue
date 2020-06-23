<template>
  <div class="a">
    lalala
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
      id:{
          type:Number
      }
  },
  components: {},
  data() {
    return {
        id:'',
        rate:'',
        content:'',
        anonymous:'',

    };
  },
  methods: {},
  mounted() {
      this.$api.getComment({id:this.id,rate,content,anonymous,_id,order_id,image}).then(res=>{
          console.log(res);
      }).catch(err=>{
          console.log(err);
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.a{
    width: 200px;
    height: 200px;
    background: skyblue;
}
</style>