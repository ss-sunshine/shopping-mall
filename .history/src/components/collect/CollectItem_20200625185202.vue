<template>
  <div>
    <top>
      <template v-slot:title>我的收藏</template>
    </top>
    <van-cell-group v-for="item in list" :key="item.id">
      <van-card
        :price="item.present_price"
        :title="item.name"
        centered="true"
      >
      <template #thumb>
          <img :src="item.image_path"/>
        </template>
        <template #num>
          <van-icon name="close" size="14"/>
        </template>
      </van-card>
    </van-cell-group>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "CollectItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      list: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getCollectionList()
      .then(res => {
        this.list = res.data.list;
        console.log(this.list);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-card {
  background: transparent;
}
.van-card__thumb img{
    border-radius: 0;
}
img{
    border: 1px solid rgb(230, 230, 230);
    width: 80px;
    height: 80px;
}
</style>