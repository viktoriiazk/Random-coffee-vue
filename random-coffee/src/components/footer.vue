<template>
  <div class="footer-wrap">
    <div class="footer-wrap__item technologies-list">
      <p>Technologies, which I used for this project:</p>
      <div class="technologies">
        <a href="https://html.spec.whatwg.org/" target="_blank"><img src="@/assets/html.svg" alt="html logo" /></a>
        <a href="https://www.w3.org/TR/CSS/#css" target="_blank"><img src="@/assets/css.svg" alt="css logo" /></a>
        <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm" target="_blank"><img src="@/assets/javascript.svg" alt="javascript logo" /></a>
        <a href="https://vuejs.org/" target="_blank"><img src="@/assets/vue.svg" alt="vue logo" /></a>
        <a href="https://webpack.js.org/" target="_blank"><img src="@/assets/webpack.svg" alt="webpack logo" /></a>
        <a href="https://www.npmjs.com/" target="_blank"><img src="@/assets/npm.svg" alt="npm logo" /></a>
      </div>
    </div>
    <div class="footer-wrap__item owner-contact">
    <a href="#"><img src="@/assets/Logo.svg" alt="logo"></a>
    <p>Designed and developed by </p>
    <address>
    <a  href="mailto:viktoriia.zakorchemna@gmail.com?subject=Sent%20from%20Random%20Coffee" target="_blanket">Viktoriia Zakorchemna</a>
    </address>
    
    </div>
    <div class="footer-wrap__item contacts-rights">
    <div class="contacts">
    <a href="mailto:viktoriia.zakorchemna@gmail.com" target="_blank"><img src="@/assets/email.svg" alt="email logo"></a>
    <a href="https://www.linkedin.com/in/viktoriia-zakorchemna/" target="_blank"><img src="@/assets/email.svg" alt="linkedin logo"></a>
    <a href="tel:+48577138755" target="_blank"><img src="@/assets/email.svg" alt="phone"></a>
    <a href="skype:viktoriia.zakorchemna_1" target="_blank"><img src="@/assets/email.svg" alt="skype logo"></a>

    </div>
    <small> &copy; 2020 All rights reserved</small>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";
.footer-wrap {
  @include flex-sb-center;
  padding: 1rem 0;
}
</style>
