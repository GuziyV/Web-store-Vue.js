<template>
    <div class="AddProduct-form">
    <form>
      <div class="form-group">
        <input v-model="model" type="text" class="form-control" placeholder="Model" required="required">
      </div>
      <div class="form-group">
        <input v-model="producerName" type="text" class="form-control" placeholder="Producer" required="required">
      </div>
      <div class="form-group">
        <input v-model="categoryName" type="text" class="form-control" placeholder="Category name" required="required">
      </div>
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
export default {
  name: 'add-product',
  data() {
    return {
      categoryName: "",
      producerName: "",
      model: "",
      price: "",
      description: "",
      numberOfItems: "",
    };
  },
  methods: {
    addProduct() {
      console.log(this.$store);
      this.$store.dispatch("products/addProduct", {
        categoryName: this.categoryName,
        producerName: this.producerName,
        model: this.model,
        price: this.price,
        description: this.description,
        numberOfItems: this.numberOfItems,
      });
    }
  }
};
</script>

<style scoped>
.AddProduct-form {
  max-width: 450px;
  margin: 0 auto;
  margin-top: 80px;
}

</style>
