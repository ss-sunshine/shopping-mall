<template>
  <div>
    <div class="title f-a-j">会员中心</div>
    <div class="ip f-a-j">
      <div class="backgroud">
          <van-image round width="70px" height="70px" :src="require('../../assets/QQ20200624104224.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  height: 40px;
  background: white;
}
.ip {
  height: 220px;
  background: linear-gradient(to bottom, rgb(233, 13, 126), rgb(204, 16, 113));
}
</style>