<template>
  <div class="login-popup-wrap">
    <div class="overlay"></div>
    <div class="login-popup" v-if="modal">
      <h2>Loginuuuu</h2>
      <div class="login-form">
        <form action="#" method="post">
          <label for="uname"><b>Username</b></label>
          <input
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

          <button type="submit">Login</button>
         
          <button @click="modal = !modal">close</button>
        </form>
<div class="login-helper">
 <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        <a href="#">Sign up</a>
        <a href="#">Forgot password?</a>
</div>
<div class="login-has-social"></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
.login-popup {
  background-color: $bgSecondary;
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
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
</style>
