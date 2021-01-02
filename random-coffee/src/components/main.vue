<template>
  <div class="main-wrap">
    <loginForm />
    <toggleMenu />
    <div class="main">
      <h1 class="main__title">Random Coffee</h1>
      <p class="main__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis est, viverra
        at vehicula quis, lacinia id lorem. In hac.
      </p>
    </div>
  </div>
</template>
<script>
import toggleMenu from "@/components/toggle-menu";
import loginForm from "@/components/loginForm.vue";
// import axios from "axios";
export default {
  data(){
    // return {
    //    messages: []
    // }
  },
  components: {
    toggleMenu,
    loginForm,
  },
  // async created() {
  //     this.$root.$on("newUser", message => {
  // this.messages.push(message);
  // }
  // );
  //   this.message = (await axios.get("http://localhost:3000/messages")).data;

  // },
};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";
.main-wrap {
  // @include flex-center-center;
  transition: margin-left 0.5s;
  padding: 20px;

  position: relative;
  .main {
    text-align: center;
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
    transform: translate(0, 50%);
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
