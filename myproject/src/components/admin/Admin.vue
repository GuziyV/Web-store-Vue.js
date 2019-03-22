<template>
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Add Product" active><add-product /></b-tab>
    <b-tab title="Discounts"><p>I'm the second tab content</p></b-tab>
  </b-tabs>
</div>
</template>

<script>
import AddProduct from "./AddProduct";

export default {
  name: 'admin',
  components: {
    AddProduct,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>

</style>
