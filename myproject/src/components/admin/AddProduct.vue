<template>
    <div class="AddProduct-form">
    <form>
      <div class="form-group">
        <input v-model="product.model" type="text" class="form-control" placeholder="Model" required="required">
      </div>
      <v-select v-model="product.producer"
                  class="category-select"
                  :options="producers"
                  label="name"
                  type="text"
                  placeholder="Producer name"
                  required="required">
        </v-select>
        <v-select v-model="product.category"
                  class="category-select"
                  :options="categories"
                  label="name"
                  type="text"
                  placeholder="Category name"
                  required="required">
        </v-select>
      <div class="form-group">
        <input v-model="product.price" type="number" class="form-control" placeholder="Price" required="required">
      </div>
      <div class="form-group">
        <textarea v-model="product.description" type="text" class="form-control" placeholder="Description" required="required"> </textarea>
      </div>
      <div class="form-group">
        <input v-model="product.numberOfItems" type="number" class="form-control" placeholder="Number of items" required="required">
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block" v-on:click="addProduct">
          Create
        </button>
        </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
function getInitialData() {
  return {
    product: {
      category: { name: 'Select Category' },
      producer: { name: 'Select Producer' },
      model: '',
      price: '',
      description: '',
      numberOfItems: '',
    }
  }
}
export default {
  name: 'add-product',
  data() {
    return getInitialData();
  },
  computed: mapState({
    categories: state => state.categories.all,
    producers: state => state.producers.all,
  }),
  created() {
    this.$store.dispatch('categories/getAllCategories');
    this.$store.dispatch('producers/getAllProducers');
  },
  methods: {
    clearData() {
      Object.assign(this.$data, getInitialData());
    },
    addProduct() {
      this.$store.dispatch('products/addProduct', {
        categoryName: this.product.category.name,
        producerName: this.product.producer.name,
        model: this.product.model,
        price: this.product.price,
        description: this.product.description,
        numberOfItems: this.product.numberOfItems,
      }).then(() => this.clearData());
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

.AddProduct-form .category-select {
  margin-bottom: 10px;
}

</style>
