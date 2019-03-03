<template>
  <nav class="Header">
    <div>
      <a class="menu-item">
        Products
      </a>
      <a class="menu-item">
        Orders
      </a>
    </div>
    <div>
      <a class="menu-item">
        Sign in
      </a>
      <a class="menu-item btn btn-outline">
        Sign up
      </a>
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
  background-color: lightgray;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.Header .menu-item {
  margin: 0 15px;
}
</style>
