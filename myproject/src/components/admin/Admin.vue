<template>
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Add Product" active><add-product /></b-tab>
    <b-tab title="Update/detele products"><update-product /></b-tab>
  </b-tabs>
</div>
</template>

<script>
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

export default {
  name: 'admin',
  components: {
    AddProduct,
    UpdateProduct
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>

</style>
