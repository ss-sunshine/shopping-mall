<template>
  <div>
    <div class="title f-a-j">商品分类</div>
    <div class="d-f">
        <div class="left">
      <van-sidebar v-model="activeKey" @click="onClick">
        <div v-for="(item,index) in classification" :key="index">
          <van-sidebar-item :title="item.mallCategoryName" @click="OnChange(item,index)"/>
        </div>
      </van-sidebar>
    </div>
    <div class="right">
        <van-tabs v-model="active">
          <van-tab v-for="(item,index) in bxMallSubDto" :key="index" :title="item.mallSubName" ellipsis="false">
              内容 {{ index }}
          </van-tab>
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
        active: 0,
      activeKey: 0,
      classification: [],
      bxMallSubDto:[],
      bxMallSubDtoItem:[],
      num: ""
    };
  },
  methods: {
      onClick(name, title){

      },
      OnChange(item,index){

      }
  },
  mounted() {
    this.classification = JSON.parse(localStorage.getItem("classification"));
    this.num = this.$route.query.index;
    this.bxMallSubDto = this.classification[this.num].bxMallSubDto
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
.right{
    width: 100vw;
}
</style>