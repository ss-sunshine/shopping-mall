<template>
  <div>
      <!-- <form action="/"> -->
      <van-search
        v-model="value"
        @focus="enter"
        show-action
        placeholder="请输入搜索关键词"
      >
        <template #action>
          <div>搜索</div>
        </template>
        <template #left>
          <div class="f-a p-lr-15">
            <div class="f13 m-r-05">{{city}}</div>
            <van-icon name="arrow-down" size="14px" />
          </div>
        </template>
      </van-search>
    <!-- </form> -->
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "SearchItem",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      city: "",
      list: [],
      finished: false,
      flag: false,
      history: [],
      historyArr: []
    };
  },
  methods: {
    enter() {
      this.flag = true;
    },
  },
  mounted() {
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
        _this.city = data.addressComponent.city;
        // console.log(data);
      }

      function onError(data) {
        // 定位出错
      }
    });
  },
  watch: {
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  // height: 100%;
  height: 100vh;
  overflow: hidden; //超出部分隐藏
  
  // background: rgb(242, 242, 242);
}
.background{
  background: white;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
.content {
  // height: 100vh;
  // overflow: hidden;
  background: white;
}
.van-search {
  height: 45px;
  background: rgb(242, 242, 242);
  padding: 0;
}
.van-search__content {
  background: white;
  border-radius: 4px;
}
// .list-mt {
//   margin-top: 45px;
// }
.list {
  height: 100vh;
  background: white;
}
.item {
  background: white;
  border-bottom: 1px solid rgb(242, 242, 242);
  padding: 15px;
}
.delete {
  padding: 10px 20px;
  margin-bottom: 10px;
}
.history {
  margin: 0 20px;
  padding: 5px 20px;
  background: rgb(242, 242, 242);
  border-radius: 25px;
}
</style>