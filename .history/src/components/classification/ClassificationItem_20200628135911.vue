<template>
  <div>
    <div class="title f-a-j">商品分类</div>
    <div class="d-f">
      <div class="left">
        <van-sidebar v-model="activeKey" @click="onClick(name, title)">
          <div v-for="(item,index) in classification" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" @click="OnChange(item,index)" />
          </div>
        </van-sidebar>
      </div>
      <div class="right">
        <van-tabs v-model="active">
          <van-tab
            v-for="(item,index) in bxMallSubDto"
            :key="index"
            :title="item.mallSubName"
            ellipsis="false"
          >内容 {{ index }}</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassificationItem",
  props: {},
  components: {},
  data() {
    return {
      active: "",
      activeKey: "",
      classification: [],
      bxMallSubDto: [],
      bxMallSubDtoItem: [],
      num: ""
    };
  },
  methods: {
    onClick(name, title) {
      console.log(name);
    },
    OnChange(item, index) {
      this.num = index;
    },
    classificationData() {
      //这里的第一个if就是判断它是否是从首页点击过来，
      //如果是从首页过来的那么它发请求就要改变他的这个categorydata[this.aIndex]
      if (!this.$route.query.index) {
        this.num = 0;
        let id = this.classification[0].bxMallSubDto[0].mallSubId;
        this.$api
          .getClassification(id)
          .then(res => {
            console.log(res);
            this.bxMallSubDtoItem = res.dataList;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.classification = JSON.parse(localStorage.getItem("classification"));
    this.num = this.$route.query.index;
    this.bxMallSubDto = this.classification[this.num].bxMallSubDto;
    console.log(this.classification[this.num].bxMallSubDto);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  height: 40px;
  background: white;
  border-bottom: 1px solid rgb(246, 246, 246);
}
.left {
  height: 100vh;
  background: rgb(247, 248, 250);
}
.right {
  width: 100vw;
}
</style>