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
      list: []
    };
  },
  methods: {
    onAdd() {
      this.$router.push('/editAddress')
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
      console.log(item._id)
    },
    onSelect(item, index){
      console.log(index, item._id)
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      click: true
    });
    // 查询用户收货地址
    this.$api.getGetAddress().then(res=>{
      this.list=res.address
      this.list.map(item=>{
        return item.address=item.province+item.city+item.county+item.addressDetail
      })
      this.list.map(item=>{
        let i=0
        return item._id=i+i++
        console.log(item._id);
      })
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