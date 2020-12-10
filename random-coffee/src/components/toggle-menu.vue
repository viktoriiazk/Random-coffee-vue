<template>
  <div class="menu-wrap">
    <div class="menu-body" :class="{'toggleMenu': isAddClass}">
      <ul>
        <li> <router-link to="/404">About</router-link></li>
       <li>  <router-link to="/404">Test</router-link></li>
       <li>  <router-link to="/404">Contact</router-link></li>
      </ul>
    </div>
       <div class="toggle-wrap" @click="toggleMenu" :class="{'toggle-on': isAddClass}">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
isAddClass: false
    }
  },
  methods: {
       toggleMenu: function() {
      !this.isAddClass ? this.isAddClass = true : this.isAddClass = false; 
        }
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
.menu-body {
    height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
    ul {
      display: flex;
      flex-direction: column;
    }
  }
.toggleMenu{
 width: 400px;
  }
  .toggle-on {
    span:nth-child(1) {
    transform: rotate(45deg);
    top: 24px;
    left: 11px;
}
span:nth-child(2) {
    opacity: 0;
}
span:nth-child(3) {
    width: 58px;
    top: 24px;
    left: 11px;
    transform: rotate(-45deg);
}
  }

 
</style>
