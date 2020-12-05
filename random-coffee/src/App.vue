<template>
  <div id="app">
 <Home/>
  </div>
</template>

<script>

import Home from './components/home-page'

export default {
  name: 'App',
  components: {
  Home
  }
}
</script>

<style lang="scss" >
@import './styles/main.scss';
#app {
   background-color: $bgDark;
   min-height: 100vh;
}
</style>
