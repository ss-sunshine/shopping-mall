<template>
  <div>
    <top>
      <template v-slot:title>地址列表</template>
    </top>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="checked__none">
          <van-address-list
          v-model="chosenAddressId"
          :list="list"
          @click-item="clickItem"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
        </div>
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
  name: "AddressSettlement",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      chosenAddressId: '',
      list: []
    };
  },
  methods: {
      clickItem(item){
        //   console.log(item);
          this.$router.push({ path: "-1", query: { item } });
      },
    onAdd() {
      this.$router.push("/editAddress");
    },
    onEdit(item, index) {
      // console.log(item._id);
      // this.$router.push({ path: "/editAdd", query: { id: item._id } });
      this.$router.push({ path: "/editAdd", query: { item } });
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    // 查询用户收货地址
    this.$api
      .getGetAddress()
      .then(res => {
        this.list = res.address;
        this.list.map(item => {
          return (item.address =
            item.province + item.city + item.county + item.addressDetail);
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    // 查询默认
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.chosenAddressId = res.defaultAdd._id;
        // console.log(this.chosenAddressId);
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
.wrapper {
  // margin-top: 45px;
  // height: 100vh;
  height: calc(100vh - 46px);
  overflow: hidden; //超出部分隐藏
  background: white;
}
</style>