<template>
  <div class="login-wrap">
    <div class="signIn text-hover-dark">
      <button @click="toggleModal()">Sign In</button>
    </div>

    <div class="signUp text-hover-dark">
      <button>Sign Up</button>
    </div>

    <div class="login-popup-wrap" v-if="modal">
      <div class="overlay"></div>
      <div class="login-popup">
        <button @click="toggleModal()" class="login-popup__close">
          <span></span>
          <span></span>
        </button>
        <router-link to="/">
          <img src="@/assets/Logo.svg" alt="Random Coffee logo"
        /></router-link>
        <div class="login-form">
          <form action="#" method="post">
            <fieldset>
              <label for="uemail"></label>
              <input
                v-model="userName"
                type="text"
                placeholder="Email"
                name="uemail"
                contenteditable
                required
              />
            </fieldset>

            <fieldset>
              <label for="psw"></label>
              <input
                type="password"
                placeholder="Password"
                name="psw"
                contenteditable
                required
              />
            </fieldset>

            <button type="submit" @click="submit" class="login-form__btn">
              Login
            </button>
          </form>
          <div class="login-helper">
            <label>
              <input type="checkbox" checked="checked" name="remember" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <div class="login-has-social">
            <button type="submit" class="login-form__btn">Sign up</button>
            <p>or continue with</p>
            <button type="submit" >
            <img src="@/assets/social/facebook.svg" alt="Facebook logo" class="social-logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return { modal: false, userName: "" };
  },
  methods: {
    toggleModal() {
      if (this.modal == false) {
        this.modal = true;
      } else {
        this.modal = false;
      }
    },
    async submit() {
      try {
        let msg = (
          await axios.post("http://localhost:3000/messages", {
            message: this.userName,
          })
        ).data;

        this.$root.$emit("newUser", msg.message);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
.login-wrap {
  @include flex-sb-center;
  width: 120px;
  .text-hover-dark {
    @include hover-text-ligth;
  }
  a {
    color: $lightTextColor;
    font-family: $fontMain;
  }
  button {
    color: $lightTextColor;
  }
}

.login-popup {
  background-color: $bgSecondary;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.4rem;
  max-width: 400px;
  width: 100%;
  fieldset {
    display: flex;
    justify-content: center;
  }
  /* Full-width input fields */
  input[type="text"],
  input[type="password"] {
    max-width: 270px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: none;
    border-bottom: 1px solid $lightTextColor;
    box-sizing: border-box;
    background-color: $transparent;
    caret-color: $mineShaft;
    color: $lightTextColor;
    &::placeholder {
      color: $lightTextColor;
    }
    &:focus,
    textarea:focus {
      color: $lightTextColor;
    }
  }
  input {
    .rememberMe {
      color: red;
    }
  }
  img {
    display: block;
    margin: 20px auto;
    width: 60px;
    height: auto;
  }
  &__close {
    height: 20px;
    width: 30px;
    position: relative;
    display: block;
    margin-left: auto;
    top: 20px;
    &:hover {
      transform: scale(1.3);
    }
    span:first-child {
      transform: rotate(45deg);
      top: 0px;
    }
    span:nth-child(2) {
      transform: rotate(-45deg);
      top: 0px;
    }
    span {
      display: block;
      position: absolute;
      width: 20px;
      height: 1px;
      background-color: $lightTextColor;
    }
  }
  .login-form {
    max-width: 270px;
    margin: 0 auto;
    &__btn {
      @include btn(transparent, $lightTextColor);
      margin: 1rem auto;
      max-width: 270px;
      width: 100%;
      &:hover {
        background-color: $lightTextColor;
        color: $darkTextColor;
      }
    }
    .login-helper {
      display: flex;
      justify-content: space-between;
      max-width: 270px;
      margin: 0 auto;

    }
    .login-has-social {
      text-align: center;
    }
  }
}
.overlay {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
</style>
