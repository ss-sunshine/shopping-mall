<template>
  <div>
    <top>
      <template v-slot:title>编辑地址</template>
    </top>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "../../assets/js/area";
import { Toast } from "vant";
import Top from "../top/Top";
export default {
  name: "EditAddressItem",
  props: {},
  components: {
    Top
  },
  data() {
    return {
      areaList,
      searchResult: [],
      // addressInfo: {},
      // name: "",
      // tel: "",
      // address: "",
      // isDefault: "",
      // province: "",
      // city: "",
      // county: "",
      // addressDetail: "",
      // areaCode: "",
      id: ""
    };
  },
  methods: {
    onSave(content) {
      // console.log(content);
      this.$api
        .getAddress({
          name: content.name,
          tel: content.tel,
          address: content.address,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          // id: this.id
        })
        .then(res => {
          // console.log(res);
          Toast.success(res.msg);
          this.$router.back();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // onDelete() {
    //   this.$api
    //     .getDeleteAddress({ id: this.id })
    //     .then(res => {
    //       // console.log(this.id);
    //       Toast.success(res.msg);
    //       this.$router.back();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "东方广场",
            address: "成都市锦江区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>