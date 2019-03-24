<template>
    <div class="AddProduct-form">
    <form>
      <div class="form-group">
        <input v-model="model" type="text" class="form-control" placeholder="Model" required="required">
      </div>
      <v-select v-model="producer"
                  class="category-select"
                  :options="producers"
                  label="name"
                  type="text"
                  placeholder="Producer name"
                  required="required">
        </v-select>
        <v-select v-model="category"
                  class="category-select"
                  :options="categories"
                  label="name"
                  type="text"
                  placeholder="Category name"
                  required="required">
        </v-select>
      <div class="form-group">
        <input v-model="price" type="number" class="form-control" placeholder="Price" required="required">
      </div>
      <div class="form-group">
        <textarea v-model="description" type="text" class="form-control" placeholder="Description" required="required"> </textarea>
      </div>
      <div class="form-group">
        <input v-model="numberOfItems" type="number" class="form-control" placeholder="Number of items" required="required">
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

export default {
  name: 'add-product',
  data() {
    return {
      category: { name: 'Select Category' },
      producer: { name: 'Select Producer' },
      model: '',
      price: '',
      description: '',
      numberOfItems: '',
    };
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
    addProduct() {
      this.$store.dispatch('products/addProduct', {
        categoryName: this.category.name,
        producerName: this.producer.name,
        model: this.model,
        price: this.price,
        description: this.description,
        numberOfItems: this.numberOfItems,
      });
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
