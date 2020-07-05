<template>
  <div>
    <top class="top">
      <template v-slot:title>评价中心</template>
    </top>
    <div>
      <div class="f-a m-l-3 p-tb-1">
        <img :src="obj.image_path" alt class="image" />
        <div class="m-l-4">
          <div>商品评分</div>
          <van-rate v-model="num" :size="25" color="#ee0a24" void-icon="star" void-color="#eee" />
        </div>
      </div>
      <van-cell-group>
        <van-field v-model="value" placeholder="说说你的购买感受吧~~" />
        <div class="uploader">
            <van-uploader v-model="fileList" multiple />
        </div>
      </van-cell-group>
      <van-checkbox v-model="checked">匿名评价</van-checkbox>
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
      value: "",
      checked: false,
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {},
  mounted() {
    this.obj = this.$route.query.item;
    //   console.log(this.obj);
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
  height: 160px;
  background: rgb(247,247,247);
}
.uploader{
    background: rgb(247,247,247);
}
.van-uploader{
    padding-top: 2.133vw;
    padding-left: 20px;
}
.van-uploader__preview-image{
    border-radius: 0;
}
</style>