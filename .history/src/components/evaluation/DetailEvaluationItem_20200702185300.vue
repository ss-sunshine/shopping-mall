<template>
  <div>
    <top class="top">
      <template v-slot:title>评价详情</template>
    </top>
    <div>
      <div class="p-tb-1 border_bottom">
        <div class="f-a p-l-2">
          <img src="../../assets/QQ.jpg" class="image" />
          <div class="m-l-2">
            <div class="f14 m-b-1">{{nickname}}</div>
            <van-rate
              v-model="obj.rate"
              :size="20"
              color="#ee0a24"
              void-icon="star"
              void-color="#eee"
            />
          </div>
        </div>
        <div class="f14 m-t-1 p-l-2">评价内容：{{obj.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "DetailEvaluationItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      obj: {},
      nickname:""
    };
  },
  methods: {},
  mounted() {
    this.obj = this.$route.query.item;
    this.obj = JSON.parse(localStorage.getItem("detailEvaluation"));
    console.log(this.obj);
    this.$api.getQueryUser().then(res=>{
        // console.log(res);
        this.nickname = res.userInfo.nickname
    }).catch(err=>{
        console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.border_bottom{
    border-bottom: 1px solid rgb(246, 246, 246);
}
</style>