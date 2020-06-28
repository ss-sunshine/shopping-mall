<template>
  <div>
    <top>
      <template v-slot:title>个人资料</template>
    </top>
    <!-- <van-nav-bar title="个人资料">
      <template #left>
        <van-icon name="arrow-left" size="18" color="black" @click="onClickLeft" />
      </template>
    </van-nav-bar> -->
    <van-cell-group>
      <van-cell title="单元格" is-link :center="true">
        <template #default>
            <img src='../../assets/QQ.jpg' />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Top from "../top/Top"
export default {
  name: "Information",
  props: {},
  components: {
    Top
  },
  data() {
    return {};
  },
  methods: {
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 100px;
}
.van-cell__value{
  display: flex;
  align-items: center;
}
</style>