<template>
  <div class="ipt">
    <!-- <form action="/"> -->
    <van-search 
    v-model="value" 
    @focus="enter"
    @blur="leave"
    show-action 
    placeholder="请输入搜索关键词" 
    @search="onSearch">
      <template #action>
        <div v-if="list.length===0&&flag===false" @click="onSearch">搜索</div>
        <div v-if="list.length!==0" @click="on">取消</div>
      </template>
      <template #left>
        <div class="f-a p-lr-15">
          <div class="f13 m-r-05">{{city}}</div>
          <van-icon name="arrow-down" size="14px" />
        </div>
      </template>
    </van-search>
    <!-- </form> -->
    <div class="list" v-if="list.length===0&&flag===true">
      <div class="f-aj-bw delete">
        <div class="f14">搜索历史</div>
        <van-icon name="delete" />
      </div>
      <div></div>
    </div>
    <van-list  v-if="list.length!==0" :finished="finished" finished-text="没有更多了" @load="onSearch" class="list">
      <div v-for="item in list" :key="item.id">
        <!-- {{item.name}} -->
        <!-- <div class="item f14" @click="clickDetail">{{item.name}}</div> -->

        <!-- 关键字高亮  v-html -->
        <div class="item f14" @click="clickDetail" v-html="name(item.name,value)"></div>
      </div>
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
      finished: false,
      flag:false
    };
  },
  methods: {
    enter(){
      this.flag = true
      localStorage.getItem("value")
      // console.log(value);
    },
    leave(){
      this.flag = false
    },
    onSearch(val) {
      // console.log(val);
      localStorage.setItem("value", JSON.stringify(val));

      this.$api
        .grtSearch({ value: this.value })
        .then(res => {
          // console.log(res.data.list);
          this.list = res.data.list;
          // 数据全部加载完成
          if (this.list.length!==0) {
            this.finished = true;
          }else{
            this.finished = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    on(){
      this.list=[]
      this.value=""
    },
    clickDetail(){
      this.$router.push('/detail')
    },

    //关键字高亮
    name(val, keyword){
      let Reg = new RegExp(keyword, 'i');
       if (val) {
          let res = val.replace(Reg, `<span style="color: rgb(255, 0, 0);">${keyword}</span>`);
            //  console.log(res); 
             return res;
       }
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
  watch: {
    value(val){
      this.list=[]
    }
  },
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
  height: 100vh;
  background: white;
}
.item {
  background: white;
  border-bottom: 1px solid rgb(242, 242, 242);
  padding: 15px;
}
.delete{
  padding: 10px 20px;
}
</style>