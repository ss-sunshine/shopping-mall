<template>
  <div class="a">
    lalala
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
      this.$api.getComment({id,rate,content,anonymous,_id,order_id,image})
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