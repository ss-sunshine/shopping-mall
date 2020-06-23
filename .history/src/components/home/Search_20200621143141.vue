<template>
  <div class="ipt">
    <!-- <form action="/"> -->
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
      <template #left>
        <div class="f-a p-lr-15">
          <div class="f13 m-r-05">{{city}}</div>
          <van-icon name="arrow-down" size="14px" />
        </div>
      </template>
    </van-search>
    <!-- </form> -->
    <van-list :finished="finished" finished-text="没有更多了" @load="onSearch" class="list">
      <van-cell v-for="item in list" :key="item.id">
        {{item.name}}
        <!-- <van-cell class="item f14">{{item.name}}</van-cell> -->
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Search",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      city: "",
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
      localStorage.setItem("value", JSON.stringify(val));

      this.$api
        .grtSearch({ value: this.value })
        .then(res => {
          console.log(res.data.list);
          this.list = res.data.list;
          res.data.list.map(item=>{
            item.name
          })
          this.loading = false;

          // 数据全部加载完成
          if (this.list === res.data.list) {
            this.finished = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
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
  watch: {},
  computed: {
  
  }
};
</script>

<style scoped lang='scss'>
.ipt {
  width: 100%;
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
.list {
  height: 100%;
  background: white;
}
.item {
  background: white;
  border-bottom: 1px solid rgb(242, 242, 242);
  padding: 10px 15px;
}
</style>