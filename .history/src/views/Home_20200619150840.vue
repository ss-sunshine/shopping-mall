<template>
  <div>
    <search class="search"></search>
    <div class="center">
      <div class="wrapper" ref="wrapper">
      <div class="content">
          <banner :banner="banner"></banner>
          <classification :classification="classification"></classification>
          <ad :ad="ad"></ad>
          <recommend :recommend="recommend"></recommend>
          <one>
            <template v-slot:num>
              <div>1F</div>
            </template>
          </one>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import One from "../components/home/kind/One"
import Recommend from "../components/home/Recommend"
import Ad from "../components/home/Ad"
import Classification from "../components/home/Classification"
import Banner from "../components/home/Banner"
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
    One
  },
  data() {
    return {
      banner: [],
      classification:[],
      ad:{},
      recommend:[],
      kind:{}
    };
  },
  methods: {
    
  },
  mounted() {
    new BScroll(this.$refs.wrapper,{
      click:true
    });
     this.$api
      .getRecommend()
      .then(res => {
        console.log(res.data);
        this.banner = res.data.slides;
        this.classification = res.data.category;
        this.ad = res.data.advertesPicture;
        this.recommend = res.data.recommend;
        this.kind = res.data.floorName
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
  position: fixed;
  top: 0;
  z-index: 99;
}
.wrapper {
  margin-top: 45px;
  height: calc(100vh-45px);
  overflow: hidden;   //超出部分隐藏
  background: rgb(242, 242, 242);
}
.content {
  height: 100vh;
  overflow: hidden;
}
</style>