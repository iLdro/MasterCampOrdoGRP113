<template>
  <h1>Admin Page</h1>
  <br>
  <div class="bigcontainer">
    <div class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/ProductService.js";
//import axios from 'axios'
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: null,
    };
  },
  created() {
    //get events from mock db when component is created
    ProductService.getProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  color: rgb(0, 0, 0);
}
.bigcontainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: rgb(0, 0, 0);
}
</style>