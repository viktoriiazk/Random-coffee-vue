<template>
  <div class="main-wrap">
    <div class="main">
      <h1 class="main__title">Random Coffee</h1>
      <p class="main__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis est, viverra
        at vehicula quis, lacinia id lorem. In hac.
      </p>
    </div>
<toggleMenu/>
  </div>
</template>
<script>
import toggleMenu from '@/components/toggle-menu';
export default {
    components: {
        toggleMenu,
    }
};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";
.main-wrap {
  @include flex-center-center;
  .main {
    text-align: center;
    max-width: 780px;
    width: 100%;
    &__title {
      color: $lightTextColor;
      font-size: 4.37rem;
      font-weight: 400;
    }
    &__subtitle {
      margin-top: 42px;
      color: $darkTextColor;
      font-size: 1.37rem;
    }
  }
}
</style>
