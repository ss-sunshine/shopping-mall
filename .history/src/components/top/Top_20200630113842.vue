<template>
  <div>
    <van-nav-bar>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #left>
        <van-icon name="arrow-left" size="18" color="black" @click="onClickLeft" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "Top",
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