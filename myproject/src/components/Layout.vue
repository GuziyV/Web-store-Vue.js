<template>
  <div class="Page">
    <Header></Header>

    <router-view></router-view>
    <vue-snotify></vue-snotify>
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
    };
  },
};
</script>

<style scoped>

</style>
