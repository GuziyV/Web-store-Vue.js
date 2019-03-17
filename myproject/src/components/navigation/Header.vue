<template>
  <nav class="Header navbar navbar-light bg-light">
    <div>
      <router-link class="nav-link home" to="/">
        Home
      </router-link>
      <router-link class="nav-link" to="/products">
        Products
      </router-link>
      <router-link class="nav-link" to="/orders">
        Orders
      </router-link>
    </div>
    <div v-if="!isLoggedIn">
      <router-link class="nav-link btn btn-primary" to="/signin">
        Sign In
      </router-link>
      <router-link class="nav-link btn btn-dark" to="/signup">
        Sign Up
      </router-link>
    </div>
    <div v-else>
      <a class="btn btn-link" href="#">{{ currentUser.login }}</a> |
      <a href="#" class="btn btn-link-danger" v-on:click="logout">Logout</a>
    </div>
  </nav>
</template>
<script>
import { userService } from './../../services/userService';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'header',
  data() {
    return {
    };
  },
  methods: {
    logout(e) {
      console.log(this.$store);
      this.$store.dispatch('user/logout');
      this.$router.push('/');
    },
  },
  computed: mapState({
    isLoggedIn: state => state.user.isLoggedIn,
    currentUser: state => state.user.currentUser,
  }),
};
</script>

<style scoped>
.Header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
}

.Header .nav-link {
  display: inline-block;
}

.Header .btn.btn-link-danger {
  color: red;
}
</style>
