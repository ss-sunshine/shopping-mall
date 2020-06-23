<template>
  <div>
    <search class="search"></search>
    <div class="center">
      
      <div class="wrapper" ref="wrapper">
        <div class="content">
          <banner :banner="banner"></banner>
          <classification :classification="classification"></classification>
          <ad :ad="ad"></ad>
          <!-- <recommend :recommend="recommend"></recommend> -->
          <one :floor1="floor1">
            <template v-slot:num>
              <div>1F</div>
            </template>
            <template v-slot:title>
              <div>{{kind.floor1}}</div>
            </template>
          </one>
          <two :floor2="floor2">
            <template v-slot:num>
              <div>2F</div>
            </template>
            <template v-slot:title>
              <div>{{kind.floor2}}</div>
            </template>
          </two>
          <three :floor3="floor3">
            <template v-slot:num>
              <div>3F</div>
            </template>
            <template v-slot:title>
              <div>{{kind.floor3}}</div>
            </template>
          </three>
          <hot :hotGoods="hotGoods">
            <template v-slot:title>
              <div>热销商品</div>
            </template>
          </hot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hot from "../components/home/kind/Hot";
import Three from "../components/home/kind/Three";
import Two from "../components/home/kind/Two";
import One from "../components/home/kind/One";
import Recommend from "../components/home/Recommend";
import Ad from "../components/home/Ad";
import Classification from "../components/home/Classification";
import Banner from "../components/home/Banner";
import BScroll from "better-scroll";
import Search from "../components/home/Search";
export default {
  name: "Home",
  props: {},
  components: {
    Search,
    Banner,
    Classification,
    Ad,
    Recommend,
    One,
    Two,
    Three,
    Hot
  },
  data() {
    return {
      banner: [],
      classification: [],
      ad: {},
      recommend: [],
      kind: {},
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: [],
      flag: false,
    };
  },
  methods: {
    enter() {
      this.flag = true;
    },
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.$api
      .getRecommend()
      .then(res => {
        // console.log(res.data);
        this.banner = res.data.slides;
        this.classification = res.data.category;
        this.ad = res.data.advertesPicture;
        this.recommend = res.data.recommend;
        this.kind = res.data.floorName;
        this.floor1 = res.data.floor1;
        this.floor2 = res.data.floor2;
        this.floor3 = res.data.floor3;
        this.hotGoods = res.data.hotGoods;
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
.search {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
}
.wrapper {
  margin-top: 45px;
  // height: 100%;
  height: calc(100vh - 95px);
  overflow: hidden; //超出部分隐藏
  background: rgb(242, 242, 242);
}
.content {
  // height: 100%;
  overflow: hidden;
}
</style>