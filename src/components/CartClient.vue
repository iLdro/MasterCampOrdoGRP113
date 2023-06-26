<template>
  <div class="bigcontainer">
    <br />
    <div class="prescriptions">
      <table>
        <br />
        <tr>
          <th class="Prescription">Prescription</th>
          <th class="Date">Date</th>
          <!-- add more table headers as needed -->
        </tr>
        <tr v-for="(prescription, index) in prescriptions" :key="index">
          <td>{{ prescription.name }}</td>
          <td>{{ prescription.date }}</td>
          <!-- add more table cells as needed -->
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import ProductService from "@/services/ProductService.js";
export default {
  props: ["cart"],
  data: () => {
    return {
      prescription: [],
    };
  },
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
    checkPrescription() {
      const hasPrescription = this.cart.some(product => product.ordo);
      if (hasPrescription) {
        console.log("Au moins un produit nécessite une ordonnance.");
        alert("nous avons besoin de votre ordonnance pour valider ce panier")
      } else {
        console.log("Aucun produit ne nécessite une ordonnance.");
      }
    },
   
    
  },
  created() {
    ProductService.getOrdonnance("64958e29428e5f9a03cba8ca")
      .then(response => {
        this.prescriptions = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.user-info {
  display: flex;
  justify-content: center;
}
table {
  width: 1500px;
}
tr {
  border: 5px blue;
  height: 5px;
}
th {
  font-size: 25px;
  text-decoration: underline;
  width: 150px;
}
.Remove {
  width: 370px;
}
table img {
  max-width: 50%;
}
.bigcontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
}
.filters {
  border: 1px solid black;
}
.products {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: rgb(0, 0, 0);
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
.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f2f2f2;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.upload-button {
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 10%;
}
.ordo{
  visibility:hidden;
}


input {
  height: 150px;
  width: 300px;
}
</style>
