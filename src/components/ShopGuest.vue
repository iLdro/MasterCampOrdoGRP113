<template>
  <h1>Guest</h1>
  <br>
  <div class="bigcontainer">
    <div class="filters">
      
    </div>
    <div class="products">
      <ProductCardGuest v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCardGuest from "@/components/ProductCardGuest.vue";
import ProductService from "@/services/ProductService.js";
//import axios from 'axios'

export default {
  name: "ProductList",
  components: {
    ProductCardGuest,
  },
  data() {
    return {
      products: null,
    };
  },
  created() {
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
.user-info {
  display: flex;
  justify-content: center;
}
.bigcontainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: rgb(0, 0, 0);
}
h1 {
  color: rgb(0, 0, 0);
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  color: rgb(0, 0, 0);
}
.card {
  position: relative;
  width: 250px;
  height: 300px;
  background: rgb(238, 237, 237);
  background-color: rgba(71, 70, 70, 0.13);
}
.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  /*mix-blend-mode: color-burn;*/
}
.card .imgBox img {
  max-width: 75%;
}
</style>
