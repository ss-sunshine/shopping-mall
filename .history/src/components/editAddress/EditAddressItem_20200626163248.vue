<template>
  <div>
    <top>
      <template v-slot:title>编辑地址</template>
    </top>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
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
      addressInfo:{},
      name: "",
      tel: "",
      address: "",
      isDefault: "",
      province: "",
      city: "",
      county: "",
      addressDetail: "",
      areaCode: "",
      id: ""
    };
  },
  methods: {
    onSave() {
      this.$api
        .getAddress(
          this.name,
          this.tel,
          this.address,
          this.isDefault,
          this.province,
          this.city,
          this.county,
          this.addressDetail,
          this.areaCode,
          this.id
        //   {
        //   name: this.name,
        //   tel: this.tel,
        //   address: this.address,
        //   isDefault: this.isDefault,
        //   province: this.province,
        //   city: this.city,
        //   county: this.county,
        //   addressDetail: this.addressDetail,
        //   areaCode: this.areaCode,
        //   id: this.id
        // }
        )
        .then(res => {
          console.log(res);
          Toast.success(res.msg);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete() {
      // this.$api
      //   .getAddress(
      //     this.id
      //   )
      //   .then(res => {
      //     console.log(res);
      //     Toast.success(res.msg);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
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