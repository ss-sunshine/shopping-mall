<template>
  <div class="m-b-6">
    <div class="f-a-j p-tb-1">
      <div class="num f-color-w f-a-j f14 m-r-05">
        <slot name="num"></slot>
      </div>
      <div class="title f16">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="d-f">
      <div class="f-1">
        <div v-for="(item,index) in floor3" :key="index">
          <img v-if="index===0" :src="item.image" />
          <img v-if="index===floor3.length-1" :src="item.image" />
        </div>
      </div>
      <div class="f-1">
        <div v-for="(item,index) in floor3" :key="index">
          <img v-if="index!==0&&index!==floor3.length-1" :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Two",
  props: {
    floor3: {
      type: Array
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
// .m-b-6{
//   margin-bottom: 60px;
// }
.f-1{
 font-size: 0;
}
.num {
  width: 20px;
  height: 20px;
  background: rgb(224, 50, 43);
  border-radius: 50%;
}
.title {
  color: rgb(224, 50, 43);
}
img {
  width: 100%;
}
</style>