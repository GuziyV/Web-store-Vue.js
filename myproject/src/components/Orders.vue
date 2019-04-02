<template>
  <div class="Orders">
      Orders
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Orders',
  data() {
    return {
    };
  },
  props: ['user'],
   methods: {
    
  },
  computed: {
    ...mapState('orders', ['all']),
  },
  created() {
    this.$store.dispatch('orders/getAllOrders', this.user.id);
  }
};
</script>

<style scoped>

</style>
