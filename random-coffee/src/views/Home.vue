<template>
  <div class="home-wrap">
  
    <mainContent/>

  </div>
</template>

<script>
import mainContent from "@/components/main.vue";

export default {
  name: "Home",
  components: {
    mainContent,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";
</style>
