<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>

    <div>
      <img src="../../assets/evaluate.jpg" alt class="image" />
    </div>
    <div class="f-j btn1">
      <div class="btn">
        <van-tabs v-model="activeName">
          <van-tab title="待评价" name="a"></van-tab>
          <van-tab title="已评价" name="b"></van-tab>
        </van-tabs>
        <!-- <div class="one p-tb-1 f-j" @click="clickItem" :class="{border:flag===false}">待评价</div>
        <div class="one p-tb-1 f-j" @click="clickItem1" :class="{border:flag===true}">已评价</div>-->
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div v-if="activeName==='a'">
          <div v-for="(item,index) in list" :key="item.id">
            <van-card :title="item.name" @click-thumb="detail(item, index)">
              <template #thumb>
                <img :src="item.image_path" class="image1" />
              </template>
              <template #num>
                <div class="f-a-j dryingsSheet f12">
                  <van-icon name="chat" class="icon-chat" />
                  <div>评论晒单</div>
                </div>
              </template>
            </van-card>
          </div>
        </div>
        <div v-if="activeName==='b'">
          <div v-for="(item,index) in list" :key="item.id">
            <van-card :title="item.name" @click-thumb="detail(item, index)">
              <template #thumb>
                <img :src="item.image_path" class="image1" />
              </template>
              <template #num>
                <div class="f-a-j dryingsSheet f12">
                  <van-icon name="chat" class="icon-chat" />
                  <div>评论晒单</div>
                </div>
              </template>
            </van-card>
          </div>
        </div>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Top from "../top/Top";
export default {
  name: "EvaluationItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      flag: false,
      activeName: " ",
      list: []
    };
  },
  methods: {
    detail(item, index) {
      this.$router.push({ path: "/detail", query: { id: item.cid } });
    },
    clickItem() {
      this.flag = false;
    },
    clickItem1() {
      this.flag = true;
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    //   console.log(this.activeName);
    this.$api
      .getTobeEvaluated()
      .then(res => {
        console.log(res.data.list);
        this.list = res.data.list;
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
.dryingsSheet {
  padding: 2px 10px;
  border: 1px solid red;
  color: red;
  border-radius: 50px;
}
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 260px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
.top {
  position: fixed;
  z-index: 99;
  width: 100%;
}
.image {
  width: 100%;
}
.btn1 {
  position: relative;
  top: -20px;
}
.btn {
  font-size: 14px;
  width: 340px;
  background: white;
  //   border-radius: 4px;
  //   color: rgb(150, 150, 150);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.van-card {
  background: white;
  font-size: 14px;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.image1 {
  width: 80px;
  height: 80px;
}
.icon-chat {
  margin-right: 2px;
}
.van-tabs__nav .van-tabs__nav--line {
    padding-bottom: 0 !important;
}
.van-tabs__line{
    bottom: 0;
}
</style>