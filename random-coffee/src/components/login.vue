<template>
  <div class="login-wrap">
    <!-- <div class="newCompany"><a href="#">Register a company</a></div> -->
    <div class="signIn text-hover-dark"><a href="#">Sign In</a></div>
    <div class="signUp text-hover-dark"><a href="#">Sign Up</a></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
.login-wrap {
  @include flex-sb-center;
  width: 120px;
  .text-hover-dark {
    @include hover-text-ligth;
  }
  a {
    color: $lightTextColor;
    font-family: $fontMain;
  }
}
</style>
