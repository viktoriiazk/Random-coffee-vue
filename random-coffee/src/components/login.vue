<template>
  <div class="login-wrap">
    <div class="newCompany"><a href="#">Register a company</a></div>
    <div class="signIn"><a href="#">Login</a></div>
    <div class="signUp"><a href="#">Sign Up</a></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
.login-wrap {
  @include flex-sb-center;

  width: 100%;
  a {
    color: $lightTextColor;
  }
}
</style>
