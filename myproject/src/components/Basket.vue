<template>
  <div>
    <div v-bind:key="item.id" v-for="item in items">
      {{ item.producerName }} {{ item.model }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Basket',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
      ...mapState('cart', ['items'])
  },
  props: ['user'],
  created() {
    this.$store.dispatch('cart/getAllProducts', this.user.id);
  }
};
</script>

<style scoped>

</style>
