<template>
  <div class="registry-page">
    <div class="registry-block">
      <form class="registry-form" @submit.prevent="registry">
        <h1>Registry</h1>
        <input placeholder="Username" v-model="userName" required />
        <label class="wrong-username" v-if="isUserNameTaken">This username has already taken</label>
        <input type="password" v-model="userPassword" placeholder="Password" required />
        <input type="password" v-model="repeatUserPassword" placeholder="Password" required />
        <label class="wrong-password" v-if="!isPasswordMatched">Your passwords don't matches</label>
        <button class="submit-button">Submit</button>
        <p>or</p>
        <a class="login-ref" @click="$router.push({ name: 'login' })">Login</a>
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
      repeatUserPassword: "",
      isUserNameTaken: false,
      isPasswordMatched: true
    };
  },
  methods: {
    registry() {
      if (getItem(this.userName)) {
        return this.isUserNameTaken = true;
      }
      if (this.userPassword !== this.repeatUserPassword) {
        return this.isPasswordMatched = false;
      } else {
        this.isPasswordMatched = true;
        this.$store.dispatch("registerNewUser", {
          name: this.userName,
          password: this.userPassword
        });
        this.$router.push({ name: "generator" });
      }
    }
  }
};
</script>

<style>
.registry-page {
  padding-top: 150px;
}
.registry-block {
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

.registry-form h1 {
  font-weight: 400;
  font-size: 48px;
  margin-bottom: 0;
}

.registry-form input {
  margin-top: 40px;
  width: 100%;
  padding: 10px;
}

.registry-form p {
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

.login-ref {
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