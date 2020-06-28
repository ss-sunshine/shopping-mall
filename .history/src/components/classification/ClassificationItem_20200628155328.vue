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
        <!-- <div v-if="classification.length>0"> -->
        <van-tabs v-model="active" @click="onClick(name, title)">
          <van-tab
            v-for="(item,index) in classification[num].bxMallSubDto"
            :key="index"
            :title="item.mallSubName"
            ellipsis="false"
          >
            <van-cell-group v-for="(item1,index1) in bxMallSubDtoItem" :key="index1">
              <van-card :title="item1.name" @click-thumb="detail(item1, index1)">
                <template #thumb>
                  <img :src="item1.image" />
                </template>
                <template #price>
                  <div class="price f14 f-w-7">￥{{item1.present_price}}</div>
                </template>
              </van-card>
            </van-cell-group>
          </van-tab>
        </van-tabs>
        <!-- </div> -->
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
    detail(item1, index1) {
      this.$router.push({ path: "/detail", query: { id: item1.cid } });
    },
    onClick(name, title) {
      //   console.log(name);
      let id = this.classification[this.num].bxMallSubDto[name].mallSubId;
      this.$api
        .getClassification(id)
        .then(res => {
          console.log(res);
          this.bxMallSubDtoItem = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    OnChange(item, index) {
      this.active = 0;
      this.num = index;
      let id = this.classification[index].bxMallSubDto[0].mallSubId;
      this.$api
        .getClassification(id)
        .then(res => {
          console.log(res);
          this.bxMallSubDtoItem = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
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
            // console.log(res);
            this.bxMallSubDtoItem = res.dataList;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        let id = this.classification[this.num].bxMallSubDto[0].mallSubId;
        this.$api
          .getClassification(id)
          .then(res => {
            // console.log(res);
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