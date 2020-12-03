<template>
  <div class="header-wrap">
    <div class="logo"><logo /></div>
    <div class="social"><social /></div>
    <div class="login"><login /></div>
  </div>
</template>
<script>
import logo from "./logo.vue";
import social from "./social";
import login from "./login";
export default {
  components: { logo, social, login },
  name: "header-block",
};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";
.header-wrap {
  display: flex;
  justify-content: space-between;

  .social {
    @include flex-center-center;
    max-width: 150px;
    width: 100%;
  }
}
</style>
