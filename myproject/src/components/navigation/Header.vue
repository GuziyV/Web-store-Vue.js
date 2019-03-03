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
    <div>
      <router-link class="nav-link btn btn-primary" to="/signin">
        Sign In
      </router-link>
      <router-link class="nav-link btn btn-dark" to="/signup">
        Sign Up
      </router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'header',
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
</style>
