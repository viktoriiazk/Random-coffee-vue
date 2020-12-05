<template>
  <div class="container">
    <headerBlock />
    <mainBlock />
    <footerBlock />
  </div>
</template>
<script>
import headerBlock from "./header";
import mainBlock from "./main";
import footerBlock from './footer';
export default {
  components: {
    headerBlock,
    mainBlock,
    footerBlock,
  },
};
</script>
