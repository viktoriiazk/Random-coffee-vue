<template>
<div class="menu-wrap">
 <div class="toggle-wrap" @click="console">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="menu-body">
      gjhdsgfjdgj
  </div>
</div>
 
</template>
<script>
export default {
  methods: {
    console: function () {
      console.log("hello");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";
.toggle-wrap {
  width: 58px;
  height: 34px;
  position: fixed;
  right: calc(6% - 11px);
  top: calc(50% - 25px);
  display: block;
  z-index: 5000;
  span {
    width: 58px;
    height: 1px;
    right: 0;
    display: block;
    position: absolute;
    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    background-color: $btnLight;

    &:nth-child(1) {
      top: 15px;
    }
    &:nth-child(3) {
      top: 30px;
      width: 48px;
      left: auto;
      right: 0;
    }
  }
  &:hover span {
    box-shadow: 0px 0px 20px 4px rgba(242, 201, 76, 1);
    transition: 0.3s;
  }
}
</style>
