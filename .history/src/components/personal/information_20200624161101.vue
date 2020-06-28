<template>
  <div>
    <van-nav-bar title="个人资料">
      <template #left>
        <van-icon name="arrow-left" size="18" color="black" @click="onClickLeft" />
      </template>
    </van-nav-bar>
    <van-cell-group center="true">
      <van-cell title="单元格" is-link >
        <template #default>
            <img src='../../assets/QQ.jpg' />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>