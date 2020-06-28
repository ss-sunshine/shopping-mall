<template>
  <div>
    <top>
      <template v-slot:title>我的收藏</template>
    </top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <van-cell-group v-for="(item,index) in list" :key="item.id">
          <van-card :title="item.name" @click-thumb="detail(item, index)">
            <template #thumb>
              <img :src="item.image_path" />
            </template>
            <template #price>
              <div class="price f14 f-w-7">￥{{item.present_price}}</div>
            </template>
            <template #num>
              <van-icon name="close" size="14" @click="del(item,index)" />
            </template>
          </van-card>
        </van-cell-group>
        <div class="f-j m-t-5 f16 no" v-if="list.length === 0">暂无收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../top/Top";
export default {
  inject: ["reload"],
  name: "CollectItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      list: [],
      id: "",
      text: ""
    };
  },
  methods: {
    detail(item, index) {
      this.$router.push({ path: "/detail", query: { id: item.cid } });
    },
    del(item, index) {
      // this.id = item.cid;
      // console.log(item.cid);
      this.$api
        .getCancelCollection({ id: this.id })
        .then(res => {
          // console.log(res);
          // this.$router.go(0)
          this.$toast.success("删除成功");
          this.reload()
          
        })
        .catch(err => {
          console.log(err);
        });
      // this.list = this.list.filter(item => {
      //   return this.id !== item._id;
      // });
      // localStorage.setItem("list", JSON.stringify(this.list));
      // this.$toast.success("删除成功");
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.$api
      .getCollectionList()
      .then(res => {
        this.list =res.data.list
        // this.list.map(item=>{
        //   return this.id=item.cid
        // })
        // console.log(this.list);
        // localStorage.setItem("list", JSON.stringify(res.data.list));
        // this.list = JSON.parse(localStorage.getItem("list"));
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
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 46px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
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
.no {
  color: rgb(200, 200, 200);
  letter-spacing: 3px;
}
</style>