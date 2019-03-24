<template>
  <div class="Products">
      <div class="productItem" v-for="product in products" v-bind:key="product.model">
        <div class="headline">
          {{ product.producerName }}
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Products',
  computed: mapState({
    products: state => state.products.all,
  }),
  methods: mapActions('cart', [
    'addProductToCart',
  ]),
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
};
</script>

<style scoped>
.Products {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.Products .productItem {
  width: 300px;
  height: 350px;
  background-color:honeydew;
  margin: 30px;
  padding: 10px;
}
</style>
