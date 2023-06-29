<template>
  <div class="bigcontainer">
    <br />
    <div class="prescriptions">
      <table>
        <br />
        <tr>
          <th class="nom_medicament">Nom</th>
          <th class="dosage">Dosage</th>
          <th class="fréquence">Frequence</th>
          <th class="Durée">Durée</th>
          <th class="Ordonnance">Ordonnance</th>
        </tr>

        <template v-for="(prescriptions, index) in prescriptions" :key="index">
          <template v-if="prescriptions.expired === false">
          
            <tr>
              <td colspan="4">Prescription {{ index + 1 }}</td>
            </tr>
            <tr v-for="(medicaments, index) in prescriptions.medicaments" :key="index">
              <td>{{ medicaments.nom_medicament }}</td>
              <td>{{ medicaments.dosage }}</td>
              <td>{{ medicaments.fréquence }}</td>
              <td>{{ medicaments.duree }}</td>
              <td><img :src="prescriptions.image_url"></td>
             
            </tr>
          </template>
        
        </template>
      </table>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService.js";
import axios from "axios";
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
//import { ref, getDownloadURL } from 'firebase/storage';
import { ref} from 'firebase/storage';


export default {
  props: ["cart"],
  data() {
    return {
      prescriptions: [],
      imageUrl: "",
      
    }; 
  },
  methods: {
    convertBSONToPNG(bsonData) {
    fetch('http://localhost:5000/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bsonData }),
    })
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the blob object
        const url = URL.createObjectURL(blob);

        // Use the URL to display the PNG file
        this.imageUrl = url;
      })
      .catch(error => {
        console.log('Error converting BSON to PNG:', error);
      });
  },
  },
  created() {
    ProductService.getOrdonnance("64958e29428e5f9a03cba8ca")
      .then(response => {
        console.log("ici LA REPONSE")
        console.log(response.data);
        this.prescriptions = response.data;
        
        console.log("ORDONNNANCE")
        console.log(this.prescriptions);
      })
      .catch(error => {
        console.log(error);
      });

      const firebaseConfig = {
        apiKey: "AIzaSyDPUmUJRHyiKpeD0h7S3uTGSBBW2mCI36k",
        authDomain: "odomastercamp.firebaseapp.com",
        projectId: "odomastercamp",
        storageBucket: "odomastercamp.appspot.com",
        messagingSenderId: "854010577490",
        appId: "1:854010577490:web:6a68d85dd0c80513cad58b",
        measurementId: "G-G2KEYC7PEP"
      };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig, { storageBucket: 'odomastercamp.appspot.com'});
    const storage = getStorage(app);
    

    const imageRef = ref(storage, '1687781370.jpg');
   
    console.log(imageRef)

    axios.post('http://localhost:5000/user/getImages',  {id:"649c017474ae4369162836bb"})
        .then((url) => {
          // Use the URL to access and display the image
          console.log("YOUPI CA MARCHE")
          console.log(url);
          this.imageUrl = url.data;
          console.log(url.data.image)
          this.convertBSONToPNG(url.data.image);

          })
          .catch((error) => {
            console.log("ici erreur");
            // Handle any errors that occur
            console.log(error);
          });
              
            },
    
    mounted() {
      
    }


};</script>

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
