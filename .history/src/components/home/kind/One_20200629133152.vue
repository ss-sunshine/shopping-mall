<template>
  <div>
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
        <div v-for="(item,index) in floor1" :key="index">
          <img v-if="index===0" :src="item.image" @click="detail(item)"/>
          <img v-if="index===floor1.length-1" :src="item.image" @click="detail(item)"/>
        </div>
      </div>
      <div class="f-1">
        <div v-for="(item,index) in floor1" :key="index">
          <img v-if="index!==0&&index!==floor1.length-1" :src="item.image" @click="detail(item)"/>
        </div>
      </div>
    </div>
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
  components: {},
  data() {
    return {};
  },
  methods: {
    detail(item) {
      // console.log(item.goodsId);
      this.$router.push({ path: "/detail", query: { id: item.goodsId } });
      // this.$recently(item)
    }
  },
  mounted() {
    // console.log(this.floor1);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
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