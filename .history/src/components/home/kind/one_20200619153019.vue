<template>
  <div>
    <kindtitle></kindtitle>
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    floor1: {
      type: Array
    }
  },
  components: {
    Kindtitle
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
.num {
  width: 20px;
  height: 20px;
  background: rgb(224, 50, 43);
  border-radius: 50%;
}
.title {
  color: rgb(224, 50, 43);
}
</style>