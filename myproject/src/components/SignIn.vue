<template>
<div class="Register-form">
  <form>
    <h2 class="text-center">
      Log in
    </h2>
    <div class="form-group">
      <input v-model="login" type="text" class="form-control" placeholder="Username" required="required">
    </div>
    <div class="form-group">
      <input  v-model="password" type="password" class="form-control" placeholder="Password" required="required">
    </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block" v-on:click="signIn">
          Log in
        </button>
      </div>
  </form>
  <p class="text-center">
    <a href="#">
      Create an Account
    </a>
  </p>
</div>
</template>

<script>
import userService from './../services/userService';

export default {
  name: 'signin',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    signIn(e) {
      this.$store.dispatch("user/login", {
        login: this.login,
        password: this.password
      }).then(() => {
        this.$router.push("/")
      });
    },
  },
};
</script>

<style scoped>
.Register-form {
  max-width: 450px;
  margin: 0 auto;
  margin-top: 80px;
}
</style>
