<template>
  <div class="Page">
    <Header></Header>

    <router-view></router-view>
  </div>
</template>

<script>
import Header from './navigation/Header';

export default {
  components: {
    Header,
  },
  name: 'Layout',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>

</style>
