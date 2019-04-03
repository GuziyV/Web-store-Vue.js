<template>
  <div class="Orders">
      <h3>
        Orders:
      </h3>
      <div class="row">
        <div class="col-4">
          Order id:
        </div>
        <div class="col-4">
          Number of items:
        </div>
        <div class="col-4">
          Status: 
        </div>
      </div>
      <div v-for="order in all" v-bind:key="order.id" class="row">
        <div class="col-4">
          {{ order.id }}
        </div>
        <div class="col-4">
          {{ order.products.length }}
        </div>
        <div class="col-4">
          {{ orderStatus(order.orderStatus) }}
        </div>
      </div>
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
    orderStatus(status) {
      if(status === 0) {
        return "Pending";
      } else if(status === 1) {
        return "Declined";
      } else if(status === 2) {
        return "Payed";
      } else {
        return "Unknown";
      }
    }
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
.Orders {
  text-align: center;
}

.Orders .row {
  padding: 10px;
  border-bottom: 1px solid lightgrey;
}

</style>
