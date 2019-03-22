<template>
  <div class="Products">
      <div class="productItem" v-for="product in products" v-bind:key="product.model"> 
        
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Products',
  computed: mapState({
    products: state => state.products.all,
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
};
</script>

<style scoped>

</style>
