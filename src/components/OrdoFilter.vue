<template>
  <div class="bigcontainer">
    <br />
    <div class="prescriptions">
      <table>
        <br />
       
        

          <template v-for="(prescriptions, index) in prescriptions" :key="index">
            <template v-if="prescriptions.expired === false">
            <tr>
              <td colspan="5">
                <button @click="displayOrdo(prescriptions)">Afficher prescription N°{{ index + 1 }}</button>
              </td>

            </tr>
              <tr>
                <th class="nom_medicament">Nom</th>
                <th class="dosage">Dosage</th>
                <th class="fréquence">Fréquence</th>
                <th class="Durée">Durée</th>
                <th class="ID_Ordonnance">Id Ordonnance</th>
              </tr>
            <tr v-for="(medicaments, subIndex) in prescriptions.medicaments" :key="subIndex">
              <td>{{ medicaments.nom_medicament }}</td>
              <td>{{ medicaments.dosage }}</td>
              <td>{{ medicaments.fréquence }}</td>
              <td>{{ medicaments.duree }}</td>
              
              
              <td>{{ prescriptions._id }}</td>
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

import { ref} from 'firebase/storage';

export default {
  props: ["cart"],
  data() {
    return {
      prescriptions: [],
      imageUrl: "",
      medicament: [],
    }; 
  },
  methods: {
    displayOrdo(prescriptions) {
      // Find the medications for the selected prescription
      const medications = prescriptions.medicaments.map(med => {
        return {
          nom_medicament: med.nom_medicament,
          dosage: med.dosage,
          fréquence: med.fréquence,
          duree: med.duree,
        };
      });

      this.medicament = medications; // Assign the medications to the variable
      console.log("MEDICAMENTS")
      console.log(this.medicament)
      axios.post("http://localhost:5173/ordonnance", 
        {

          client_id: this.prescriptions[0].client_id,
          medecin_id: this.prescriptions[0].medecin_id,
          medicaments: this.medicament,
        },{responseType: 'blob'})
       
       
        .then(response => {
          //console.log("REPONSE")
          //console.log(response.data);
          //this.imageUrl = response.data._id;
          //console.log("IMAGE URL")
          //console.log(this.imageUrl)
          // const blob = new Blob([response.data], { type: 'image/png' });

          // // Create object URL for the Blob
          // const imageUrl = URL.createObjectURL(blob);

          // console.log("IMAGE URL")
          // console.log(imageUrl)
          
          // window.open(imageUrl, '_blank');
          console.log("REPONSE",response.data)
          const url = window.URL.createObjectURL(response.data);
          console.log("URL",url)
          window.open(url, '_blank');
        },)
        .catch(error => {
          console.log(error);
        });
        
      }
    
    
    },
  created() {
    const userId = localStorage.getItem("id");
    console.log(userId);
    ProductService.getOrdonnance(userId)
      .then(response => {
        console.log("ici LA REPONSE")
        console.log(response.data);
        this.prescriptions = response.data;
        
        console.log("ORDONNNANCE")
        console.log(this.prescriptions)
        console.log("Client ID:", this.prescriptions[0].client_id);
      console.log("Medecin ID:", this.prescriptions[0].medecin_id);
      console.log("Medicaments:", this.prescriptions[0].medicaments);
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
  }
};
    
    
 


</script>

<style scoped>

table {
  width: 1500px;
}
tr {
  border: 5px blue;
  height: 5px;
}
th {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  width: 20%;
  
}

td {
  padding: 10px;
  width: 20%;
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
  
}
button:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}



input {
  height: 150px;
  width: 300px;
}


.prescriptions {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.prescriptions table {
  width: 100%;
}

.prescriptions th {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  width: 20%;
}

.prescriptions td {
  
  width: 20%;
}

.prescriptions a {
  color: #00a38c;
  cursor: pointer;
}

</style>
