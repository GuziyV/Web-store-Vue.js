<template>
  <div class="Products">
      <div class="productItem" v-for="product in allProducts" v-bind:key="product.producer + product.model">
        <div class="headline">
          {{ product.producerName }} {{ product.model }}
        </div>
        <div class="inStock">
          {{ product.numberOfItems }} in stock
        </div>
        <div class="description" v-line-clamp="5">
          {{ product.description }}
        </div>
        <div class="bottom">
          <div class="price-container">
            <div class="price-label">Price:</div>
            <div class="price">
              <div :class="{ withoutDiscount: product.price != product.priceWithDiscount }">{{ product.price }}</div>
              <div v-if="product.price != product.priceWithDiscount" class="priceWithDiscount">{{ product.priceWithDiscount }}</div>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" v-on:click="goToDetails(product.id)">
              Details
            </button>
          </div>
          <div class="form-group">
            <button v-if="currentUser" class="btn btn-success btn-block" v-on:click="addProductToCart(product)">
              Add to cart
            </button>
          </div>
        </div>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Products',
  data() {
    return {
      page: 1,
      allProducts: [],
    };
  },
  methods:{
    goToDetails(productId){
      this.$router.push("products/" + productId);
    },
    infiniteHandler($state) {
      this.$store.dispatch('products/getAllProducts', { page: this.page }).then(products => {
        if(products.length){
          this.allProducts.push(...products);
          this.page += 1;
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    }, 
    ...mapActions('cart', ['addProductToCart']),
    ...mapState('user', ['currentUser'])
  },
  created() {
    this.$store.dispatch('products/getAllProducts', { page: this.page }).then(products => {
        if(products.length){
          this.allProducts.push(...products);
          this.page += 1;
        }
      });
  }
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
  position: relative;
  margin: 30px;
  padding: 10px;
}

.Products .productItem .headline {
  text-align: center;
}

.Products .productItem .inStock {
  text-align: center;
  font-size: 80%;
  font-style: italic;
}

.Products .productItem .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
}

.Products .productItem .price-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 115%;
}

.Products .productItem .price {
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.Products .productItem .priceWithDiscount {
  color: green;
}

.Products .productItem .withoutDiscount {
  color: red;
  text-decoration: line-through;
}
</style>
