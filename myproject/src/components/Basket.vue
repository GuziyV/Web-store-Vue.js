<template>
  <div class="Basket">
    <h3>
      Your basket:
    </h3>
    <div v-bind:key="item.id" v-for="item in items" class="cartItem">
      <div>
        {{ item.producerName }} {{ item.model }} ({{ item.numberOfItemsInCart }})
      </div>
      <div>
        {{ item.priceWithDiscount }}
      </div>
    </div>
    <button v-if="items && items.length > 0" class="btn btn-primary btn-block buyButton" v-on:click="buyItemsFromCart(user.id)">
      Buy
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Basket',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions('cart', ['buyItemsFromCart']),
  },
  computed: {
    ...mapState('cart', ['items']),
  },
  props: ['user'],
  created() {
    this.$store.dispatch('cart/getAllProducts', this.user.id);
  },
};
</script>

<style scoped>

.Basket {
  text-align: center;
}

.Basket .buyItems {
  padding: 10px;
}

.Basket .cartItem {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
}

</style>
