<template>
  <div class="social-wrap">
    <a href="https://github.com/viktoriiazk"
      ><img src="@/assets/social/github.png" alt="Github logo"
    /></a>
    <a href="https://www.linkedin.com/in/viktoriia-zakorchemna/" target="_blank"><img src="@/assets/social/linkedin.png" alt="Linkedin logo" /></a>
    <a href="https://www.facebook.com/viktoriia.zakorchemna/" target="_blank"><img src="@/assets/social/facebook.png" alt="Facebook logo" /></a>
    <a href="https://www.instagram.com/viktoriia_zakorchemna/" target="_blank"><img src="@/assets/social/instagram.png" alt="Instagram logo" /></a>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.social-wrap {
  @include flex-center-center;
  justify-content: space-between;
  max-width: 150px;
  width: 100%;
 
}
</style>
