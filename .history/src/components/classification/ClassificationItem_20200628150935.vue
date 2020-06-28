<template>
  <div>
    <div class="title f-a-j">商品分类</div>
    <div class="d-f">
      <div class="left">
        <van-sidebar v-model="num">
          <div v-for="(item,index) in classification" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" @click="OnChange(item,index)" />
          </div>
        </van-sidebar>
      </div>
      <div class="right">
         <div v-if="categorydata.length>0">
                    <van-tabs v-model="active" swipeable @click="onClick">
                        <van-tab v-for="(item1,index1) in categorydata[aIndex].bxMallSubDto" :key="index1" :title="item1.mallSubName" ellipsis="false">
                            <div>
                                <div v-for="(item3,index3) in dataList" :key="index3">
                                    <div class="flex line">
                                        <div class="m-l-10 img m-tb-10">
                                            <img :src="item3.image" class="w100p" />
                                        </div>
                                        <div class="m-tb-10">
                                            <div class="m-b-20 m-l-10 name">{{item3.name}}</div>
                                            <span class="color-red m-lr-10">￥{{item3.orl_price}}</span>
                                            <span class="F14 zprice color-ccc">{{item3.present_price}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
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
      //   activeKey: "",
      classification: [],
      bxMallSubDto: [],
      bxMallSubDtoItem: [],
      num: ""
    };
  },
  methods: {
    
    },
  mounted() {
    this.classification = JSON.parse(localStorage.getItem("classification"));
    this.num = this.$route.query.index;
    // this.bxMallSubDto = this.classification[this.num].bxMallSubDto;
    this.classificationData();
    // console.log(this.classification[this.num].bxMallSubDto);
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
  height: calc(100vh - 41px);
  background: rgb(247, 248, 250);
}
.right {
  width: 100vw;
}
</style>