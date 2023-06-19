<template>
  <div>
    <header>
      Vous avez {{ cart.length }} ordonnances
      <br />
      <button v-on:click="navigateTo('products')">Listes d'ordonnances</button> |
      <button v-on:click="navigateTo('cart')">Filtre liste</button>
    </header>
    <br />
    <div v-if="page === 'cart'">
      <CartClient v-on:removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>

    <div v-if="page === 'products'">
      <ProductsClient v-on:addItemToCart="addItemToCart" />
    </div>
  </div>
</template>

<script>
import CartClient from "@/components/CartClient.vue";
import ProductService from "@/services/ProductService.js";
import ProductsClient from "@/components/ProductsClient.vue";
export default {
  name: "App",
  data: () => {
    return {
      page: "products",
      cart: [],
      sum: 0,
      products: null,
    };
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
      this.sum += product.price;
      product.count -= 1;
    },
    removeItemFromCart(product) {
      console.log(product);
      const index = this.cart.indexOf(product);
      this.cart.splice(index, 1);
      this.sum -= product.price;
      product.count += 1;
    },
    navigateTo(page) {
      this.page = page;
    },
  },
  components: { ProductsClient, CartClient },
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
header {
  height: 100px;
  text-align: center;
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
}
header button {
  margin-top: 10px;
  width: 10%;
  height: 50px;
  background-image: linear-gradient(to right, #00a38c, #0054a3);
  color: #ffff;
  border-radius: 10px;
  cursor: pointer;
  border: 0px;
}
</style>
