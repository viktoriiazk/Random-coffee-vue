<template>
  <div class="login-wrap">
    <div class="signIn text-hover-dark">

          <button @click="[toggleModal(), (loginForm = true)]">Sign In</button>

    </div>

    <div class="signUp text-hover-dark">
      <button @click="[toggleModal(), (loginForm = false)]">Sign Up</button>
    </div>

    <div class="login-popup-wrap" v-if="modal">
      <div class="overlay"></div>
      <div class="login-popup">
      <!--  close btn don't work if add some data in the input field -->
        <button @click="toggleModal()" class="login-popup__close">
          <span></span>
          <span></span>
        </button>
        <router-link to="/">
          <img src="@/assets/Logo.svg" alt="Random Coffee logo"
        /></router-link>

        <div class="login-form" v-if="loginForm">

          <form action="#" method="post" @submit="signin">
            <fieldset>
              <label for="uemail"></label>
              <input
                v-model="userEmail"
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
              v-model="userPass"
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
          <!-- Task: Should do redirect to sign up form-->
            <button type="submit" class="login-form__btn">Sign up</button>
            <p>or continue with</p>
            <button type="submit">
              <img
                src="@/assets/social/facebook.svg"
                alt="Facebook logo"
                class="social-logo social-logo-login"
              />
            </button>
          </div>
        </div>
        <div class="login-form" v-else>
          <form action="#" method="post" @submit="signup">
            <fieldset>
              <label for="uname"></label>
              <input
                v-model="nUserName"
                type="text"
                placeholder="Name"
                name="uname"
                contenteditable
                required
              />
            </fieldset>
            <fieldset>
              <label for="uemail"></label>
              <input
                v-model="nUserEmail"
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
              v-model="nUserPass"
                type="password"
                placeholder="Password"
                name="psw"
                contenteditable
                required
              />
            </fieldset>
            <fieldset>
              <label for="cpsw"></label>
              <input
              v-model="nUserCpass"
                type="password"
                placeholder="Confirm password"
                name="cpsw"
                contenteditable
                required
              />
            </fieldset>

            <button type="submit" class="login-form__btn">
              Create an account
            </button>

            <div class="login-has-social">
              <p>or Sign up using</p>
              <button type="submit">
                <img
                  src="@/assets/social/facebook.svg"
                  alt="Facebook logo"
                  class="social-logo social-logo-login"
                />
              </button>
            </div>
            <p class="login-have-account">
              Already have an account?
<!-- Task: Should do redirect to sign in form-->

              <a href="#" @click="loginForm = true">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapMutations } from 'vuex';
export default {
  components: {},
  data() {
    return { modal: false, 
            userEmail: "",
            userPass: "",
            nUserName: "", 
            nUserEmail: "",
            nUserPass: "",
            nUserCpass: "",
             };
  },
  methods: {
    ...mapMutations(['setUser', 'setToken'])
,    toggleModal() {
      if (this.modal == false) {
        this.modal = true;
      } else {
        this.modal = false;
      }
    },
    test() {
      return console.log("test");
    },
async signin(e) {
  e.preventDefault();

  const response = await  fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        userEmail: this.userEmail,
        userPassword: this.userPass,
      }),
    });

 const { user, token } = await response.json();
  console.log(user, token);

  this.setUser(user);
  this.setToken(token);
  this.$router.push("/welcome");

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
      .social-logo-login {
        width: 30px;
      }
    }
  }
  .login-have-account {
    padding: 1rem 0;
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
