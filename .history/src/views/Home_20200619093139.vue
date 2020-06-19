<template>
  <div>
    <search class="search"></search>
    <div class="center">
      <div class="wrapper">
      <ul class="content">
        <li>
          <banner :banner="banner"></banner>
        </li>
        <li>
          <classification :classification="classification"></classification>
        </li>
        <li>
          <ad :ad="ad"></ad>
        </li>
        <li>
          <recommend></recommend>
        </li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
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
    Ad
  },
  data() {
    return {
      banner: [],
      classification:[],
      ad:{}
    };
  },
  methods: {
    
  },
  mounted() {
    new BScroll(".wrapper");
     this.$api
      .getRecommend()
      .then(res => {
        console.log(res.data);
        this.banner = res.data.slides;
        this.classification = res.data.category;
        this.ad = res.data.advertesPicture;
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
  height: calc(100vh-95px);
  overflow: hidden;   //超出部分隐藏
  background: rgb(242, 242, 242);
}
.content {
  height: 100vh;
  overflow: hidden;
}
</style>