<template>
  <div>
    <img :src="ad.PICTURE_ADDRESS" alt />
  </div>
</template>

<script>
export default {
  name: "Ad",
  props: {
    ad: {
      type: Object
    }
  },
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