<template>
  <div>
    <div class="login-img">
        <!-- <img src="../../assets/login.jpg" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  components: {},
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
  background: url('../../assets/login.jpg');
//   display: flex;
  justify-content: center;
  position: fixed;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>