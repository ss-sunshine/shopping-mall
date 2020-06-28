<template>
  <div>
    <top>
      <template v-slot:title>地址列表</template>
    </top>
  </div>
</template>

<script>
import Top from "../top/Top"
export default {
  name: "AddressItem",
  props: {},
  components: {
    Top
  },
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