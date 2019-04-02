<template>
    <div class="AddProduct-form">
    <form>
        <v-select type="text"
                  v-model="selectedProduct"
                  class="product-select"
                  :options="products"
                  placeholder="Select item"
                  @search="search"
                  label ="fullName">
        </v-select>
      <div class="form-group">
        <input v-model="selectedProduct.producerName" type="text" class="form-control" placeholder="Producer" required="required">
      </div>
      <div class="form-group">
        <div>
          Model:
        </div>
        <input v-model="selectedProduct.model" type="text" class="form-control" placeholder="Model" required="required">
      </div>
      <div class="form-group">
        <div>
          Category:
        </div>
        <input v-model="selectedProduct.categoryName" type="text" class="form-control" placeholder="Category name" required="required">
      </div>
      <div class="form-group">
        <div>
          Price:
        </div>
        <input v-model="selectedProduct.price" type="number" class="form-control" placeholder="Price" required="required">
      </div>
      <div class="form-group">
        <div>
          Description:
        </div>
        <textarea v-model="selectedProduct.description" type="text" class="form-control" placeholder="Description" required="required"> </textarea>
      </div>
      <div class="form-group">
        <div>
          Number of Items:
        </div>
        <input v-model="selectedProduct.numberOfItems" type="number" class="form-control" placeholder="Number of items" required="required">
      </div>
      <div class="form-group">
        <div>
          Discount in percents:
        </div>
        <input v-model="selectedProduct.discount" type="number" class="form-control" placeholder="Number of items" required="required">
      </div>
      <div class="form-group">
        <button class="btn btn-warning btn-block" v-on:click="updateProduct">
          Update
        </button>
      </div>
      <div class="form-group">
        <button class="btn btn-danger btn-block" v-on:click="deleteProduct">
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

function getInitialState() {
  return {
    selectedProduct: {
      fullName: 'Select product',
    },
  };
}

export default {
  name: 'update-product',
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
  data() {
    return getInitialState();
  },
  computed: mapState({
    products: state => state.products.all,
  }),
  methods: {
    clearData() {
      Object.assign(this.$data, getInitialState());
    },
    updateProduct() {
      this.$store.dispatch('products/updateProduct', this.selectedProduct);
    },
    deleteProduct() {
      this.$store.dispatch('products/deleteProduct', this.selectedProduct).then(() => this.clearData());
    },
    search(input) {
      const store = this.$store;
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        store.dispatch('products/getAllProducts', {
          search: input,
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.AddProduct-form {
  max-width: 450px;
  margin: 0 auto;
  margin-top: 80px;
}

.AddProduct-form .product-select {
  margin-bottom: 10px;
}

</style>
