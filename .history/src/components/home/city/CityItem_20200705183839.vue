<template>
  <div>
    <top class="flexd w100 z-index">
      <template v-slot:title>城市列表</template>
    </top>
    <div>
        <van-search v-model="searchCity" placeholder="请输入城市关键词" />
    <div v-if="searchCity === ''">
      <div class="now-city p-b-1 p-l-1 f14">当前城市</div>
      <div class="nowCityOUT p-tb-1">
        <div class="nowCity f-a-j f14">
          <div v-if="nowcity">{{nowcity}}</div>
          <div v-else>定位中...</div>
        </div>
      </div>
      <div class="now-city p-tb-1 f14">热门城市</div>
      <div class="d-f f-w m-b-1">
        <div v-for="(item,index) in hotCities" :key="index">
          <div
            class="hotCity f-a-j f14 f1 m-l-1 m-t-1"
            @click="checkCity(item)"
          >{{item.name}}</div>
        </div>
      </div>
      <van-index-bar class="side_font top_index-bar  margin_index-bar">
        <div v-for="(item,index) in indexList" :key="index">
          <van-index-anchor :index="item" class="van-index-anchor" />
          <div v-for="(item1,index1) in title[index]" :key="index1">
            <van-cell :title="item1.name" @click="checkCity(item1)" />
          </div>
        </div>
      </van-index-bar>
    </div>
    <div v-if="searchCity !==''">
      <div v-for="(item,index) in arr1" :key="index">
        <div class="sea-searchCity p-tb-1 p-l-2">{{item.name}}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Top from "../../top/Top";
import city from '../../../assets/js/city'
// import BScroll from 'better-scroll'
export default {
  name: "",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      nowcity: "", //
      city: [],
      searchCity: "", //搜索关键字
      hotCities: [],
      indexList: [],
      title: [],
      arr: [],
      arr1: []
    };
  },
  methods: {
    getSomeCity() {
      let _this = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          _this.nowcity = data.addressComponent.city;
          // console.log(data);
          // console.log(_this.nowcity);
          // _this.$store.commit("setPosition_city", _this.nowcity);
        }
        function onError(data) {
          // 定位出错
        }
      });
    },
    checkCity(item1) {
      this.searchCity = item1.name;
      // // console.log(item1.name);
      localStorage.setItem("searchCity", this.searchCity);
      this.$router.push({ path: "/", query: { searchCity: this.value } });
    }
  },
  mounted() {
    this.getSomeCity();
    this.city = city.data;
    // console.log(this.city);
    this.hotCities = this.city.hotCities;
    // console.log(this.hotCities);
    this.indexList = Object.keys(this.city.cities); //返回-对象属性名的字符串形式-构成数组
    // console.log(this.cities);
    this.title = Object.values(this.city.cities); //返回-对象属性值的字符串形式-构成数组
    // console.log(this.title);
  },
  watch: {
    searchCity(val) {
      if (val !== "") {
        this.arr = this.title.flat(1);
        // console.log(this.arr);
        this.arr1 = this.arr.filter((item, index) => {
          return JSON.stringify(item).includes(val) === true;
        });
        // console.log(this.arr1);
        //var newArray = arr.flat(depth);
        //depth是参数；指定要提取嵌套数组的结构深度，默认值为 1；是一个可选的参数；flat的返回值是一个包含将数组与子数组中所有元素的新数组。
      }
    }
  },
  computed: {
    // position_city() {
    //   return this.$store.state.position_city;
    // }
  }
};
</script>

<style scoped lang='scss'>
.van-search {
  background: rgb(242, 242, 242);
}
.van-search__content {
  background: #fff;
}
.nowCity {
  border: 1px solid #ccc;
  width: 90px;
  padding: 3px 15px 3px 15px;
  border-radius: 3px;
}
.nowCityOUT {
  background: rgb(255, 255, 255);
  padding-left: 10px;
}
.now-city {
  background: rgb(242, 242, 242);
  padding-left: 10px;
}
.hotCity {
  padding: 3px 35px 3px 35px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
.van-index-anchor {
  background: rgb(242, 242, 242);
}
.searchPage {
  width: 200px;
  height: 500px;
}
.sea-searchCity {
  border-bottom: 1px solid rgb(242, 242, 242);
}
.van-index-bar__index{
    margin: 4px 6px;
}
</style>