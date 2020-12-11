<template>
  <div class="menu-wrap">
    <div class="menu-body" :class="{ toggleMenu: isAddClass }">
      <ul class="menu-body__ul">
        <li>
          <router-link
            to="/404"
            class="menu-body__item"
            :class="{ menuOpacity: isAddClass }"
            ><em>01</em><span>About</span></router-link
          >
        </li>
        <li>
          <router-link
            to="/404"
            class="menu-body__item"
            :class="{ menuOpacity: isAddClass }"
            ><em>02</em><span>Contact</span></router-link
          >
        </li>
        <li>
          <router-link
            to="/404"
            class="menu-body__item"
            :class="{ menuOpacity: isAddClass }"
            ><em>03</em><span>Test link</span></router-link
          >
        </li>
      </ul>
    </div>
    <div class="toggle-wrap" @click="toggleMenu" :class="{ 'toggle-on': isAddClass }">
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
      isAddClass: false,
    };
  },
  methods: {
    toggleMenu: function () {
      !this.isAddClass ? (this.isAddClass = true) : (this.isAddClass = false);
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
.menu-body {
  display: flex;
  align-items: center;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  &__ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-left: 30px;
  
  }
  &__item {
    display: flex;
    transform: translate(36px, 0);
    opacity: 0;
    color: $lightTextColor;
    &:hover {
      color: red;
    }
    em {
      font-style: normal;
    }
    span {
      padding-left: 10px;
      font-size: 2rem;
    }
   
  }

}
.toggleMenu {
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
.menu-body__item.menuOpacity {
  opacity: 1;
    transition: all 2s cubic-bezier(0.3, 1, 0.3, 1);
  transform: translate(0, 0);
 
  &:nth-child(1) a {
      transition-delay: 0.5s;
    }

  span {
   
    transition-delay: 0.7s;
  }
}
</style>
