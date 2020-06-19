<template>
  <div class="img">
    <img :src="ad.PICTURE_ADDRESS" alt="ad" />
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
.img{
    width: 100%;
    padding: 0 10px;
}
img{
    width: 100%;
}
</style>