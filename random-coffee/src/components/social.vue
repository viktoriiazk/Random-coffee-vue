<template>
  <div class="social-wrap">
    <a href="https://github.com/viktoriiazk" target="_blank"><img src="@/assets/social/github.svg" alt="Github logo" class="social-logo"/></a>

    <a href="https://www.linkedin.com/in/viktoriia-zakorchemna/" target="_blank"><img src="@/assets/social/linkedin.svg" alt="Linkedin logo" class="social-logo" /></a>
    <a href="https://www.facebook.com/viktoriia.zakorchemna/" target="_blank"><img src="@/assets/social/facebook.svg" alt="Facebook logo" class="social-logo" /></a>
    <a href="https://www.instagram.com/viktoriia_zakorchemna/" target="_blank"><img src="@/assets/social/instagram.svg" alt="Instagram logo" class="social-logo" /></a>
  </div>
</template>
<script>
export default {
 
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.social-wrap {
  @include flex-center-center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 150px;
  width: 100%;
 a {
   @include hover-scale;
   
 }
}
</style>
