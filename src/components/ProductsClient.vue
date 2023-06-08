<template>
  <div>
    <br />
    <div class="bigcontainer">
      <div class="filters"></div>
      <div class="products">
        <div v-for="(product, index) in products" :key="index" class="card">
          {{ product.name }}
          <div class="imgBox">
            <img :src="product.image" />
          </div>
          <div class="contentBox">
            <div class="price">{{ product.price }}€</div>
            <div class="ordonnance">besoin d'ordonnance ? <br> {{ product.ordo }}</div>
            <button class="buy" id="add" v-on:click="addItemToCart(product)">
              Add to Cart for {{ product.price }}€
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService.js";
export default {
  data: () => {
    return {
      products: null,
    };
  },
  methods: {
    addItemToCart(product) {
      this.$emit("addItemToCart", product);
    },
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

.filters {
  border: 1px solid black;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  color: rgb(0, 0, 0);
}
.card {
  position: relative;
  width: 350px;
  height: 390px;
  background: rgb(238, 237, 237);
  border-radius: 50px;
  background-color: rgba(71, 70, 70, 0.103);
}
.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
}
.card .imgBox img {
  max-width: 60%;
}
button {
  background-image: linear-gradient(to right, #00a38c, #0054a3);
  opacity: 0.8;
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  border: 0px;
  width: 75%;
  height: 50px;
  font-size: 14px;
}

button:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
