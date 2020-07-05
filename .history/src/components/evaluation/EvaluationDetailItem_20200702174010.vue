<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
      <div class="f-a m-l-3 p-tb-1">
        <img :src="obj.image_path" alt class="image" />
        <div class="m-l-4">
          <div class="f14 m-b-15">商品评分</div>
          <van-rate v-model="num" :size="25" color="#ee0a24" void-icon="star" void-color="#eee" />
        </div>
      </div>
      <van-cell-group>
        <van-field v-model="content" placeholder="说说你的购买感受吧~~" />
        <div class="uploader">
          <van-uploader :after-read="afterRead" class="upload_item" />
        </div>
      </van-cell-group>
      <van-checkbox v-model="checked" class="f14" icon-size="20px">匿名评价</van-checkbox>
      <div class="p-2">
        <van-button type="primary" size="large" @click="submit">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../top/Top";
export default {
  name: "EvaluationDetailItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      obj: {},
      num: 5,
      content: "",
      checked: false,
      anonymous: "",
      id: "",
      rate: "",
      content: "",
      anonymous: "",
      _id: "",
      order_id: "",
      image: ""
    };
  },
  methods: {
    submit() {
      this.$api
        .getComment({
          id: this.id,
          rate: this.num,
          content: this.content,
          anonymous: this.checked,
          _id: this._id,
          order_id: this.order_id,
          image: this.image
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  },
  mounted() {
    this.obj = this.$route.query.item;
    this.id = this.obj.id
    this._id = this.obj._id
    this.order_id = this.obj.order_id
    this.image = this.obj.image
    console.log(this.obj);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.image {
  width: 80px;
}
.van-field {
  height: 150px;
  background: rgb(247, 247, 247);
}
.uploader {
  background: rgb(247, 247, 247);
}
.van-uploader {
  padding-top: 2.133vw;
  padding-left: 20px;
}
.van-uploader__preview-image {
  border-radius: 0;
}

.van-checkbox {
  padding-top: 12px;
  padding-left: 20px;
}
</style>