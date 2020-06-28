<template>
  <div>
    <van-nav-bar title="标题">
      <template #left>
        <van-icon name="arrow-left" size="18" @click="onClickLeft" />
      </template>
    </van-nav-bar>
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
</style>