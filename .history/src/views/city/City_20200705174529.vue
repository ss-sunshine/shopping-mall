<template>
  <div>
    <cityItem></cityItem>
    <CityA></CityA>
  </div>
</template>

<script>
import CityA from "../../components/home/city/CityA"
import CityItem from "../../components/home/city/CityItem";
export default {
  name: "City",
  props: {},
  components: {
    CityItem
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