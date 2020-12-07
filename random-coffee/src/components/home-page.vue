<template>
  <div class="container home-wrap">
    <headerBlock />
    <mainBlock />
    <footerBlock />
  </div>
</template>
<script>
import headerBlock from "./header";
import mainBlock from "./main";
import footerBlock from "./footer";
export default {
  components: {
    headerBlock,
    mainBlock,
    footerBlock,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";

.home-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

</style>