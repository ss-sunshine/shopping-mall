<template>
  <div>
    <van-nav-bar>
      <template #title>
        <slot></slot>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>