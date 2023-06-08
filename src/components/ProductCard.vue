<template>
  <div class="card">
    <div class="imgBox">
      <img :src="product.image" />
    </div>
    <div class="contentBox">
      <div class="price">
        category: {{ product.category }}, <br />
        name: {{ product.name }}
      </div>
      <button v-on:click="deleteProduct(product.id)">Delete Product</button>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService.js";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteProduct(id) {
      console.log(id);
      ProductService.deleteProduct(id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.product-link {
  color: #1c3e50;
  text-decoration: none;
}
.card {
  position: relative;
  width: 350px;
  height: 350px;
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
  max-width: 55%;
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
}

button:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
