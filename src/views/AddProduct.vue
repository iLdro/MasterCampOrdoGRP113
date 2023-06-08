<template>
  <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>
  <form>
    <h1>Add a Product</h1>
    <div class="gauche">
      <label>Select a category </label>
      <input
        list="category"
        v-model="product.category"
        placeholder="Select a category"
      />
      <datalist id="category">
        <option value="Anti-inflammatoires" />
        <option value="Antibiotiques " />
        <option value="Cardiologie " />
        <option value="Dermatologie " />
        <option value="Autres" />
      </datalist>
      <label>Name</label>
      <input type="text" v-model="product.name" placeholder="Name" />
    </div>
    <div class="droite">
      <label>Product's image link</label>
      <input
        type="text"
        v-model="product.image"
        placeholder="Product's image link"
      />
      <label>Price (in euros)</label>
      <input
        type="number"
        v-model="product.price"
        placeholder="Price (in euros)"
      />
    </div>
    <button v-on:click="addProduct()" class="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        id: "",
        category: "",
        name: "",
        image: "",
        price: "",
        rating: null,
      },
    };
  },
  methods: {
    addProduct() {
      axios.post("http://localhost:3000/products", {
        category: this.product.category,
        name: this.product.name,
        image: this.product.image,
        price: this.product.price,
        rating: this.product.rating,
      });
      console
        .log(this.product)
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

<style scoped>
body {
  background-color: #080710;
}
.background {
  width: 430px;
  height: 650px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#0066ff, #ea00ff);
  left: -290px;
  top: -5px;
}
.shape:last-child {
  background: linear-gradient(to right, #5eff00, #00ffbf);
  right: -290px;
  bottom: -100px;
}
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 550px;
  width: 800px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
h1 {
  grid-column-start: 1;
  grid-column-end: 3;
  height:5px;
}
.gauche, .droite {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.gauche {
  grid-column-start: 1;
  grid-column-end: 2;
}
.droite {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}
label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #000000;
}
button {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-top: 50px;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
</style>