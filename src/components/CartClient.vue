<template>
  <div class="bigcontainer">
    <br />
    <div class="products">
      <table>
        <br />
        <tr>
          <th class="Image">Image</th>
          <th class="Product">Product</th>
          <th class="Price">Price</th>
          <th class="Remove">Remove</th>
          <th class="ordonnance">Ordonnance</th>
        </tr>
        <tr v-for="(product, index) in cart" :key="index">
          <td><img :src="product.image" /></td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}€</td>
          <td>
            <button class="buy" v-on:click="removeItemFromCart(product)">
              Remove from cart
            </button>
          </td>
          <td>{{ product.ordo }}</td>
        </tr>
      </table>
    </div>
  </div>
  <br />
  <br />
  <div>
    <label class="custom-file-upload">
      <input type="file" ref="fileInput" @change="handleFileChange" />
    </label>
    <br />
    <button class="upload-button" @click="checkPrescription">Confirmer</button>
  </div>
  <div class="ordo">Veuillez nous fournir votre ordonnance.</div>
</template>

<script>
import ProductService from "@/services/ProductService.js";
export default {
  props: ["cart"],
  data: () => {
    return {
      products: null,
    };
  },
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
    total() {
      this.total = this.product.prix.reduce(
        (total, current) => total + current,
        0
      );
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
    /*
    handleFileChange() {
      // Récupérer les fichiers sélectionnés
      const files = this.$refs.fileInput.files;
      // Faire quelque chose avec les fichiers, comme les stocker dans le modèle de données
      // ou les envoyer à un serveur
      console.log(files);
    },
    uploadFile() {
      // Effectuer des opérations de téléchargement ou de publication des fichiers
      // en utilisant les fichiers sélectionnés
      const files = this.$refs.fileInput.files;
      // Exemple d'envoi de fichiers via une requête AJAX (AJAX doit être configuré correctement)
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
      axios
        .post("/votre-endpoint", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Fichier publié avec succès !");
          // Faire quelque chose avec la réponse du serveur
        })
        .catch((error) => {
          console.error("Erreur lors de la publication du fichier :", error);
          // Gérer les erreurs de téléchargement ou de publication
        });
    },
    */
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
