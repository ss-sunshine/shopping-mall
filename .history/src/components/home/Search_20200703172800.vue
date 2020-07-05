<template>
  <div>
    <div class="search">
      <form action="/">
        <van-search
          v-model="value"
          @focus="enter"
          @blur="leave"
          show-action
          placeholder="请输入搜索关键词"
          @input="onSearch"
        >
          <template #action>
            <div v-if="list.length===0&&flag===false">搜索</div>
            <div v-if="list.length!==0||flag===true" @click="no">取消</div>
          </template>
          <template #left>
            <div class="f-a p-lr-15">
              <div class="f13 m-r-05">{{city}}</div>
              <van-icon name="arrow-down" size="14px" />
            </div>
          </template>
        </van-search>
      </form>
    </div>

    <!-- 历史记录 -->
    <div class="search-content">
      <div class="list" v-if="list.length<1&&flag===true">
        <div class="f-aj-bw delete">
          <div class="f14">搜索历史</div>
          <van-icon name="delete" @click="clickDelete" />
        </div>
        <div class="f-a f-w">
          <div v-for="item in historyArr" :key="item.id">
            <div class="history f14" @click="clickhistory(item)">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="background" v-if="list.length>0"></div>
      <div class="contenter" ref="contenter">
        <div class="content">
          <van-list
            v-if="list.length!==0"
            :finished="finished"
            finished-text="没有更多了"
            @load="onSearch"
            class="list-item"
          >
            <div v-for="item in list" :key="item.id">
              <!-- {{item.name}} -->
              <!-- <div class="item f14" @click="clickDetail">{{item.name}}</div> -->

              <!-- 关键字高亮  v-html -->
              <div class="item f14" @click="clickDetail(item)" v-html="name(item.name,value)"></div>
            </div>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uniqWith from "lodash/uniqWith";
import isEqual from "lodash/isEqual";
import BScroll from "better-scroll";
import { Dialog } from "vant";
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
      flag: false,
      history: [],
      historyArr: []
    };
  },
  methods: {
    clickDelete() {
      Dialog.confirm({
        title: "提示",
        message: "确认删除商品吗？"
      })
        .then(res => {
          localStorage.removeItem("value");
          this.historyArr = [];
          this.history = [];
        })
        .catch(err => {
          console.log(err);
        });
    },
    enter() {
      this.flag = true;
    },
    leave(){
      // this.flag = false
    },
    clickhistory(item) {
      this.value = item;
    },
    onSearch(val) {
      // console.log(val);
      // 搜索
      if (localStorage.getItem("value")) {
        let history = JSON.parse(localStorage.getItem("value"));
        history.push(val);
        localStorage.setItem("value", JSON.stringify(history));
      } else {
        let arr = [];
        arr.push(val);
        localStorage.setItem("value", JSON.stringify(arr));
      }

      // if (val !== "") {
      //   localStorage.setItem("value", val);
      //   let history = localStorage.getItem("value");
      //   this.history.push(history);

      //   //数组去重
      //   this.historyArr = this.history.filter((item, index, array) => {
      //     return array.indexOf(item) === index;
      //   });
      //   localStorage.setItem("value", JSON.stringify(this.historyArr));
      //   this.historyArr = JSON.parse(localStorage.getItem("value"));
      //   console.log(this.historyArr);
      // }

      this.$api
        .grtSearch({ value: this.value })
        .then(res => {
          // console.log(res.data.list);
          this.list = res.data.list;
          // 数据全部加载完成
          if (this.list.length !== 0) {
            this.finished = true;
          } else {
            this.finished = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    no() {
      this.flag = false;
      this.list = [];
      this.value = "";
    },
    clickDetail(item) {
      // console.log(item);
      this.$router.push({ path: "/detail", query: { id: item.id } });
    },

    //关键字高亮
    name(val, keyword) {
      let Reg = new RegExp(keyword, "i");
      if (val) {
        let res = val.replace(
          Reg,
          `<span style="color: rgb(255, 0, 0);">${keyword}</span>`
        );
        //  console.log(res);
        return res;
      }
    }
  },
  mounted() {
    this.historyArr = JSON.parse(localStorage.getItem("value"));
    // 去重
    this.historyArr = uniqWith(this.historyArr, isEqual);
    // console.log(this.historyArr);

    this.scroll = new BScroll(this.$refs.contenter, {
      click: true
    });
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
    value(val) {
      this.list = [];
    }
  },
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
.search-content {
  margin-top: 45px;
}
// .contenter {
//   // height: 100%;
//   height: calc(100vh - 45px);
//   overflow: hidden; //超出部分隐藏
//   z-index: 99;
// }
.background {
  background: white;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
// .content {
//   // height: 100vh;
//   // overflow: hidden;
//   // background: white;
// }
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