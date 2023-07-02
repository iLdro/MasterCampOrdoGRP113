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
          <th class="ID_Ordonnance">Id Ordonnance</th>
        </tr>

        <template v-for="(prescriptions, index) in prescriptions" :key="index">
          
            <tr>
              <td colspan="4">Prescription {{ index + 1 }}</td>
            </tr>
            <tr v-for="(medicaments, subIndex) in prescriptions.medicaments" :key="subIndex">
              <td>{{ medicaments.nom_medicament }}</td>
              <td>{{ medicaments.dosage }}</td>
              <td>{{ medicaments.fréquence }}</td>
              <td>{{ medicaments.duree }}</td>
              
              <td><a @click="displayOrdo(prescriptions)">Afficher</a></td>
              <td>{{ prescriptions._id }}</td>
            </tr>
         
        
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
          pharmarcien_id: this.prescriptions[0].pharmarcien_id,
          medicaments: this.medicament,

        },{responseType: 'blob'})
       
       
        .then(response => {
          
          console.log("REPONSE",response.data)
          const url = window.URL.createObjectURL(response.data);
          console.log("URL",url)
          window.open(url, '_blank');
        },)
        .catch(error => {
          console.log("ERROR")
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
  font-size: 25px;
  text-decoration: underline;
  width: 150px;
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



input {
  height: 150px;
  width: 300px;
}
</style>
