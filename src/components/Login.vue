<template>
  <div class="login-page">
    <div class="login-block">
      <form class="login-form" @submit.prevent="login">
        <h1>Login</h1>
        <input placeholder="Username" v-model="userName" required />
        <label class="wrong-username" v-if="isWrongUserName">This username didn't find, try registry</label>
        <input type="password" placeholder="Password" v-model="userPassword" required />
        <label class="wrong-password" v-if="isWrongPassword">Your password is wrong</label>
        <button class="submit-button">Submit</button>
        <p>or</p>
        <a class="registry-ref" @click="$router.push({ name: 'registration' })">Registry</a>
      </form>
    </div>
  </div>
</template>

<script>
import { getItem } from "../services/LocalStorage";
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
      isWrongUserName: false,
      isWrongPassword: false
    };
  },
  methods: {
    login() {
      let user = getItem(this.userName);
      if (!user) {
        return this.isWrongUserName = true;
      }
      if (this.userPassword !== user.password) {
        return this.isWrongPassword = true;
      }
      this.$store.dispatch("loginUser", user);
      this.$router.push({ name: "generator" });
    }
  }
};
</script>

<style>
.login-page {
  padding-top: 150px;
}
.login-block {
  margin: 0 auto;
  width: 450px;
  border-radius: 20px;
  border: 1px rgba(202, 202, 202, 0.5) solid;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
  padding: 40px;
  font-size: 20px;
  text-align: center;
}

.login-form h1 {
  font-weight: 400;
  font-size: 48px;
  margin-bottom: 0;
}

.login-form input {
  margin-top: 40px;
  width: 100%;
  padding: 10px;
}

.login-form p {
  color: grey;
}

.submit-button {
  display: block;
  margin: 40px auto 0px auto;
  font-size: 24px;
  font-weight: 400;
  height: 50px;
  border: 1px solid grey;
  width: 250px;
  color: white;
  background-color: black;
}

.registry-ref {
  text-decoration: underline;
  cursor: pointer;
}

.wrong-username,
.wrong-password {
  font-size: 14px;
}
.wrong-password {
  color: red;
}
</style>