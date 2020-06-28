<template>
  <div>
    <top>
      <template v-slot:title>我的收藏</template>
    </top>
    <van-cell-group v-for="item in list" :key="item.id">
      <van-card
        :price="item.present_price"
        :title="item.name"
      >
      <template #thumb>
          <img :src="item.image_path"/>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
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
img{
    border: 1px solid rgb(230, 230, 230);
}
</style>