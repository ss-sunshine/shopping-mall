<template>
  <div>
    <top>
      <template v-slot:title>我的收藏</template>
    </top>
    <van-cell-group v-for="(item,index) in list" :key="item.id">
      <van-card :title="item.name">
        <template #thumb>
          <img :src="item.image_path" />
        </template>
        <template #price>
          <div class="price f14 f-w-7">￥{{item.present_price}}</div>
        </template>
        <template #num>
          <van-icon name="close" size="14" @click="del(item,index)"/>
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
      list: [],
      id:"",
      arr:[]
    };
  },
  methods: {
      del(item,index){
          this.id=item._id
        //   console.log(this.id);
         this.$api
        .getCancelCollection({ id: this.id })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
        this.list=this.list.filter(item=>{
            return this.id!==item._id
        })
      }
  },
  mounted() {
    this.$api
      .getCollectionList()
      .then(res => {
        this.list = res.data.list;
        // console.log(this.list);
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
  background: white;
  font-size: 14px;
}
.van-card__thumb img {
  border-radius: 0;
}
img {
  border: 1px solid rgb(230, 230, 230);
  width: 80px;
  height: 80px;
}
.price {
  color: rgb(255, 0, 0);
}
</style>