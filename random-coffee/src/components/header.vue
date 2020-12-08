<template>
  <div class="header-wrap">
    <div class="header-wrap__item social"><social /></div>
     <div class="header-wrap__item logo"><logo /></div>
    <div class="header-wrap__item login"><login /></div>
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
  padding: 1rem 0;
&_item {
  max-width: 33%;
}
  .social {
    @include flex-center-center;
  }

}
</style>
