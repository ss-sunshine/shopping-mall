<template>
  <div>
    <div class="login-img">
        <admin></admin>
    </div>
  </div>
</template>

<script>
import Admin from "../../components/login/Admin"
export default {
  name: "Login",
  props: {},
  components: {
      Admin
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.login-img{
  background: url('../../assets/timg (1).jpg');
  // position: fixed;
  // float: right;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>