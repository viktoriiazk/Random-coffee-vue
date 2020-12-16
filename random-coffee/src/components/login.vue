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
        <h2>Login</h2>
        <div class="login-form">
          <form action="#" method="post">
            <label for="uname"><b>Username</b></label>
            <input
              v-model="userName"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit" @click="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />
              Remember me
            </label>
            <button @click="toggleModal()">close</button>
          </form>

          <a href="#">Sign up</a>
          <a href="#">Forgot password?</a>
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
        let msg = (await axios.post("http://localhost:3000/messages", {
          message: this.userName
        })).data;
   
        this.$root.$emit("newUser", msg.message);
      } catch (error) {
        console.error(error);
      }
    }
  }
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
}

.login-popup {
  background-color: red;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Full-width input fields */
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
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
