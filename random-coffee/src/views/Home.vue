<template>
  <div class="home-wrap">
    <mainBlock />
  </div>
</template>

<script>
// @ is an alias to /src

import mainBlock from "@/components/main";


export default {
  name: 'Home',
  components: {

    mainBlock,
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";


</style>