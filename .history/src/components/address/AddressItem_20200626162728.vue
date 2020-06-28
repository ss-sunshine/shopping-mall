<template>
  <div>
    <top>
      <template v-slot:title>地址列表</template>
    </top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
         <div class="f-j m-t-5 f16 no" v-if="list.length === 0">暂无收货地址</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Toast } from "vant";
import Top from "../top/Top";
export default {
  name: "AddressItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      this.$router.push('/editAddress')
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    查询用户收货地址
    this.$api.getGetAddress().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 46px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
</style>