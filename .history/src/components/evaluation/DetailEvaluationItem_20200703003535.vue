<template>
  <div>
    <top class="top">
      <template v-slot:title>评价详情</template>
    </top>
    <div>
      <div class="p-tb-1 border_bottom">
        <div class="f-a p-l-2">
          <img src="../../assets/QQ.jpg" class="image" />
          <div class="m-l-2">
            <div class="f-a f14 m-b-1">
              <div class="left">{{nickname}}</div>
              <div>{{obj.comment_time}}</div>
            </div>
            <van-rate
              v-model="obj.rate"
              :size="20"
              color="#ee0a24"
              void-icon="star"
              void-color="#eee"
            />
          </div>
        </div>
        <div class="f14 m-t-1 p-l-2">评价内容：{{obj.content}}</div>
      </div>
      <div class="p-tb-1 f-j-bw">
        <div class="d-f p-l-2">
          <img :src="image" class="image1" />
          <div class="m-l-2">
            <div class="f-a f14 m-b-1">
              <div>{{name}}</div>
            </div>
          </div>
        </div>
        <div class="icon-shopping f-a-j m-r-2">
          <van-icon name="shopping-cart-o" size="22px" color="red" @click="clickItem" />
        </div>
      </div>
    </div>
    <van-goods-action class="shop-icon p-lr-2">
        <van-button
          color="rgb(255,136,85)"
          square
          text="加入购物车"
          size="large"
          class="m-b-2"
          @click="checkSettlement"
        />
      </van-goods-action>
  </div>
</template>

<script>
import { Dialog } from "vant";
import Top from "../top/Top";
export default {
  name: "DetailEvaluationItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      obj: {},
      nickname: "",
      image: "",
      name: "",
      id: ""
    };
  },
  methods: {
    clickItem() {
      this.$api
        .getAddShop({ id: this.id })
        .then(res => {
          // console.log(res);
          // this.$router.push({query:{value:this.value}})
          // console.log(this.value);
          this.$toast.success("添加成功");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.obj = this.$route.query.item;
    this.obj = JSON.parse(localStorage.getItem("detailEvaluation"));
    console.log(this.obj);
    this.obj.goods.map(item => {
      this.image = item.image_path;
      this.name = item.name;
      this.id = item.id;
    });
    this.$api
      .getQueryUser()
      .then(res => {
        // console.log(res);
        this.nickname = res.userInfo.nickname;
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
.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.image1 {
  width: 50px;
  height: 50px;
}
.border_bottom {
  border-bottom: 1px solid rgb(246, 246, 246);
}
.left {
  padding-right: 100px;
}
.icon-shopping {
  width: 40px;
  height: 40px;
  background: rgb(255, 230, 226);
  border-radius: 50%;
}
</style>