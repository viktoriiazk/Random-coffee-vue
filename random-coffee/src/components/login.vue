<template>
  <div class="login-wrap">
    <!-- <div class="newCompany"><a href="#">Register a company</a></div> -->
    <div class="signIn text-hover-dark">
      <router-link to="/404">Sign In</router-link>
    </div>
    <div class="signUp text-hover-dark">
      <router-link to="/404">Sign Up</router-link>
    </div>
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
